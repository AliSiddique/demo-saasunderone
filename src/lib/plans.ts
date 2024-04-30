export const freePlan = {
  name: "Free",
  description:
    "The free plan is limited. Upgrade to the PRO plan for unlimited.",
  stripePriceId: "",
};

export const proPlan = {
  name: "PRO",
  description: "The PRO plan has unlimited.",
  stripePriceId: process.env.PRO_MONTHLY_PRICE || "",
};
