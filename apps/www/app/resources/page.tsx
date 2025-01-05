"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Users,
  Lightbulb,
  Search,
  Library,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const resources = [
  {
    type: "blog",
    title: "10 Strategies for Effective Remote Learning",
    description:
      "Discover proven techniques to enhance online education and keep students engaged.",
    icon: Lightbulb,
    category: "Remote Learning",
  },
  {
    type: "blog",
    title: "Data-Driven Decision Making in Education",
    description:
      "Learn how to leverage educational data to improve student outcomes and institutional performance.",
    icon: FileText,
    category: "Data Management",
  },
  {
    type: "guide",
    title: "The Ultimate Guide to Student Engagement",
    description:
      "Comprehensive strategies to boost student participation and motivation in any learning environment.",
    icon: Users,
    category: "Student Engagement",
  },
  {
    type: "guide",
    title: "Mastering EduManage: Admin Edition",
    description:
      "A step-by-step guide for administrators to maximize the potential of the EduManage platform.",
    icon: BookOpen,
    category: "Platform Tutorial",
  },
  {
    type: "whitepaper",
    title: "The Future of Educational Technology",
    description:
      "An in-depth look at emerging trends and technologies shaping the future of education.",
    icon: Lightbulb,
    category: "EdTech Trends",
  },
  {
    type: "whitepaper",
    title: "Optimizing Learning Management Systems for Higher Education",
    description:
      "Best practices for implementing and managing LMS in university settings.",
    icon: FileText,
    category: "Higher Education",
  },
  {
    type: "webinar",
    title: "Innovative Assessment Techniques in Online Learning",
    description:
      "Join expert educators as they discuss cutting-edge methods for evaluating student progress in digital environments.",
    icon: Video,
    category: "Assessment",
  },
  {
    type: "webinar",
    title: "Cybersecurity in Education: Protecting Student Data",
    description:
      "Learn essential strategies to safeguard sensitive information in educational institutions.",
    icon: Video,
    category: "Data Security",
  },
  {
    type: "case_study",
    title: "How Riverdale High Increased Graduation Rates by 15%",
    description:
      "Discover the strategies and tools that led to significant improvements in student success.",
    icon: FileText,
    category: "Student Success",
  },
  {
    type: "case_study",
    title: "Streamlining Administration at Greendale Community College",
    description:
      "See how EduManage helped reduce administrative workload and improve efficiency.",
    icon: FileText,
    category: "Administrative Efficiency",
  },
  {
    type: "tutorial",
    title: "Setting Up Your First Online Course",
    description:
      "A comprehensive walkthrough of creating and managing courses on the EduManage platform.",
    icon: Video,
    category: "Platform Tutorial",
  },
  {
    type: "tutorial",
    title: "Advanced Analytics with EduManage",
    description:
      "Learn how to leverage our powerful analytics tools to gain insights and improve outcomes.",
    icon: Video,
    category: "Data Analysis",
  },
];

const ITEMS_PER_PAGE = 9; // Changed to 9 for better grid layout

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredResources = resources.filter(
    (resource) =>
      (activeTab === "all" || resource.type === activeTab) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);

  const displayedResources = filteredResources.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
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
              <Library className="mr-2 h-4 w-4" />
              Knowledge Hub
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Learnest Resources
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Empower your educational journey with our comprehensive collection
            of resources, designed to support educators and administrators.
          </motion.p>
          <motion.div variants={fadeIn} className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl">
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-12 pr-4 py-6 w-full text-lg rounded-xl border-primary/20 bg-background/80 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <Tabs
            defaultValue="all"
            onValueChange={(value) => {
              setActiveTab(value);
              setCurrentPage(1);
            }}
          >
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 p-1 bg-background/50 backdrop-blur-sm">
              {[
                "all",
                "blog",
                "guide",
                "whitepaper",
                "webinar",
                "case_study",
              ].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="text-base capitalize data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  {tab.replace("_", " ")}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-16"
        >
          <AnimatePresence mode="wait">
            {displayedResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {displayedResources.map((resource, index) => (
                  <motion.div key={index} variants={fadeIn} layout>
                    <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group border-primary/10 hover:border-primary/20">
                      <CardHeader className="p-6">
                        <CardTitle className="flex items-center text-xl text-primary group-hover:scale-105 transition-transform duration-300">
                          <resource.icon className="mr-3 h-6 w-6" />
                          {resource.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {resource.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <Badge
                            variant="secondary"
                            className="py-1.5 px-3 text-sm capitalize"
                          >
                            {resource.category}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group-hover:text-primary transition-colors duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div variants={fadeIn} className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  No resources found. Please try a different search term.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {filteredResources.length > ITEMS_PER_PAGE && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex justify-center items-center mb-24 gap-6"
          >
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="border-primary/20 hover:bg-primary/5 text-lg px-6 py-5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Previous
            </Button>
            <span className="text-lg text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="border-primary/20 hover:bg-primary/5 text-lg px-6 py-5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Next
            </Button>
          </motion.div>
        )}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center relative py-16"
        >
          <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary/50 opacity-20" />
          </div>
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold mb-6 text-foreground"
          >
            Unlock the Full Potential of EduManage
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Our resources are designed to help you make the most of our
            platform. Whether you're an educator looking to enhance your
            teaching methods or an administrator aiming to streamline
            operations, we have the insights you need.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Subscribe to Our Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
