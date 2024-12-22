"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background/50">
      <div className="container mx-auto px-4 py-16">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            About EduManage
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering educators and learners with innovative technology
            solutions.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At EduManage, our mission is to revolutionize education through
              technology. We strive to create intuitive and powerful tools that
              enhance the learning experience, streamline administrative tasks,
              and foster collaboration between educators, students, and
              institutions.
            </p>
            <p className="text-muted-foreground">
              We believe that by empowering educational organizations with the
              right tools, we can contribute to a world where quality education
              is accessible, engaging, and tailored to individual needs.
            </p>
          </motion.div>
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-4">
              We envision a future where technology seamlessly integrates with
              education, breaking down barriers and opening up new possibilities
              for learning and growth. Our goal is to be at the forefront of
              this transformation, continually innovating and adapting to the
              evolving needs of the education sector.
            </p>
            <p className="text-muted-foreground">
              We see EduManage as not just a tool, but a catalyst for positive
              change in education worldwide.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Lifelong Learning",
                description:
                  "We believe in continuous growth and improvement, both for ourselves and our users.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We foster teamwork and partnerships to create the best solutions for our community.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We constantly push boundaries to bring cutting-edge technology to education.",
              },
              {
                icon: Target,
                title: "User-Centric",
                description:
                  "Our users' needs and experiences are at the heart of everything we do.",
              },
              {
                icon: Heart,
                title: "Passion",
                description:
                  "We are deeply committed to our mission of improving education through technology.",
              },
              {
                icon: Zap,
                title: "Efficiency",
                description:
                  "We strive to create tools that save time and enhance productivity in education.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <value.icon className="mr-2 h-5 w-5" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <p className="text-card-foreground mb-4">
              EduManage was born out of a shared frustration among educators and
              administrators with the limitations of existing educational
              software. Our founders, a team of experienced educators and
              software engineers, came together in 2015 with a vision to create
              a comprehensive, user-friendly platform that would address the
              real needs of educational institutions.
            </p>
            <p className="text-card-foreground mb-4">
              What started as a simple tool for course management quickly
              evolved into a full-fledged CMS/LMS solution. As we collaborated
              with schools, universities, and training centers, we gained
              invaluable insights that shaped our product. We listened to the
              challenges faced by our users and continuously refined our
              platform to meet their needs.
            </p>
            <p className="text-card-foreground">
              Today, EduManage is used by thousands of educational institutions
              worldwide, from small private schools to large universities. Our
              impact on the education industry has been significant, with many
              of our users reporting increased efficiency, improved student
              engagement, and better learning outcomes. We're proud of how far
              we've come, but we're even more excited about the future and the
              continued positive change we can bring to education.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Our Team</h2>
          <motion.p
            variants={fadeIn}
            className="text-muted-foreground text-center mb-8"
          >
            Behind EduManage is a diverse team of passionate educators,
            experienced developers, and visionary leaders. Our combined
            expertise spans decades in education, software development, and
            business management. We're united by our commitment to improving
            learning experiences through technology.
          </motion.p>
          <motion.p
            variants={fadeIn}
            className="text-muted-foreground text-center"
          >
            From our customer support representatives to our senior leadership,
            every member of the EduManage team is dedicated to our mission. We
            work tirelessly to ensure that our platform not only meets but
            exceeds the expectations of our users, constantly pushing the
            boundaries of what's possible in educational technology.
          </motion.p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Innovation and Customer Satisfaction
          </h2>
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <p className="text-card-foreground mb-4">
              At EduManage, innovation is not just a buzzword—it's a core part
              of our DNA. We're constantly exploring new technologies and
              methodologies to enhance our platform. From integrating AI-powered
              learning assistants to developing advanced analytics tools, we're
              always looking for ways to stay ahead of the curve and provide our
              users with cutting-edge solutions.
            </p>
            <p className="text-card-foreground mb-4">
              But innovation without purpose is meaningless. That's why we place
              such a high emphasis on customer satisfaction. We maintain open
              lines of communication with our users, regularly soliciting
              feedback and ideas. Our customer support team is known for its
              responsiveness and dedication to solving user issues promptly and
              effectively.
            </p>
            <p className="text-card-foreground mb-6">
              We believe that our success is directly tied to the success of our
              users. When educational institutions thrive using our platform, we
              consider that our greatest achievement. It's this commitment to
              our users' success that drives us to continually improve and
              innovate.
            </p>
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
