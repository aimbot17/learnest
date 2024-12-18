"use client";

import { Book, Users, Star } from "lucide-react";
import Image from "next/image";
import { Course } from "@/types/course/course";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-white/90 hover:bg-black hover:text-white transition-colors duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <CardHeader>
        <h2 className="text-xl font-bold">{course.title}</h2>
        <p className="text-sm text-muted-foreground">{course.description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Book className="h-4 w-4" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{course.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              fill
              className="rounded-full object-cover"
              sizes="24px"
            />
          </div>
          <span className="text-sm">{course.instructor.name}</span>
        </div>
      </CardContent>
    </Card>
  );
}
