import React, { useState } from "react";

// Types for props
interface SidebarItemProps {
  name: string;
  icon: string;
}

interface DropdownItem {
  name: string;
  icon?: string;
}

const Sidebar: React.FC = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  // Sidebar items configuration
  const sidebarItems: SidebarItemProps[] = [
    { name: "Courses", icon: "book-open" },
    { name: "Batches", icon: "users" },
    { name: "Jobs", icon: "briefcase" },
    { name: "Statistics", icon: "trending-up" },
  ];

  const moreItems: SidebarItemProps[] = [
    { name: "Frappe Cloud", icon: "cloud-lightning" },
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

  return (
    <div className="flex h-screen flex-col justify-between bg-gray-50 w-56">
      <div className="flex flex-col overflow-hidden h-full">
        {/* Header */}
        <DropdownHeader
          title="Utsav Joshi"
          logoUrl="https://avatars.githubusercontent.com/u/98454866?s=400&u=cf6b7cebb0f7ac602a9bc5b40ab2e4bae5dce048&v=4"
          isOpen={isProfileDropdownOpen}
          onToggle={() => setIsProfileDropdownOpen((prev) => !prev)}
          items={dropdownItems}
        />

        {/* Sidebar Items */}
        <SidebarSection items={sidebarItems} />

        {/* More Section */}
        <SidebarSection
          title="More"
          items={moreItems}
          isOpen={isMoreDropdownOpen}
          onToggle={() => setIsMoreDropdownOpen((prev) => !prev)}
        />
      </div>
    </div>
  );
};

// Dropdown Header Component
const DropdownHeader: React.FC<{
  title: string;
  logoUrl: string;
  isOpen: boolean;
  onToggle: () => void;
  items: DropdownItem[];
}> = ({ title, logoUrl, isOpen, onToggle, items }) => (
  <div className="relative text-left p-2">
    <button
      className="flex h-12 items-center rounded-md hover:bg-gray-200 px-2 w-52"
      onClick={onToggle}
    >
      <img src={logoUrl} alt={`${title} Logo`} className="w-8 h-8 rounded" />
      <div className="ml-2 flex-1">
        <div className="text-base font-medium text-gray-900">{title}</div>
      </div>
      <svg
        className={`h-4 w-4 text-gray-700 transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
    <div
      className={`transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      <div className="mt-2">
        {items.map((item, index) => (
          <SidebarItem key={index} name={item.name} icon={item.icon || ""} />
        ))}
      </div>
    </div>
  </div>
);

// Sidebar Section Component
const SidebarSection: React.FC<{
  title?: string;
  items: SidebarItemProps[];
  isOpen?: boolean;
  onToggle?: () => void;
}> = ({ title, items, isOpen = true, onToggle }) => (
  <div className="flex flex-col">
    {title && onToggle && (
      <button
        className="flex items-center justify-between px-4 py-2 text-sm text-gray-600"
        onClick={onToggle}
      >
        {title}
        <svg
          className={`h-4 w-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    )}
    <div
      className={`transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      {items.map((item, index) => (
        <SidebarItem key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  </div>
);

// Sidebar Item Component
const SidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => (
  <button className="flex w-full items-center rounded text-gray-800 hover:bg-gray-100 px-2 py-1 mx-2 my-2">
    <span className="grid h-5 w-6 place-items-center">
      <Icon name={icon} />
    </span>
    <span className="ml-2 text-sm">{name}</span>
  </button>
);

// Icon Component
const Icon: React.FC<{ name: string }> = ({ name }) => {
  const icons: Record<string, JSX.Element> = {
    "book-open": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-book-open-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    users: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-users-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    briefcase: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-briefcase-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>
    ),
    "trending-up": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-trending-up-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    "cloud-lightning": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-cloud-lightning-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path>
        <path d="m13 12-3 5h4l-3 5"></path>
      </svg>
    ),
    "file-text": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-file-text-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    ),
    "circle-check-big": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-circle-check-big-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <path d="m9 11 3 3L22 4"></path>
      </svg>
    ),
    cookie: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-cookie-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
        <path d="M8.5 8.5v.01"></path>
        <path d="M16 15.5v.01"></path>
        <path d="M12 12v.01"></path>
        <path d="M11 17v.01"></path>
        <path d="M7 14v.01"></path>
      </svg>
    ),
    "lock-keyhole": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-lock-keyhole-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <circle cx="12" cy="16" r="1"></circle>
        <rect x="3" y="10" width="18" height="12" rx="2"></rect>
        <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
      </svg>
    ),
    settings: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-settings-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M12 8v8m4-4H8"></path>
        <path d="M21 12c0-1.5-.5-3-1.5-4.5M3 12c0 1.5.5 3 1.5 4.5M12 3c1.5 0 3 1 4.5 2.5M12 21c-1.5 0-3-1-4.5-2.5"></path>
      </svg>
    ),
    user: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M16 20v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <path d="M8 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0"></path>
      </svg>
    ),
    logout: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-logout-icon h-4 w-4 stroke-1.5 text-gray-800"
      >
        <path d="M15 3h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4"></path>
        <path d="M12 12h8"></path>
        <path d="M9 12h-8"></path>
        <path d="M6 12l4-4-4-4"></path>
      </svg>
    ),
  };
  return icons[name] || null;
};

export default Sidebar;
