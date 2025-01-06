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
    <footer className="w-full bg-muted/50 border-t">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section - Full width on mobile, then responsive */}
          <div className="space-y-4 sm:pr-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              aria-label="Learnest Home"
            >
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Learnest
              </span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xs">
              Join our beta program and help shape the future of online
              education. Early access to revolutionary teaching and learning
              features.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Twitter, label: "Twitter", href: "#twitter" },
                { icon: Github, label: "GitHub", href: "#github" },
                { icon: Linkedin, label: "LinkedIn", href: "#linkedin" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 -m-2"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections - Responsive grid */}
          {[
            {
              title: "For Students",
              icon: Users,
              items: [
                "Interactive Courses",
                "Study Materials",
                "Progress Tracking",
                "Student Community",
                "Help Center",
              ],
            },
            {
              title: "For Teachers",
              icon: School,
              items: [
                "Course Creation",
                "Student Analytics",
                "Teaching Tools",
                "Resource Library",
                "Teacher Community",
              ],
            },
          ].map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2 text-base sm:text-lg">
                <section.icon className="h-4 w-4" />
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Beta Program Section - Full width on mobile */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2 text-base sm:text-lg">
              <BookOpen className="h-4 w-4" />
              Join Beta Program
            </h3>
            <p className="text-sm text-muted-foreground">
              Get early access to new features and help shape the future of
              education.
            </p>
            <form
              className="flex gap-2 max-w-[300px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-sm h-9 sm:h-10"
                aria-label="Email for beta program"
              />
              <Button
                type="submit"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10"
                aria-label="Subscribe to beta program"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-6 sm:my-8" />

        {/* Footer Bottom - Stack on mobile, row on larger screens */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Learnest. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center sm:justify-start">
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end gap-2">
            <span className="text-xs sm:text-sm text-muted-foreground">
              Beta Version
            </span>
            <Badge
              variant="secondary"
              className="text-[10px] sm:text-xs px-1.5 py-0.5"
            >
              0.3.0
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
