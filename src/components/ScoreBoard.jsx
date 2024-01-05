export default function ScoreBoard({ score = 0, highScore = 0 }) {

    return (
        <div className="score-board">
            <div className="score">Score: {score}</div>
            <div className="high-score">High Score: {highScore}</div>
        </div>
    );
}