import React from "react";
import { Course } from "@/types/course/course";
import CourseCard from "./course-card";

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);

export default CourseList;
