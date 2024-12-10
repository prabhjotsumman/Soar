import Icon from "../../Icon/Icon";

interface SidebarMenuItemProps {
  menuIcon: string;
  label: string;
  className?: string;
}

const SidebarMenuItem = ({
  menuIcon,
  label,
  className,
  ...props
}: SidebarMenuItemProps) => {
  return (
    <div className="group">
      <div
        className={`group sidebar-menu-item flex items-center fill-light-gray group-hover:fill-black group-hover:text-black text-gray-light ${
          label !== "Dashboard" ? "mt-8" : ""
        } ${className}`}
        {...props}
      >
        <Icon icon={menuIcon} altName="card" className=" fill-green" />

        <p className=" pl-6 font-sans font-medium text-lg leading-5">{label}</p>
      </div>
    </div>
  );
};

export default SidebarMenuItem;
