import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.tsx";
import Dashboard from "./Dashboard/Dashboard.tsx";
import Overview from "./Dashboard/Overview.tsx";
import Settings from "./Dashboard/Settings.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
