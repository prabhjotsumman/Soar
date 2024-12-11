import Card from "../Card/Card";
// import Heading from "../Heading/Heading";

const MyCards = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex overflow-scroll xs:overflow-auto sm:overflow-auto md:overflow-auto xs:flex sm:flex md:flex xl:flex">
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
