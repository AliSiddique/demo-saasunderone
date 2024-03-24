import SettingsLayout from "@/components/Setttings";
import type { Metadata } from "next";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SettingsLayout>{children}</SettingsLayout>
    </div>
  );
}
