import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex flex-1 justify-center items-center p-6">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
          {children}
        </div>
      </main>

      <Toaster />
    </div>
  );
}
