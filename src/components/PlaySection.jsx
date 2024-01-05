import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import ScoreBoard from "./ScoreBoard";
import { fetchCardData } from "./card-data";

export default function PlaySection() {
    const [cardData, setCardData] = useState([]);
    const [scoreData, setScore] = useState({ score: 0, highScore: 0 });

    const addScore = () => {
        const newScoreData = { ...scoreData, score: scoreData.score + 1 };
        setScore(newScoreData);
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
                scoreData={scoreData}
            ></ScoreBoard>

            <CardContainer
                addScore={addScore}
                cardDataAr={cardData}
            ></CardContainer>
        </div>
    );
}