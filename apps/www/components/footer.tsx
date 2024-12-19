"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Send,
  GraduationCap,
  BookOpen,
  Users,
  School,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Learnest
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Join our beta program and help shape the future of online
              education. Early access to revolutionary teaching and learning
              features.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-4 w-4" />
              For Students
            </h3>
            <ul className="space-y-2">
              {[
                "Interactive Courses",
                "Study Materials",
                "Progress Tracking",
                "Student Community",
                "Help Center",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Teachers */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <School className="h-4 w-4" />
              For Teachers
            </h3>
            <ul className="space-y-2">
              {[
                "Course Creation",
                "Student Analytics",
                "Teaching Tools",
                "Resource Library",
                "Teacher Community",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Beta Program */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Join Beta Program
            </h3>
            <p className="text-sm text-muted-foreground">
              Get early access to new features and help shape the future of
              education.
            </p>
            <form
              className="flex space-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[240px]"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe to beta program</span>
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Learnest. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Beta Version</span>
            <Badge variant="secondary" className="text-xs">
              0.1.0
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
