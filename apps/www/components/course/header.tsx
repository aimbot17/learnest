import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface HeaderProps {
  title: string;
}

const FilterButtons: React.FC<{
  filters: { label: string; count: number }[];
}> = ({ filters }) => (
  <div className="flex flex-wrap gap-4 mb-8">
    {filters.map((filter, index) => (
      <Button
        key={filter.label}
        variant={index === 0 ? "default" : "secondary"}
      >
        {filter.label}{" "}
        <span
          className={`ml-2 ${index === 0 ? "bg-white text-black" : "bg-black text-white"} rounded-full px-2 py-1 text-xs`}
        >
          {filter.count}
        </span>
      </Button>
    ))}
  </div>
);


const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
    <h1 className="text-3xl font-bold">{title}</h1>
    <div className="flex items-center gap-4 w-full md:w-auto">
      <Input
        type="search"
        placeholder="Search courses"
        className="w-full md:w-64"
      />
    </div>
  </header>
);

export default Header;
