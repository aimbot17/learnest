import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container px-0 md:px-8 w-full lg:max-w-6xl xl:max-w-7xl lg:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
