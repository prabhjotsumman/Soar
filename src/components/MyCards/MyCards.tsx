import useStore from "../../hooks/useStore";
import Card from "../Card/Card";

const MyCards = ({ ...props }) => {
  const store = useStore();
  const allCardsData = store?.allCards || [];
  return (
    <div {...props}>
      <div className="flex w-full overflow-scroll xs:overflow-auto sm:overflow-auto md:overflow-auto pb-4">
        {allCardsData &&
          allCardsData?.map((card, index) => {
            return (
              <Card
                key={card.maskedCardNumber}
                balance={`${card.balance}`}
                cardHolder={card.cardHolderName}
                validThru={card.validThru}
                cardNumber={card.maskedCardNumber}
                selected={index === 0}
                className={index !== 0 ? "ml-8" : ""}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MyCards;
