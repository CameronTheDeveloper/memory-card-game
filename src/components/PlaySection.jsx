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

  const setNewHighScore = (newHighScore) => {
    const newScoreData = { ...scoreData, highScore: newHighScore };
    setScore(newScoreData);
  };

  const handleLose = () => {
    const newScoreData = { ...scoreData, score: 0 };
    setScore(newScoreData);
  };

  useEffect(() => {
    let ignore = false;
    !ignore && fetchCardData("tiger", setCardData);
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div id="play-section">
      <ScoreBoard
        scoreData={scoreData}
        setNewHighScore={setNewHighScore}
      ></ScoreBoard>

      <CardContainer
        addScore={addScore}
        handleLose={handleLose}
        cardDataAr={cardData}
      ></CardContainer>
    </div>
  );
}
