import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import { useLocation } from "react-router";
import Overview from "./Overview";
import Settings from "./Settings";
import Hamburger from "../components/HamburgerMenu/Hamburger";
import { useEffect, useState } from "react";

function Dashboard() {
  const location = useLocation();
  const pathname = location.pathname;
  const [open, setOpen] = useState(false);

  let dashboardDisplay = <Overview />;

  if (pathname === "/dashboard/settings") {
    dashboardDisplay = <Settings />;
  }

  useEffect(() => {
    const handleSidebar = () => {
      setOpen(!open);
    };
    window.addEventListener("HamburgerMenuClicked", () => handleSidebar());
    return () =>
      window.removeEventListener("HamburgerMenuClicked", () => handleSidebar());
  });
  return (
    <>
      <div className="w-full bg-white xs:bg-roar-cream sm:bg-roar-cream">
        <Header />
        <div className="flex flex-row w-full">
          <Sidebar />
          <Hamburger collapsed={!open} />
          {/* Display area */}
          <div className="display-area flex-grow p-6 overflow-hidden">
            {/* Default display Overview */}
            {dashboardDisplay}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
