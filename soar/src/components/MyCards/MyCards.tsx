import Card from "../Card/Card";
// import Heading from "../Heading/Heading";

const MyCards = ({ ...props }) => {
  return (
    <div className=" bg-green-200 py-8 border-2 border-amber-700" {...props}>
      <div className="border-2 border-red-600 flex overflow-scroll xs:flex sm:flex md:flex xl:flex">
        <Card
          balance={"5,756"}
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber={"3778 **** **** 1234"}
          selected
        />
        <Card
          balance={"5,756"}
          cardHolder="Eddy Cusuma"
          validThru="12/22"
          cardNumber={"3778 **** **** 1234"}
          selected={false}
          className="ml-8"
        />
      </div>
    </div>
  );
};

export default MyCards;
