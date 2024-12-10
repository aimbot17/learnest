export interface SidebarItemProps {
  name: string;
  icon: IconName;
}

interface SidebarProps {
  user: { email: string } | null;
}

interface SidebarItemProps {
  name: string;
  icon: IconName;
}

interface DropdownItem {
  name: string;
  icon?: IconName;
}

interface SidebarState {
  isProfileDropdownOpen: boolean;
  isMoreDropdownOpen: boolean;
}
