import { useState } from "react";
import CardContainer from "./CardContainer";

export default function PlaySection() {
    const [cardData, setCardData] = useState([]);
    return (
        <div id='play-section'>
            <CardContainer cardDataAr={cardData}></CardContainer>
        </div>
    );
}