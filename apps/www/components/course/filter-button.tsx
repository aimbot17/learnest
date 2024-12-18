"use client";

import { Button } from "@/components/ui/button";
import { CourseStatus } from "@/types/course/course";

interface FilterButtonsProps {
  filters: Array<{
    label: string;
    value: CourseStatus;
    count: number;
  }>;
  activeFilter: CourseStatus;
  onFilterChange: (filter: CourseStatus) => void;
}

export function FilterButtons({
  filters,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "secondary"}
          className="transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
          <span
            className={`ml-2 ${
              activeFilter === filter.value
                ? "bg-white text-primary"
                : "bg-primary text-primary-foreground"
            } rounded-full px-2 py-1 text-xs`}
          >
            {filter.count}
          </span>
        </Button>
      ))}
    </div>
  );
}
