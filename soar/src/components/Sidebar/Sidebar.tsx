import SidebarMenuItem from "./SidebarMenuItem/SidebarMenuItem";

import { ICONS } from "../../assets/icons/icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar w-[15.62rem] h-screen border-2 border-red-700">
      <div className="pl-11">
        <SidebarMenuItem menuIcon={ICONS.HOME} label="Dashboard" />
        <SidebarMenuItem menuIcon={ICONS.TRANSFER} label="Transactions" />
        <SidebarMenuItem menuIcon={ICONS.ACCOUNTS} label="Accounts" />
        <SidebarMenuItem menuIcon={ICONS.INVESTMENT} label="Investments" />
        <SidebarMenuItem menuIcon={ICONS.CREDIT_CARD} label="Credit Cards" />
        <SidebarMenuItem menuIcon={ICONS.LOAN} label="Loans" />
        <SidebarMenuItem menuIcon={ICONS.SERVICES} label="Services" />
        <SidebarMenuItem menuIcon={ICONS.PRIVILEGES} label="My Privileges" />
        <SidebarMenuItem menuIcon={ICONS.SETTINGS} label="Setting" />
      </div>
    </div>
  );
};

export default Sidebar;
