"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Users,
  Lightbulb,
  Search,
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

const ITEMS_PER_PAGE = 10;

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
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Learnest Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Empower your educational journey with our comprehensive collection
            of resources, designed to support educators and administrators in
            delivering exceptional learning experiences.
          </p>
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); 
                }}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </motion.section>

        <Tabs
          defaultValue="all"
          className="mb-12"
          onValueChange={(value) => {
            setActiveTab(value);
            setCurrentPage(1); 
          }}
        >
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="blog">Blog Articles</TabsTrigger>
            <TabsTrigger value="guide">Guides</TabsTrigger>
            <TabsTrigger value="whitepaper">Whitepapers</TabsTrigger>
            <TabsTrigger value="webinar">Webinars</TabsTrigger>
            <TabsTrigger value="case_study">Case Studies</TabsTrigger>
          </TabsList>
        </Tabs>

        <motion.section initial="hidden" animate="visible" variants={stagger}>
          {displayedResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedResources.map((resource, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <resource.icon className="mr-2 h-5 w-5" />
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">{resource.category}</Badge>
                        <Button variant="ghost" size="sm">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No resources found. Please try a different search term.
            </p>
          )}
        </motion.section>

        {filteredResources.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">
            Unlock the Full Potential of EduManage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Our resources are designed to help you make the most of our
            platform. Whether you're an educator looking to enhance your
            teaching methods or an administrator aiming to streamline
            operations, we have the insights you need.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Subscribe to Our Newsletter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
