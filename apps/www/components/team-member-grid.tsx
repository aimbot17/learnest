import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Utsav joshi",
    role: "CEO & Co-founder",
    avatar: "/avatars/amanda-foster.jpg",
    bio: "Former educator with 15 years of experience, passionate about leveraging technology to improve education.",
  },
  {
    name: "Love sutariya",
    role: "CTO & Co-founder",
    avatar: "/avatars/david-chen.jpg",
    bio: "Software engineer with a background in AI and machine learning, dedicated to creating innovative EdTech solutions.",
  },
  {
    name: "Rajat asthana",
    role: "Head of Product",
    avatar: "/avatars/maria-rodriguez.jpg",
    bio: "Ex-teacher turned UX designer, focused on creating intuitive and user-friendly educational platforms.",
  },
  {
    name: "Shrey hardasani",
    role: "Head of Customer Success",
    avatar: "/avatars/james-thompson.jpg",
    bio: "Former school administrator with a knack for understanding and addressing the needs of educational institutions.",
  },
];

export default function TeamMemberGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <Card
          key={index}
          className="hover:shadow-lg transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
