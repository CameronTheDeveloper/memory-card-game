import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import ScoreBoard from "./ScoreBoard";
import { fetchCardData } from "./card-data";

export default function PlaySection() {
    const [cardData, setCardData] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const addScore = () => {
        setScore(score + 1);
    };

    useEffect(() => {

        let ignore = false;
        !ignore && fetchCardData('tiger', setCardData);
        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div id='play-section'>
            <ScoreBoard
                score={score}
                highScore={highScore}
            ></ScoreBoard>

            <CardContainer
                addScore={addScore}
                cardDataAr={cardData}
            ></CardContainer>
        </div>
    );
}