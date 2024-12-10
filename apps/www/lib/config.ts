const sampleCourses = [
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
  },
  {
    id: "2",
    title: "Advanced TypeScript Techniques",
    description:
      "Take your TypeScript skills to the next level with advanced concepts and real-world applications.",
    image:
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["TypeScript", "JavaScript", "Programming"],
    lessons: 18,
    students: 2200,
    rating: 4.9,
    instructor: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "3",
    title: "Full-Stack Development with Node.js",
    description:
      "Learn to build scalable and efficient full-stack applications using Node.js and modern frameworks.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["Node.js", "Express", "MongoDB"],
    lessons: 30,
    students: 4100,
    rating: 4.7,
    instructor: {
      name: "Emily Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  },
  {
    id: "4",
    title: "UI/UX Design Principles",
    description:
      "Master the art of creating intuitive and visually appealing user interfaces for web and mobile applications.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["UI", "UX", "Design"],
    lessons: 22,
    students: 2800,
    rating: 4.6,
    instructor: {
      name: "Alex Thompson",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  },
  {
    id: "5",
    title: "Machine Learning Fundamentals",
    description:
      "Dive into the world of machine learning with Python, covering key algorithms and practical applications.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["Machine Learning", "Python", "Data Science"],
    lessons: 28,
    students: 3200,
    rating: 4.9,
    instructor: {
      name: "Olivia Parker",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    },
  },
  {
    id: "6",
    title: "Cloud Computing with AWS",
    description:
      "Learn to leverage Amazon Web Services for scalable and reliable cloud infrastructure solutions.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    tags: ["AWS", "Cloud", "DevOps"],
    lessons: 26,
    students: 2600,
    rating: 4.7,
    instructor: {
      name: "Daniel Lee",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    },
  },
];

export default sampleCourses