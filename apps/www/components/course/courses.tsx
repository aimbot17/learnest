"use client";

import { useState, useMemo } from "react";
import { Course, CourseStatus } from "@/types/course/course";
import { Header } from "./header";
import { FilterButtons } from "./filter-button";
import { CourseCard } from "./course-card";

interface CoursesProps {
  courses: Course[];
}

export function Courses({ courses }: CoursesProps) {
  const [activeFilter, setActiveFilter] = useState<CourseStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = useMemo(() => {
    const getFilteredCount = (status: CourseStatus) =>
      courses.filter((course) => status === "all" || course.status === status)
        .length;

    return [
      { label: "All", value: "all" as const, count: getFilteredCount("all") },
      {
        label: "In Progress",
        value: "in-progress" as const,
        count: getFilteredCount("in-progress"),
      },
      {
        label: "Completed",
        value: "completed" as const,
        count: getFilteredCount("completed"),
      },
    ];
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesFilter =
        activeFilter === "all" || course.status === activeFilter;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [courses, activeFilter, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <Header
        title="Courses"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <FilterButtons
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {filteredCourses.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No courses found matching your criteria
        </div>
      )}
    </div>
  );
}
