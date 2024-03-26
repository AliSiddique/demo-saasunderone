import DashboardHead from "@/components/ui/DashboardHead";
import ProtectedRoute from "@/lib/ProtectedRoute";
import getCurrentUser from "@/lib/User";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import type { Metadata } from "next";

export default async function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();
  const isPro = await getUserSubscriptionPlan(user.id);
  ProtectedRoute();
  return (
    <div>
      <DashboardHead />
      {children}
    </div>
  );
}
