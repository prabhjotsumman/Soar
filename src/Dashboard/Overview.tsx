import Heading from "../components/Heading/Heading";
import MyCards from "../components/MyCards/MyCards";
import RecentTransactions from "../components/RecentTransactions/RecentTransactions";
import QuickTransfer from "../QuickTransfer/QuickTransfer";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import BarChart from "../components/BarChart/BarChart";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import PieChart from "../components/PieChart/PieChart";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import LineChart from "../components/LineChart/LineChart";

const Overview = () => {
  return (
    <div className="w-full ">
      {/* First Row */}
      <div className="flex flex-col xl:flex-row">
        <div className="xl:w-2/3">
          <div className="flex justify-between">
            <Heading name="My Cards" />
            <Heading name="See All" type="h2" className="mr-6 px-2 py-1 hover:text-white hover:bg-black hover:cursor-pointer" />
          </div>
          <div className="mt-4 md:mr-6">
            <MyCards />
          </div>
        </div>
        <div className="mt-4 w-full">
          <div className="mt-4 md:mt-0 lg:mt-0">
            <Heading name="Recent Transaction" />
          </div>
          <div className="mt-4">
            <RecentTransactions />
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="flex flex-col md:flex-row w-full my-5">
        <div className="md:w-2/3 xs:pr-8 sm:pr-8">
          <div className="mb-4">
            <Heading type="h1" name="Weekly Activity" />
          </div>
          <BarChart />
        </div>
        <div className="md:w-1/3 align-top w-full">
          <Heading type="h1" name="Expense Statistics" className="mb-4" />
          <div className="items-center bg-white rounded-3xl p-6 m-2">
            <PieChart />
          </div>
        </div>
      </div>
      {/* Third Row */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-2/3 lg:mr-4">
          <Heading type="h1" name="Quick Transfer" />
          <QuickTransfer />
        </div>
        <div className="lg:mr-4">
          <Heading type="h1" name="Balance History" className="" />
          <div className="mt-4">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Overview;
