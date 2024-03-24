import { headers } from "next/headers";
import Stripe from "stripe";

import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";
import AppleReceiptEmail from "@/components/email-templates/Receipt";
import { db } from "../../../../prisma/db";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string,
    );
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );

    // Update the user stripe into in our database.
    // Since this is the initial subscription, we need to update
    // the subscription id and customer id.
    await db.user.update({
      where: {
        email: session?.customer_email as string,
      },
      data: {
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000,
        ),
      },
    });
  }

  if (event.type === "invoice.payment_succeeded") {
    // Retrieve the subscription details from Stripe.
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string,
    );
    console.log(subscription.id);

    // Update the price id and set the new period end.
    await db.user.update({
      where: {
        stripeSubscriptionId: subscription.id,
      },
      data: {
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000,
        ),
      },
    });
  }
  if (event.type === "checkout.session.expired") {
    // If the payment failed, we want to cancel the subscription.
    const { data, error } = await resend.emails.send({
      from: "ad" as string,
      to: session.customer_email as string,
      subject: "Did your payment fail? 🤔",
      react: AppleReceiptEmail(),
    });
    if (error) {
      console.log(error);
    }
  }
  if (event.type === "customer.subscription.trial_will_end") {
    const { data, error } = await resend.emails.send({
      from: "SDDS" as string,
      to: session.customer_email as string,
      subject: "Your trial is ending soon! 🤔",
      react: AppleReceiptEmail(),
    });
  }

  return new Response(null, { status: 200 });
}
