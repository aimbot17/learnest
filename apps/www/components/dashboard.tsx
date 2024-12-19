import React from "react";
import Sidebar from "@/components/sidebar/sidebarWrapper";
import { Courses } from "@/components/course/courses";
import { Course } from "@/types/course/course";

interface DashboardProps {
  courses: Course[];
  refinedUser: { email: string } | null;
}

export default function Dashboard({ courses, refinedUser }: DashboardProps) {
  return (
    <div className="flex h-screen bg-white text-black">
      <div className="w-64 flex-shrink-0 border-r border-gray-200">
        <Sidebar user={refinedUser} />
      </div>
      <main className="flex-grow overflow-y-auto">
        <Courses courses={courses} />
      </main>
    </div>
  );
}
