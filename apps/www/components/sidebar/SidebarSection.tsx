import Icon from "@/components/icons";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { SidebarItemProps } from "@/types/sidebar/sidebar";

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
        aria-expanded={isOpen}
      >
        {title}
        <Icon
          name="down-arrow"
          className="h-5 w-5 transform transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
    )}
    <div
      className={`transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-50" : "max-h-0"
      }`}
    >
      {items.map((item, index) => (
        <SidebarItem key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  </div>
);

export default SidebarSection;
