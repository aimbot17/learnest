import React from "react";
import { Button } from "@/components/ui/button";

interface FilterButtonsProps {
  filters: { label: string; count: number }[];
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filters }) => (
  <div className="flex flex-wrap gap-4 mb-8">
    {filters.map((filter, index) => (
      <Button
        key={filter.label}
        variant={index === 0 ? "default" : "secondary"}
        className="transition-all duration-300 ease-in-out hover:scale-105"
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

export default FilterButtons;
