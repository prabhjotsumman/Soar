import { Link } from "react-router";
import { Sidebar, Menu } from "react-pro-sidebar";

import HamburgerMenuItem from "./HamburgerMenuItem/HamburgerMenuItem";

import { ICONS } from "../../assets/icons/icons";
import "./Hamburger.css";

interface HamburgerProps {
  collapsed?: boolean;
  toggled?: boolean;
}

const Hamburger = ({
  collapsed = false,
  toggled,
  ...props
}: HamburgerProps) => {
  if (collapsed) return <></>;
  return (
    <div className="bg-white  lg:hidden xl:hidden h-auto mt-4 ml-4 mr-0" {...props}>
      <div className="bg-white">
        <Sidebar className="bg-white" collapsed={collapsed} toggled={toggled}>
          <Menu className="bg-white">
            <Link to="/dashboard/overview">
              <HamburgerMenuItem
                menuIcon={ICONS.HOME}
                label="Dashboard"
                selected
              />
            </Link>
            <HamburgerMenuItem menuIcon={ICONS.TRANSFER} label="Transactions" />
            <HamburgerMenuItem menuIcon={ICONS.ACCOUNTS} label="Accounts" />
            <HamburgerMenuItem
              menuIcon={ICONS.INVESTMENT}
              label="Investments"
            />
            <HamburgerMenuItem
              menuIcon={ICONS.CREDIT_CARD}
              label="Credit Cards"
            />
            <HamburgerMenuItem menuIcon={ICONS.LOAN} label="Loans" />
            <HamburgerMenuItem menuIcon={ICONS.SERVICES} label="Services" />
            <HamburgerMenuItem
              menuIcon={ICONS.PRIVILEGES}
              label="My Privileges"
            />
            <Link to="/dashboard/settings">
              <HamburgerMenuItem menuIcon={ICONS.SETTINGS} label="Setting" />
            </Link>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default Hamburger;
