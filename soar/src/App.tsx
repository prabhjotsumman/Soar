import "./App.css";

import Header from "./components/Header/Header";
import MyCards from "./components/MyCards/MyCards";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import Sidebar from "./components/Sidebar/Sidebar";
import QuickTransfer from "./QuickTransfer/QuickTransfer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className=" border-orange-400 border-4 flex bg-slate-400">
          <Sidebar />
          <div className="flex-col border-2 border-emerald-500 ">
            <div className="flex">
              <MyCards />
              <RecentTransactions />
            </div>
            <div className="p-8">

            <QuickTransfer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
