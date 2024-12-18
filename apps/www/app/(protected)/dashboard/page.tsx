import React from "react";
import { getUser } from "@/utils/supabase/getUser";
import Sidebar from "@/components/sidebar/sidebarWrapper";
import { Courses } from "@/components/course/courses";
import { createClient } from "@/utils/supabase/client";
import { Course } from "@/types/course/course";

export default async function Dashboard() {
  const user = await getUser();
  const supabase = createClient();
  const refinedUser = user && user.email ? { email: user.email } : null;

  const { data: coursesData, error: coursesError } = await supabase
    .from("Course")
    .select(
      "id, title, description, image, tags, lessons, students, rating, status, instructorId"
    );

  if (coursesError) {
    console.error("Error fetching courses:", coursesError.message);
    return <div>Error loading courses</div>;
  }

  // Fetch instructors based on instructorId
  const instructorIds = coursesData.map((course) => course.instructorId);
  const { data: instructorsData, error: instructorsError } = await supabase
    .from("Instructor")
    .select("id, name, avatar")
    .in("id", instructorIds);

  if (instructorsError) {
    console.error("Error fetching instructors:", instructorsError.message);
    return <div>Error loading instructors</div>;
  }

  // Map the fetched data to your Course type
  const courses: Course[] = coursesData.map((course) => {
    const instructor = instructorsData.find(
      (instructor) => instructor.id === course.instructorId
    );
    return {
      id: course.id,
      title: course.title,
      description: course.description,
      image: course.image,
      tags: course.tags,
      lessons: course.lessons,
      students: course.students,
      rating: course.rating,
      status: course.status as "in-progress" | "completed",
      instructor: {
        name: instructor?.name,
        avatar: instructor?.avatar,
      },
    };
  });

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
