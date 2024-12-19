import React from "react";
import Dashboard from "@/components/dashboard";
import { createClient } from "@/utils/supabase/client";
import { getUser } from "@/utils/supabase/getUser";

export default async function DashboardPage() {
  const supabase = createClient();
  const user = await getUser();
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

  const courses = coursesData.map((course) => {
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

  return <Dashboard courses={courses} refinedUser={refinedUser} />;
}
