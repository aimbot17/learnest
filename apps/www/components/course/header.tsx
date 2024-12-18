"use client";

import { Input } from "@/components/ui/input";

interface HeaderProps {
  title: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ title, searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Input
          type="search"
          placeholder="Search courses"
          className="w-full md:w-64"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </header>
  );
}
