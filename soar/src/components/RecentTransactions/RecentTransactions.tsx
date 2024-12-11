// import Heading from "../Heading/Heading";
import TransactionCard from "../TransactionCard/TransactionCard";
import { ICONS } from "../../assets/icons/icons";

const RecentTransactions = () => {
  return (
    <div className="">
      {/* <Heading name="Recent Transaction" /> */}

      <div className="bg-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl py-5">
        <TransactionCard
          name="Deposit from my Card"
          icon={ICONS.CARD}
          amount={-850}
          date="28 January 2021"
        />
        <TransactionCard
          name="Deposit Paypal"
          icon={ICONS.PAYPAL}
          amount={2500}
          date="28 January 2021"
        />
        <TransactionCard
          name="Jemi Wilson"
          icon={ICONS.DOLLAR}
          amount={2500}
          date="28 January 2021"
        />
      </div>
    </div>
  );
};

export default RecentTransactions;
