export type CourseStatus = "all" | "in-progress" | "completed";

export interface Instructor {
  name: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  lessons: number;
  students: number;
  rating: number;
  instructor: Instructor;
  status: Exclude<CourseStatus, "all">;
}
