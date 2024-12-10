interface CardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  selected: boolean;
  className?: string;
}

const Card = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  selected = false,
  className,
  ...props
}: CardProps) => {
  const selectedBg = selected
    ? "bg-gradient-to-r from-card-gray to-black text-white"
    : "bg-white text-black";

  return (
    <div
      className={`h-58 w-78 rounded-3xl ${selectedBg} relative ${className}`}
      {...props}
    >
      <div className="flex justify-between pl-6 pt-6">
        <div className="">
          <p>Balance</p>
          <p className="text-1xl font-sans">${balance}</p>
        </div>
        <div className="mr-4">ICON</div>
      </div>
      <div className="flex pl-6 pt-6">
        <div>
          <p className="font-normal text-xs">CARD HOLDER</p>
          <p>{cardHolder}</p>
        </div>
        <div className="ml-16">
          <p className="font-normal text-xs">VALID THRU</p>
          <p>{validThru}</p>
        </div>
      </div>
      <div className="absolute bottom-0 py-4 px-0 flex justify-between border-t border-x-stone-400 w-full ">
        <div className="text-1xl ml-6">{cardNumber}</div>
        <div className="mr-4">OO</div>
      </div>
    </div>
  );
};

export default Card;