import Card from "./Card";

export default function CardContainer({ cardDataAr }) {
    return (
        <div id='card-container'>
            <ul>
                {cardDataAr.map(cardData =>
                    <li key={cardData.id}>
                        <Card>
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