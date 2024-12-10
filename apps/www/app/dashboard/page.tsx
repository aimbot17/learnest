import React from "react";
import { getUser } from "@/utils/supabase/getUser";
import Sidebar from "@/components/sidebar/sidebarWrapper";
import Courses from "@/components/course/courses";
import dummyData from "@/lib/config";

export default async function Dashboard() {
  const user = await getUser();
  const refinedUser = user && user.email ? { email: user.email } : null;

  return (
    <div className="flex h-screen bg-white text-black">
      <div className="w-64 flex-shrink-0 border-r border-gray-200">
        <Sidebar user={refinedUser} />
      </div>
      <main className="flex-grow  overflow-y-auto">
        <Courses courses={dummyData} />
      </main>
    </div>
  );
}
