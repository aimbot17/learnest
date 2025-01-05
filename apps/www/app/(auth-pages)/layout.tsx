import React from "react";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
