import { type LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  name: string;
  icon: string;
  path?: string;
  badge?: number;
}

export interface DropdownItem {
  name: string;
  icon: string;
  onClick?: () => void;
}

export interface SidebarProps {
  user: {
    email: string;
    title?: string;
    logoUrl?: string;
    role?: string;
  } | null;
}

export interface SidebarState {
  isProfileDropdownOpen: boolean;
  isMoreDropdownOpen: boolean;
}
