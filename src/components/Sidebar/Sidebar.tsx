import { Link } from "react-router";

import SidebarMenuItem from "./SidebarMenuItem/SidebarMenuItem";

import { ICONS } from "../../assets/icons/icons";
import "./Sidebar.css";

const Sidebar = ({ ...props }) => {
  return (
    <div
      className="bg-white  z-10 hidden xs:hidden sm:hidden md:hidden lg:block min-w-[15.62rem] h-auto"
      {...props}
    >
      <div className="pl-11">
        <Link to="/dashboard/overview">
          <SidebarMenuItem menuIcon={ICONS.HOME} label="Dashboard" selected />
        </Link>
        <SidebarMenuItem menuIcon={ICONS.TRANSFER} label="Transactions" />
        <SidebarMenuItem menuIcon={ICONS.ACCOUNTS} label="Accounts" />
        <SidebarMenuItem menuIcon={ICONS.INVESTMENT} label="Investments" />
        <SidebarMenuItem menuIcon={ICONS.CREDIT_CARD} label="Credit Cards" />
        <SidebarMenuItem menuIcon={ICONS.LOAN} label="Loans" />
        <SidebarMenuItem menuIcon={ICONS.SERVICES} label="Services" />
        <SidebarMenuItem menuIcon={ICONS.PRIVILEGES} label="My Privileges" />
        <Link to="/dashboard/settings">
          <SidebarMenuItem menuIcon={ICONS.SETTINGS} label="Setting" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
