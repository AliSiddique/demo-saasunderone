import ProfileForm from "@/components/forms/ProfileForm";
import getCurrentUser from "@/lib/User";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import React from "react";

type Props = {};

export default async function page({}: Props) {
  // const user = await getCurrentUser();
  // const subscription = await getUserSubscriptionPlan(user.id);
  return (
    <div>
      <ProfileForm isPro={true} />
    </div>
  );
}
