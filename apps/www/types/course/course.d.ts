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
}
