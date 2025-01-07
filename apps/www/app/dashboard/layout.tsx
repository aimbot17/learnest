import { Metadata } from "next";
import { SideNav } from "@/components/dashboard/side-nav";

export const metadata: Metadata = {
  title: "Dashboard | EduTech Pro CMS",
  description: "Admin dashboard for EduTech Pro CMS platform",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
