import Icon from "@/components/icons";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { DropdownItem } from "@/types/DropdownItems";

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
      aria-expanded={isOpen}
    >
      <img src={logoUrl} alt={`${title} Logo`} className="w-8 h-8 rounded" />
      <div className="ml-2 flex-1">
        <div className="text-base font-medium text-gray-900">{title}</div>
      </div>
      <Icon
        name="down-arrow"
        className="h-5 w-5 text-gray-700 transform transition-transform"
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      />
    </button>
    <div
      className={`transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-40" : "max-h-0"
      }`}
    >
      <div className="mt-2">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            name={item.name}
            icon={item.icon || "user"}
          />
        ))}
      </div>
    </div>
  </div>
);

export default DropdownHeader;
