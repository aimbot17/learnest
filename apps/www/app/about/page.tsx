"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  Target,
  Heart,
  Zap,
  Award,
  ThumbsUp,
  MessageCircle,
  Sparkles,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TeamMemberGrid from "@/components/team-member-grid";
import TrustBadges from "@/components/trust-badges";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-[100svh] bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.02]" />
        <div
          className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform rotate-45 animate-pulse"
          style={{ animationDuration: "15s" }}
        />
        <div
          className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/10 to-transparent rounded-full transform rotate-45 animate-pulse"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 max-w-7xl z-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-24"
        >
          <motion.div variants={fadeIn} className="mb-6">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/80"
            >
              <Building className="mr-2 h-4 w-4" />
              Our Story
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            About learnest
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Empowering educators and learners with innovative technology
            solutions.
          </motion.p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                At Learnest, we are transforming education by harnessing the power of technology.
                Our goal is to empower educators, engage students, and simplify institutional processes with
                innovative and user-friendly tools. By bridging the gap between traditional learning and modern advancements,
                we foster collaboration, inspire growth, and create a seamless educational ecosystem for all stakeholders.
                </p>
                <p>
                At Learnest, we believe that empowering educational organizations with the right tools is the key to creating
                a world where quality education is accessible to everyone. Our mission is to make learning engaging, personalized,
                and adaptable to the unique needs of each individual, ensuring no one is left behind in their educational journey.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Our Vision
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                At Learnest, we envision a future where technology serves as a catalyst for transformative education, 
                seamlessly integrating into learning environments to break down barriers and unlock endless possibilities. 
                Our aspiration is to lead this evolution by driving innovation, adapting to 
                the ever-changing needs of educators and learners, and creating solutions that empower 
                every stakeholder in the education ecosystem.
                </p>
                <p>
                We see Learnest as not just a platform, but a catalyst for positive transformation in education across the globe.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-24"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Our Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
                <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group border-primary/10 hover:border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary text-xl group-hover:scale-105 transition-transform duration-300">
                      <value.icon className="mr-3 h-6 w-6" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Our Story
          </h2>
          <Card className="bg-background/80 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-8 sm:p-12 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
              Learnest was born out of a shared frustration among educators and administrators 
              with the inefficiencies of traditional educational software. A team 
              of passionate educators and innovative software engineers joined forces to bring their vision 
              to life: a comprehensive, user-friendly platform designed to meet the real-world needs of 
              educational institutions. Learnest represents the fusion of expertise and innovation, driven by 
              a commitment to reshape the future of education.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              What began as a simple tool for course management quickly evolved 
              into a robust CMS/LMS solution. Through collaboration with schools, 
              universities, and training centers, we gained invaluable insights that 
              have shaped Learnest into what it is today. By listening closely to the challenges 
              faced by our users, we have continually refined and enhanced our platform to 
              provide solutions that truly meet the diverse needs of the education community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Today, Learnest is trusted by thousands of educational institutions worldwide, 
              ranging from small private schools to large universities. Our impact on the education 
              sector has been profound, with many of our users reporting increased efficiency, enhanced 
              student engagement, and improved learning outcomes. While we’re proud of our journey so far, 
              we’re even more excited about the future and the continued positive transformation we can bring to education.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-24"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Our Team
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Behind Learnest is a diverse group of passionate educators, 
            experienced developers, and visionary leaders. Together, 
            our combined expertise spans decades in education, software development, 
            and business management, driving us to innovate and shape the future of education.
          </motion.p>
          <TeamMemberGrid />
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Innovation and Customer Satisfaction
          </h2>
          <Card className="bg-background/80 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-8 sm:p-12 space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                 At Learnest, innovation is more than just a buzzword—it’s at the heart of everything we do.
                 We are constantly exploring new technologies and methodologies to enhance our platform. 
                 From integrating AI-powered learning assistants to developing advanced analytics tools, we are always 
                 ahead of the curve, committed to delivering cutting-edge solutions that meet the evolving needs of our users.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 But innovation without purpose is meaningless. That’s why we place such a strong emphasis on customer satisfaction. 
                 We maintain open lines of communication with our users, regularly seeking feedback and ideas to improve. 
                 Our customer support team is renowned for its responsiveness and commitment to resolving user concerns quickly and effectively.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                 We believe that our success is directly tied to the success of our users. 
                 When educational institutions thrive with the help of Learnest, we consider that our greatest achievement. 
                 It’s this unwavering commitment to our users' success that drives us to continuously improve and innovate.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Demo
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-24"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Awards and Recognition
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: Award,
                title: "Best EdTech Solution",
                description: "EdTech Breakthrough Awards 2022",
              },
              {
                icon: ThumbsUp,
                title: "Top Rated LMS",
                description: "G2 Crowd Leader 2023",
              },
              {
                icon: Users,
                title: "1 Million+ Users",
                description: "Across 50+ countries",
              },
            ].map((award, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-center p-8 bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group border-primary/10 hover:border-primary/20">
                  <award.icon className="h-16 w-16 mx-auto text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-4">{award.title}</h3>
                  <p className="text-lg text-muted-foreground">
                    {award.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="py-16 border-y border-primary/10 bg-background/50 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Trusted By
          </h2>
          <TrustBadges />
        </motion.section>
      </div>
    </div>
  );
}
