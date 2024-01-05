export default function ScoreBoard({ scoreData }) {

    return (
        <div className="score-board">
            <div className="score">Score: {scoreData.score}</div>
            <div className="high-score">High Score: {scoreData.highScore}</div>
        </div>
    );
}