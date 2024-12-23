"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Sparkles,
  School,
  GraduationCap,
  Briefcase,
  Users,
  BookOpen,
  BarChart,
  CheckCircle,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const solutions = [
  {
    id: "schools",
    title: "K-12 Schools",
    icon: School,
    color: "from-blue-500 to-cyan-500",
    description:
      "Empower your school with tools designed to enhance learning and streamline administration.",
    challenges: [
      "Managing diverse curricula across grade levels",
      "Facilitating parent-teacher communication",
      "Tracking student progress and generating reports",
    ],
    scenario:
      "Lincoln Elementary School implemented EduManage to centralize their curriculum management and improve communication with parents. Teachers now easily share lesson plans, assignments, and student progress reports through the platform. Parents have real-time access to their children's academic performance, leading to a 40% increase in parent engagement.",
    stats: { users: "500+", satisfaction: "95%", timesSaved: "30%" },
  },
  {
    id: "universities",
    title: "Universities",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    description:
      "Scale your educational processes and enhance research capabilities with our comprehensive platform.",
    challenges: [
      "Coordinating large-scale online and hybrid learning",
      "Managing research projects and publications",
      "Facilitating interdepartmental collaboration",
    ],
    scenario:
      "State University adopted EduManage to transition to a hybrid learning model. The platform's robust video conferencing and content management features allowed for seamless online lectures and discussions. Research teams utilized collaborative tools to manage projects, resulting in a 25% increase in interdepartmental research initiatives.",
    stats: { users: "10,000+", satisfaction: "92%", timesSaved: "40%" },
  },
  {
    id: "training-centers",
    title: "Online Training Centers",
    icon: Briefcase,
    color: "from-orange-500 to-red-500",
    description:
      "Deliver engaging online courses and certifications with our flexible and scalable LMS.",
    challenges: [
      "Creating and managing diverse course offerings",
      "Tracking learner progress and engagement",
      "Providing interactive and self-paced learning experiences",
    ],
    scenario:
      "TechSkills Academy used EduManage to launch a series of self-paced coding bootcamps. The platform's analytics tools helped identify areas where students struggled, allowing instructors to provide targeted support. As a result, course completion rates increased by 30%, and student satisfaction scores improved significantly.",
    stats: { users: "5,000+", satisfaction: "98%", timesSaved: "50%" },
  },
];

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("schools");

  return (
    <div className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.02]" />
        <div
          className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform rotate-45 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute -bottom-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-primary/5 to-transparent rounded-full transform rotate-45 animate-pulse"
          style={{ animationDuration: "15s" }}
        />
      </div>

      <div className="container relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <motion.section
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4"
          >
            <Badge
              variant="secondary"
              className="px-3 py-1 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Tailored Solutions
            </Badge>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Learnest Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how EduManage adapts to the unique needs of various
            educational organizations.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16"
        >
          <Tabs
            defaultValue="schools"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="text-lg"
                >
                  <solution.icon className="mr-2 h-5 w-5" />
                  {solution.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r ${solution.color}`}
                      />
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center">
                          <solution.icon className="mr-2 h-6 w-6 text-primary" />
                          {solution.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6">
                          {solution.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              Key Challenges Addressed:
                            </h3>
                            <ul className="space-y-2">
                              {solution.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">
                                    {challenge}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              Real-World Impact:
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {solution.scenario}
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-6">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                  {solution.stats.users}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Active Users
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                  {solution.stats.satisfaction}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Satisfaction Rate
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                  {solution.stats.timesSaved}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Time Saved
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-8">
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Explore {solution.title} Solution
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">
            Key Benefits Across All Organizations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Enhanced Collaboration",
                description:
                  "Foster seamless communication between educators, students, and administrators.",
              },
              {
                icon: BookOpen,
                title: "Flexible Learning",
                description:
                  "Support various learning models: in-person, online, and hybrid.",
              },
              {
                icon: BarChart,
                title: "Data-Driven Insights",
                description:
                  "Make informed decisions with comprehensive analytics and reporting tools.",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
                      <benefit.icon className="mr-2 h-5 w-5" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold mb-4 text-foreground">
            Ready to Transform Your Educational Organization?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Discover how EduManage can be tailored to your specific needs.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
