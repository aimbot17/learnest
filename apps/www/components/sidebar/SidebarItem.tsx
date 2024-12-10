import Icon from "@/components/icons";
import { SidebarItemProps } from "@/types/sidebar/sidebar";

const SidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => (
  <button className="flex w-full items-center rounded text-gray-800 hover:bg-gray-100 px-2 py-1 mx-2 my-2">
    <span className="grid h-5 w-6 place-items-center">
      <Icon name={icon} />
    </span>
    <span className="ml-2 text-sm">{name}</span>
  </button>
);

export default SidebarItem;
