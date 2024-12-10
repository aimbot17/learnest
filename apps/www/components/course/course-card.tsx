import React from "react";
import { Course } from "@/types/course/course";

// SVG Icons
const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg transform hover:-translate-y-1">
      <div className="relative h-48">
        <img
          src={course.image || ""}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white text-black text-xs px-2 py-1 rounded-full border border-gray-200 transition-colors duration-300 hover:bg-black hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <BookIcon />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon />
            <span>{course.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm">{course.instructor.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
