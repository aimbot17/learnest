"use client";

import React, { useState } from "react";
import DropdownHeader from "@/components/sidebar/DropdownHeader";
import SidebarSection from "@/components/sidebar/SidebarSection";
import {
  SidebarItemProps,
  DropdownItem,
  SidebarProps,
  SidebarState,
} from "@/types/sidebar/sidebar";

const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const [sidebarState, setSidebarState] = useState<SidebarState>({
    isProfileDropdownOpen: false,
    isMoreDropdownOpen: false,
  });

  const toggleProfileDropdown = () => {
    setSidebarState((prev) => ({
      ...prev,
      isProfileDropdownOpen: !prev.isProfileDropdownOpen,
    }));
  };

  const toggleMoreDropdown = () => {
    setSidebarState((prev) => ({
      ...prev,
      isMoreDropdownOpen: !prev.isMoreDropdownOpen,
    }));
  };

  const sidebarItems: SidebarItemProps[] = [
    { name: "Courses", icon: "book-open" },
    { name: "Batches", icon: "users" },
    { name: "Jobs", icon: "briefcase" },
    { name: "Statistics", icon: "trending-up" },
  ];

  const moreItems: SidebarItemProps[] = [
    { name: "Code Cloud", icon: "cloud-lightning" },
    { name: "Terms of Certification", icon: "file-text" },
    { name: "Terms of Use", icon: "circle-check-big" },
    { name: "Cookie Policy", icon: "cookie" },
    { name: "Privacy Policy", icon: "lock-keyhole" },
  ];

  const dropdownItems: DropdownItem[] = [
    { name: "Profile", icon: "user" },
    { name: "Settings", icon: "settings" },
    { name: "Logout", icon: "logout" },
  ];

  if (!user) {
    return null;
  }

  return (
    <div className="flex h-screen flex-col justify-between bg-gray-50 container mx-auto px-4 py-3 animate-slideInLeft">
      <div className="flex flex-col">
        <DropdownHeader
          title={"Utsav Joshi"}
          logoUrl={"https://via.placeholder.com/150"}
          isOpen={sidebarState.isProfileDropdownOpen}
          onToggle={toggleProfileDropdown}
          items={dropdownItems}
        />
        <SidebarSection items={sidebarItems} />
        <SidebarSection
          title="More"
          items={moreItems}
          isOpen={sidebarState.isMoreDropdownOpen}
          onToggle={toggleMoreDropdown}
        />
      </div>
    </div>
  );
};

export default Sidebar;
