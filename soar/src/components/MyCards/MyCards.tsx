import Card from "../Card/Card";
import Heading from "../Heading/Heading";

const MyCards = () => {
  return (
    <div className=" bg-green-200 px-10 py-8">
      <div className="flex justify-between">
        <Heading name="My Cards" className="mb-5" />
        <Heading name="See All" type="h6"/>
      </div>

      <div className="flex justify-between">
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
