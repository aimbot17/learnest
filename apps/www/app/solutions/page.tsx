"use client";

import { useState } from "react";
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
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Requested",
      description: "We'll be in touch shortly to schedule your demo.",
    });
  };

  return (
    <div className="relative min-h-[100svh] flex flex-col text-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
      {/* Enhanced Background patterns */}
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

      <div className="container relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <section className="mb-24 text-center animate-fadeIn">
          <div className="mb-6 animate-slideDown">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/80"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Tailored Solutions
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 animate-slideUp">
            Learnest Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
            Discover how EduManage adapts to the unique needs of various
            educational organizations.
          </p>
        </section>

        <section className="mb-24 animate-fadeIn">
          <Tabs
            defaultValue="schools"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 bg-background/50 backdrop-blur-sm">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <solution.icon className="mr-2 h-5 w-5" />
                  {solution.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <div className="animate-fadeIn">
                  <Card className="overflow-hidden border-primary/10 hover:border-primary/20 transition-colors duration-300">
                    <div className={`h-2 bg-gradient-to-r ${solution.color}`} />
                    <CardHeader className="p-8">
                      <CardTitle className="text-3xl flex items-center space-x-3">
                        <solution.icon className="h-8 w-8 text-primary" />
                        <span>{solution.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <h3 className="text-2xl font-semibold mb-6">
                            Key Challenges Addressed:
                          </h3>
                          <ul className="space-y-4">
                            {solution.challenges.map((challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start group"
                              >
                                <CheckCircle className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-muted-foreground text-lg leading-relaxed">
                                  {challenge}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-2xl font-semibold mb-6">
                            Real-World Impact:
                          </h3>
                          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {solution.scenario}
                          </p>
                          <div className="grid grid-cols-3 gap-6 mt-8">
                            {Object.entries(solution.stats).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                                >
                                  <div className="text-3xl font-bold text-primary mb-2">
                                    {value}
                                  </div>
                                  <div className="text-sm text-muted-foreground capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-12 text-center">
                        <Button
                          size="lg"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={handleDemoRequest}
                        >
                          Explore {solution.title} Solution
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="mb-24 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-16 text-center text-foreground">
            Key Benefits Across All Organizations
          </h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
              <div
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group border-primary/10 hover:border-primary/20">
                  <CardHeader className="p-6">
                    <CardTitle className="flex items-center text-xl text-primary group-hover:scale-105 transition-transform duration-300">
                      <benefit.icon className="mr-3 h-6 w-6" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center relative py-16 animate-fadeIn">
          <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
            <div className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-primary/50 opacity-20" />
          </div>
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Ready to Transform Your Educational Organization?
          </h2>
          <p className="text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how EduManage can be tailored to your specific needs.
          </p>
          <div className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleDemoRequest}
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
