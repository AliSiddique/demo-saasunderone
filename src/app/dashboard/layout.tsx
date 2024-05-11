import Dashboard from "@/components/ui/DashboardLayout";
import DashboardHead from "@/components/ui/DashboardLayout";
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
  ProtectedRoute();
  return (
    <div>
      <Dashboard subscription={"PRO"}>
      {children}
      </Dashboard>
    </div>
  );
}
