import React from "react";

interface ButtonProps {
  content: string; // Changed to lowercase 'string' for consistency
  type?: "button" | "submit" | "reset"; // Made it more specific for button types
}

const Button: React.FC<ButtonProps> = ({ content, type = "button" }) => {
  return (
    <button
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-700"
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
