import React, { useState } from "react";

// Types
interface Instructor {
  name: string;
  avatar: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  lessons: number;
  students: number;
  rating: number;
  instructor: Instructor;
}

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

// Button Component
const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline";
  }
> = ({ children, variant = "default", className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      variant === "default"
        ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Select Component
const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <select
    className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  >
    {children}
  </select>
);

// Input Component
const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = "",
  ...props
}) => (
  <input
    className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

// CourseCard Component
const CourseCard: React.FC<{ course: Course; as?: "div" | "a" }> = ({
  course,
  as = "div",
}) => {
  const CardComponent = as === "a" ? "a" : "div";
  const cardProps = as === "a" ? { href: `/courses/${course.id}` } : {};

  return (
    <CardComponent
      {...cardProps}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white text-blue-500 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <BookIcon />
            <span>{course.lessons}</span>
          </div>
          <div className="flex items-center gap-1">
            <UsersIcon />
            <span>{course.students}</span>
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
    </CardComponent>
  );
};

// CourseList Component
const CourseList: React.FC<{ courses: Course[]; as?: "div" | "a" }> = ({
  courses,
  as = "div",
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} as={as} />
    ))}
  </div>
);

// Header Component
const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
    <h1 className="text-2xl font-bold">{title}</h1>
    <div className="flex items-center gap-4 w-full md:w-auto">
      <Select className="w-full md:w-40">
        <option value="">Category</option>
        <option value="all">All Categories</option>
        {/* Add more categories as needed */}
      </Select>
      <Input type="search" placeholder="Search" className="w-full md:w-64" />
    </div>
  </header>
);

// FilterButtons Component
const FilterButtons: React.FC<{
  filters: { label: string; count: number }[];
}> = ({ filters }) => (
  <div className="flex flex-wrap gap-4 mb-8">
    {filters.map((filter, index) => (
      <Button key={filter.label} variant={index === 0 ? "default" : "outline"}>
        {filter.label}{" "}
        <span
          className={`ml-2 ${index === 0 ? "bg-white text-blue-500" : "bg-gray-100 text-gray-600"} rounded-full px-2 text-xs`}
        >
          {filter.count}
        </span>
      </Button>
    ))}
  </div>
);

// Main CoursesPage Component
export default function CoursesPage({ courses = [] }: { courses: Course[] }) {
  const [displayAs, setDisplayAs] = useState<"div" | "a">("div");

  const filters = [
    { label: "Live", count: 25 },
    { label: "New", count: 2 },
    { label: "Upcoming", count: 0 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Courses" />
      <FilterButtons filters={filters} />
      <div className="mb-4">
        <Button onClick={() => setDisplayAs(displayAs === "div" ? "a" : "div")}>
          Toggle Card as {displayAs === "div" ? "Link" : "Div"}
        </Button>
      </div>
      <CourseList courses={courses} as={displayAs} />
    </div>
  );
}
