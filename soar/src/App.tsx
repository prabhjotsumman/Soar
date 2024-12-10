// import { useState } from 'react'
import "./App.css";

import Header from "./components/Header/Header";
import MyCards from "./components/MyCards/MyCards";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <div className=" border-orange-400 border-4">
          <Header />
          <div className="flex">
            <Sidebar />
            <MyCards />
            <RecentTransactions />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
