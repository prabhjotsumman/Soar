import TransactionCard from "../TransactionCard/TransactionCard";
import { ICONS } from "../../assets/icons/icons";
import useStore from "../../hooks/useStore";

const RecentTransactions = () => {
  const store = useStore();
  const transactions = store?.transactions || [];

  return (
    <div className="">
      <div className="bg-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl py-5 h-56 overflow-y-scroll">
        {transactions &&
          transactions.map((transaction) => {
            return (
              <TransactionCard
                key={transaction.id}
                name={(() => {
                  if (transaction.amount < 0) {
                    return `Debited by ${transaction.source}`;
                  } else {
                    return `Credited by ${transaction.source}`;
                  }
                })()}
                icon={
                  transaction.source === "card"
                    ? ICONS.CARD
                    : transaction.source === "person"
                    ? ICONS.DOLLAR
                    : ICONS.PAYPAL
                }
                amount={transaction.amount}
                date={transaction.date}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecentTransactions;
