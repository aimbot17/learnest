import React from "react";
import { Course } from "@/types/course/course";
import Header from "./header";
import FilterButtons from "./filter-button";
import CourseList from "./course-list";

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  const filters = [
    { label: "All", count: courses.length },
    { label: "In Progress", count: Math.floor(courses.length * 0.3) },
    { label: "Completed", count: Math.floor(courses.length * 0.1) },
  ];

  return (
    <div className="container mx-auto px-4 py-3 animate-fadeIn">
      <Header title="Courses" />
      <FilterButtons filters={filters} />
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;
