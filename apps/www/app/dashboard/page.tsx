import { Metadata } from "next";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { Overview } from "@/components/dashboard/overview";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StorageUsage } from "@/components/dashboard/storage-usage";
import { PendingTasks } from "@/components/dashboard/pending-task";

export const metadata: Metadata = {
  title: "Dashboard | Learnest Pro CMS",
  description: "Admin dashboard for EduTech Pro CMS platform",
};

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Welcome back! Here's an overview of your CMS."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Overview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentActivity className="col-span-4" />
        <StorageUsage className="md:col-span-2 lg:col-span-3" />
      </div>
      <PendingTasks />
    </DashboardShell>
  );
}
