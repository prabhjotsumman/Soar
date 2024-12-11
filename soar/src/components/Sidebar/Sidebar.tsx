import SidebarMenuItem from "./SidebarMenuItem/SidebarMenuItem";

import { ICONS } from "../../assets/icons/icons";
import "./Sidebar.css";

const Sidebar = ({...props}) => {
  return (
    <div className="hidden xs:hidden sm:hidden md:block sidebar w-[15.62rem] h-screen" {...props}>
      <div className="pl-11">
        <SidebarMenuItem menuIcon={ICONS.HOME} label="Dashboard" selected/>
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
