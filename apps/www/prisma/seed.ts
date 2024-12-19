import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Rachel Green",
        role: "Early Access Member",
        content:
          "The exclusive features we get to test are game-changing. It's exciting to be part of shaping a platform that's going to revolutionize online learning.",
        avatar: "https://randomuser.me/api/portraits/women/13.jpg",
        date: "1 month in beta",
      },
      {
        name: "Ross Geller",
        role: "Early Access Member",
        content:
          "I've never seen such an innovative platform for learning. The tools provided have made learning so much more interactive and engaging.",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        date: "2 months in beta",
      },
      {
        name: "Monica Geller",
        role: "Early Access Member",
        content:
          "The platform’s features are absolutely fantastic. It’s been amazing to be a part of a community that is revolutionizing the way education is delivered online.",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        date: "3 weeks in beta",
      },
      {
        name: "Phoebe Buffay",
        role: "Beta Tester",
        content:
          "I love how the platform integrates learning with real-world applications. It’s making the learning experience so much more engaging!",
        avatar: "https://randomuser.me/api/portraits/women/16.jpg",
        date: "2 months in beta",
      },
      {
        name: "Joey Tribbiani",
        role: "Beta Tester",
        content:
          "The platform is user-friendly and the content is easy to follow. It’s been great testing new features and seeing it evolve!",
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
        date: "1 month in beta",
      },
      {
        name: "Chandler Bing",
        role: "Early Access Member",
        content:
          "It’s fun to be part of a platform that’s bringing something new and exciting to the world of online learning.",
        avatar: "https://randomuser.me/api/portraits/men/18.jpg",
        date: "1.5 months in beta",
      },
      {
        name: "Janice Litman",
        role: "Beta Tester",
        content:
          "I can’t stop talking about how awesome this platform is! It’s easy to use, and I can’t wait to see it grow.",
        avatar: "https://randomuser.me/api/portraits/women/19.jpg",
        date: "3 weeks in beta",
      },
      {
        name: "Gunther",
        role: "Early Access Member",
        content:
          "The experience has been nothing short of amazing. The features are incredibly useful, and I’m excited to see where this goes.",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        date: "2 months in beta",
      },
      {
        name: "Benjamin Hobart",
        role: "Beta Tester",
        content:
          "This platform is revolutionizing how we approach learning. I can’t imagine using anything else after this.",
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        date: "1 month in beta",
      },
      {
        name: "Alice Williams",
        role: "Beta Tester",
        content:
          "A truly transformative platform. It's helping me learn more effectively with interactive tools and a great community.",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        date: "3 weeks in beta",
      },
      {
        name: "Dylan Smith",
        role: "Early Access Member",
        content:
          "I’ve tested a lot of platforms, but this one stands out. The intuitive interface and interactive learning are fantastic.",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        date: "1.5 months in beta",
      },
      {
        name: "Nina Johnson",
        role: "Beta Tester",
        content:
          "The platform has really pushed the envelope in online learning. It's engaging, modern, and intuitive.",
        avatar: "https://randomuser.me/api/portraits/women/24.jpg",
        date: "2 months in beta",
      },
      {
        name: "Chris Davis",
        role: "Early Access Member",
        content:
          "I can already see how this platform will revolutionize education. It's well thought out and filled with great features.",
        avatar: "https://randomuser.me/api/portraits/men/25.jpg",
        date: "1 month in beta",
      },
      {
        name: "Ella Cooper",
        role: "Beta Tester",
        content:
          "This platform has everything I need to succeed in my studies. The tools are user-friendly and make learning enjoyable.",
        avatar: "https://randomuser.me/api/portraits/women/26.jpg",
        date: "2 weeks in beta",
      },
    ],
  });

  console.log("Testimonials created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
