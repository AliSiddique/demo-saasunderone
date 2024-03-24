import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import getCurrentUser from "@/lib/User";
import { config } from "../../../../config";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { message: "You need to be signed in", ok: false },
        { status: 403 },
      );
    }

    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card", "paypal"],
      customer_email: user.email as string,
      mode: "subscription", // Change mode to 'subscription'
      subscription_data: {
        trial_period_days: 14,
      },
      line_items: [
        {
          price: process.env.PRO_MONTHLY_PRICE, // Use the ID of your subscription price
          quantity: 1,
        },
      ],

      success_url: `${config.siteUrl}/dashboard/settings`,
      cancel_url: `${config.siteUrl}/dashboard/settings`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    console.log("checkoutSession", checkoutSession);
    return NextResponse.json({ id: checkoutSession.id, ok: true });
  } catch (error) {
    console.error(error);
    console.log("error", error);
    return NextResponse.json(
      { message: "something went wrong" + error, ok: false },
      { status: 500 },
    );
  }
}
