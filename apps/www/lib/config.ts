import { Course } from "../types/course/course";

export const courses: Course[] = [
  {
    id: "1",
    title: "Mastering React Fundamentals",
    description:
      "Build a strong foundation in React development with hands-on projects and expert guidance.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["React", "JavaScript", "Frontend"],
    lessons: 24,
    students: 3500,
    rating: 4.8,
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    status: "in-progress",
  },
  {
    id: "2",
    title: "Advanced TypeScript Development",
    description:
      "Master TypeScript's advanced features and build type-safe applications with confidence.",
    image:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["TypeScript", "JavaScript", "Backend"],
    lessons: 32,
    students: 2800,
    rating: 4.9,
    instructor: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    status: "completed",
  },
  {
    id: "3",
    title: "Next.js App Router Masterclass",
    description:
      "Learn to build modern web applications with Next.js 13+ and the revolutionary App Router.",
    image:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["Next.js", "React", "Full Stack"],
    lessons: 28,
    students: 1200,
    rating: 4.7,
    instructor: {
      name: "Emily Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    status: "in-progress",
  },
  {
    id: "4",
    title: "UI/UX Design Principles",
    description:
      "Master the fundamentals of user interface and experience design for modern web applications.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["Design", "UI/UX", "Figma"],
    lessons: 20,
    students: 4200,
    rating: 4.6,
    instructor: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    status: "completed",
  },
  {
    id: "5",
    title: "Node.js Backend Development",
    description:
      "Build scalable and efficient backend services with Node.js and Express.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["Node.js", "Backend", "API"],
    lessons: 30,
    students: 2100,
    rating: 4.8,
    instructor: {
      name: "Lisa Thompson",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    status: "in-progress",
  },
  {
    id: "6",
    title: "Cloud Architecture with AWS",
    description:
      "Learn to design and implement scalable cloud solutions using Amazon Web Services.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["AWS", "Cloud", "DevOps"],
    lessons: 36,
    students: 1800,
    rating: 4.9,
    instructor: {
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    status: "completed",
  },
  {
    id: "7",
    title: "Mobile Development with React Native",
    description:
      "Create cross-platform mobile applications using React Native and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["React Native", "Mobile", "Cross-platform"],
    lessons: 26,
    students: 2900,
    rating: 4.7,
    instructor: {
      name: "Anna Martinez",
      avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    status: "in-progress",
  },
  {
    id: "8",
    title: "Data Visualization with D3.js",
    description:
      "Master the art of creating interactive data visualizations for the web.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["D3.js", "Data Viz", "JavaScript"],
    lessons: 22,
    students: 1500,
    rating: 4.6,
    instructor: {
      name: "Robert Chang",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    status: "completed",
  },
];
