/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#111827", // Main color
          50: "#F3F4F6", // Lightest shade
          100: "#E5E7EB", // Very light shade
          200: "#D1D5DB", // Light shade
          300: "#9CA3AF", // Lighter shade
          400: "#6B7280", // Medium-light shade
          500: "#4B5563", // Medium shade
          600: "#374151", // Slightly darker than default
          700: "#1F2937", // Darker shade
          800: "#111827", // Default shade (base)
          900: "#0F172A", // Very dark shade
          950: "#0B1120", // Darkest shade
        },
      },
    },
  },
  plugins: [],
};
