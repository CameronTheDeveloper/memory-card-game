import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import { fetchCardData } from "./card-data";

export default function PlaySection() {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        let ignore = false;
        ignore == false && setCardData(fetchCardData);
        return () => {
            ignore = true;
        };
    }, [cardData]);

    return (
        <div id='play-section'>
            <CardContainer cardDataAr={cardData}></CardContainer>
        </div>
    );
}