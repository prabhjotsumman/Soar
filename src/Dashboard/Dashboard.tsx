import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import { Route, Routes, useLocation } from "react-router";
import Overview from "./Overview";
import Settings from "./Settings";

function Dashboard() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <div className="w-screen bg-white xs:bg-roar-cream sm:bg-roar-cream">
        <Header />
        <div className="flex ">
          <Sidebar />

          {/* Display area */}
          <div className="flex flex-col w-full p-6">
            {/* Default display Overview */}
            {pathname === "/" && <Overview />}
            <Routes>
              <Route index path="overview" element={<Overview />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
