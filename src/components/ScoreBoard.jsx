import { useEffect } from "react";

export default function ScoreBoard({ scoreData, setNewHighScore }) {
    function highScoreBeaten() {
        return scoreData.score > scoreData.highScore;
    }

    useEffect(() => {
        highScoreBeaten() && setNewHighScore(scoreData.score);
    }, [scoreData.score]);

    return (
        <div className="score-board">
            <div className="score">Score: {scoreData.score}</div>
            <div className="high-score">High Score: {scoreData.highScore}</div>
        </div>
    );
}