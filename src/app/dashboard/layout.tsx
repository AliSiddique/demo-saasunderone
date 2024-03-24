import DashboardHead from "@/components/ui/DashboardHead";
import type { Metadata } from "next";

export default function Dashboardlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DashboardHead />
      {children}
    </div>
  );
}
