import Card from "./Card";

export default function CardContainer({ cardDataAr }) {
    return (
        <div id='card-container'>
            <ul>
                {cardDataAr.map(cardData =>
                    <li key={cardData.key}>
                        <Card>Card</Card>
                    </li>
                )}
            </ul>
        </div>
    );
}