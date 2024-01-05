import Card from "./Card";

export default function CardContainer({ addScore, cardDataAr }) {
    return (
        <div id='card-container'>
            <ul>
                {cardDataAr.map(cardData =>
                    <li key={cardData.id}>
                        <Card addScore={addScore}>
                            <img
                                src={cardData.urls.thumb}
                                alt={cardData.alt_description} />
                        </Card>
                    </li>
                )}
            </ul>
        </div>
    );
}