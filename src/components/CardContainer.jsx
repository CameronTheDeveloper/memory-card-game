import Card from "./Card";

export default function CardContainer({ cardDataAr }) {
    return (
        <div id='card-container'>
            <ul>
                {cardDataAr.map(cardData =>
                    <li key={cardData.id}>
                        <Card>Card</Card>
                    </li>
                )}
            </ul>
        </div>
    );
}