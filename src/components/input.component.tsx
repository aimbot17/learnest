import React from "react";
import { Eye, EyeSlash } from "phosphor-react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  required?: boolean;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onTogglePasswordVisibility?: () => void;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePasswordVisibility,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={onChange}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
      {showPasswordToggle && onTogglePasswordVisibility && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={onTogglePasswordVisibility}
        >
          {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default Input;
