import { PrismaClient } from "@prisma/client";
import { courses } from "../lib/config";

const prisma = new PrismaClient();

async function main() {
  for (const course of courses) {
    const instructor = await prisma.instructor.upsert({
      where: { name: course.instructor.name },
      update: {},
      create: {
        name: course.instructor.name,
        avatar: course.instructor.avatar,
      },
    });

    await prisma.course.create({
      data: {
        id: course.id,
        title: course.title,
        description: course.description,
        image: course.image,
        tags: course.tags,
        lessons: course.lessons,
        students: course.students,
        rating: course.rating,
        status: course.status,
        instructor: {
          connect: { id: instructor.id },
        },
      },
    });
  }
}

main()
  .then(() => {
    console.log("Database seeded successfully!");
  })
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
