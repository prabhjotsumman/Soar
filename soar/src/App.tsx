import "./App.css";

import Header from "./components/Header/Header";
import MyCards from "./components/MyCards/MyCards";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";
import Sidebar from "./components/Sidebar/Sidebar";
import QuickTransfer from "./QuickTransfer/QuickTransfer";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import BarChart from "./components/BarChart/BarChart";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import PieChart from "./components/PieChart/PieChart";
import Heading from "./components/Heading/Heading";
import LineChart from "./components/LineChart/LineChart";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className=" border-orange-400 border-4 flex ">
          <Sidebar />

          {/* Display area */}
          <div className="flex flex-col border-2 border-emerald-500 w-full pl-6">
            {/* First Row */}
            <div className="flex w-full items-center border-4 border-pink-900">
              <div className="w-2/3">
                <div className="flex justify-between">
                  <Heading name="My Cards" className="mb-5" />
                  <Heading name="See All" type="h1" />
                </div>
                <MyCards />
              </div>
              <div className="w-1/3 pl-3 ">
                <Heading name="Recent Transaction" />
                <RecentTransactions />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex w-full  border-2 border-purple-dark items-center  justify-around">
              <div className="w-2/3 border-2 border-orange-700">
                <Heading type="h1" name="Weekly Activity" />
                <BarChart />
              </div>
              <div className="align-top">
                <Heading type="h1" name="Expense Statistics" className="mb-3" />
                <div className=" border-2 border-orange-700 items-center bg-white rounded-3xl p-6">
                  <PieChart />
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="border-2 border-slate-950 flex ">
              <div className="border-2 border-slate-950 w-full">
                <QuickTransfer />
              </div>
              <div className="border-2 border-black">
                <Heading type="h1" name="Balance History" className="my-6" />
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
