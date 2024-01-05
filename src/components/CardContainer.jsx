import Card from "./Card";

export default function CardContainer({ addScore, handleLose, cardDataAr }) {
    return (
        <div className='card-container'>
            <ul>
                {cardDataAr.map(cardData =>
                    <li key={cardData.id}>
                        <Card
                            addScore={addScore}
                            handleLose={handleLose}>
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