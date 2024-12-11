import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import { Route, Routes } from "react-router";
import Overview from "./Overview";
import Settings from "./Settings";

function Dashboard() {
  return (
    <>
      <div className="w-screen bg-white xs:bg-roar-cream sm:bg-roar-cream">
        <Header />
        <div className="flex ">
          <Sidebar />

          {/* Display area */}
          <div className="flex flex-col w-full p-6">
            <Routes>
              <Route path="overview" element={<Overview />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
