import getCurrentUser from "@/lib/User";
import { stripe } from "@/lib/stripe";
import { db } from "../../../../prisma/db";
import { config } from "../../../../config";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    const dbUser = await db.user.findFirst({
      where: {
        email: user.email,
      },
    });
    const stripeCustomerId = dbUser?.stripeCustomerId;
    const billingPortalSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId as string,
      return_url: `${config.siteUrl}/dashboard/settings`,
    });

    return Response.json({ url: billingPortalSession.url });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
