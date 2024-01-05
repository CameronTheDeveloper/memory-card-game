import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import { fetchCardData } from "./card-data";

export default function PlaySection({ addScore }) {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {

        let ignore = false;
        !ignore && fetchCardData('tiger', setCardData);
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div id='play-section'>
            <CardContainer
                addScore={addScore}
                cardDataAr={cardData}
            ></CardContainer>
        </div>
    );
}