import React from "react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
