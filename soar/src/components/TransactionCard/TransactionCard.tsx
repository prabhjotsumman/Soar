import { ICONS } from "../../assets/icons/icons";
import { formatCurrency } from "../../utils";
import Icon from "../Icon/Icon";

interface TransactionCardProps {
  name: string;
  icon: string;
  amount: number;
  date: string;
}

const TransactionCard = ({
  name,
  icon,
  amount,
  date,
}: TransactionCardProps) => {
  const IconBg = {
    [ICONS.CARD]: "bg-amber-light",
    [ICONS.PAYPAL]: "bg-purple-light",
    [ICONS.DOLLAR]: "bg-green-light",
  };
  return (
    <div className="flex flex-row px-4 py-2 align-middle items-center  ">
      <div>
        <Icon icon={icon} altName="card" className={IconBg[icon]} />
      </div>
      <div className="mx-2 grow">
        <p className="font-medium text-base">{name}</p>
        <p className="text-purple">{date}</p>
      </div>
      <div
        className={`${
          amount < 0 ? "text-carrot" : "text-green"
        } font-medium text-base pl-2`}
      >
        {amount < 0 ? "-$" + -1 * amount : "$" + formatCurrency(amount)}
      </div>
    </div>
  );
};

export default TransactionCard;
