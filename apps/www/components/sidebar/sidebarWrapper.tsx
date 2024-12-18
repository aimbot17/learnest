"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import {
  SidebarItemProps,
  DropdownItem,
  SidebarProps,
  SidebarState,
} from "@/types/sidebar/sidebar";

const ANIMATION_DURATION = 0.2;

const sidebarItems: SidebarItemProps[] = [
  { name: "Courses", icon: "BookOpen" },
  { name: "Batches", icon: "Users" },
  { name: "Jobs", icon: "Briefcase" },
  { name: "Statistics", icon: "TrendingUp" },
];

const moreItems: SidebarItemProps[] = [
  { name: "Code Cloud", icon: "Cloud" },
  { name: "Terms of Certification", icon: "FileText" },
  { name: "Terms of Use", icon: "Shield" },
  { name: "Cookie Policy", icon: "Cookie" },
  { name: "Privacy Policy", icon: "Lock" },
];

const dropdownItems: DropdownItem[] = [
  { name: "Profile", icon: "User" },
  { name: "Settings", icon: "Settings" },
  { name: "Logout", icon: "LogOut" },
];

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const [sidebarState, setSidebarState] = useState<SidebarState>({
    isProfileDropdownOpen: false,
    isMoreDropdownOpen: false,
  });

  const toggleDropdown = (key: keyof SidebarState) => {
    setSidebarState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!user) return null;

  return (
    <div className="flex h-screen flex-col justify-between bg-gradient-to-b from-blue-50/80 to-white dark:from-gray-900 dark:to-gray-800 border-r border-blue-100 dark:border-gray-700 shadow-sm">
      <div className="flex flex-col">
        {/* Profile Section */}
        <div className="p-4 border-b border-blue-100 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <button
            onClick={() => toggleDropdown("isProfileDropdownOpen")}
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-200 dark:border-blue-500">
              <img
                src={
                  user.logoUrl ||
                  "https://randomuser.me/api/portraits/men/32.jpg"
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-gray-900 dark:text-white">
                {user.title}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Student
              </p>
            </div>
            <Icons.ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                sidebarState.isProfileDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {sidebarState.isProfileDropdownOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: ANIMATION_DURATION }}
                className="mt-2 py-2 px-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                {dropdownItems.map((item) => {
                  const Icon = Icons[
                    item.icon as keyof typeof Icons
                  ] as React.ElementType;
                  return (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 text-blue-500" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = Icons[
              item.icon as keyof typeof Icons
            ] as React.ElementType;
            return (
              <button
                key={item.name}
                className="w-full flex items-center gap-3 p-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:translate-x-1"
              >
                <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}

          {/* More Section */}
          <div className="pt-4 border-t border-blue-100 dark:border-gray-700">
            <button
              onClick={() => toggleDropdown("isMoreDropdownOpen")}
              className="w-full flex items-center justify-between p-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <span className="font-medium">More</span>
              <Icons.ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  sidebarState.isMoreDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {sidebarState.isMoreDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: ANIMATION_DURATION }}
                  className="mt-2 space-y-1"
                >
                  {moreItems.map((item) => {
                    const Icon = Icons[
                      item.icon as keyof typeof Icons
                    ] as React.ElementType;
                    return (
                      <button
                        key={item.name}
                        className="w-full flex items-center gap-3 p-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 hover:translate-x-1"
                      >
                        <Icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 text-center border-t border-blue-100 dark:border-gray-700 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Learnest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
