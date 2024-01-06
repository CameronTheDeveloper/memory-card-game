import { useState } from "react";
import Card from "./Card";
import { shuffleArray } from "./shuffleArray";

export default function CardContainer({ addScore, handleLose, cardDataAr }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const shuffledCardDataAr = shuffleArray(cardDataAr);

  function handleCardSelected(cardID) {
    if (selectedCards.includes(cardID)) {
      handleLose();
      setSelectedCards([]);
    } else {
      const newSelectedCards = [...selectedCards, cardID];
      setSelectedCards(newSelectedCards);
      addScore();
    }
  }

  return (
    <div className="card-container">
      <ul>
        {shuffledCardDataAr.map((cardData) => (
          <li key={cardData.id}>
            <Card cardID={cardData.id} handleCardSelected={handleCardSelected}>
              <img src={cardData.urls.thumb} alt={cardData.alt_description} />
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
