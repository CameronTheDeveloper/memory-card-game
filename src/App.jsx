import { useState } from 'react';
import PlaySection from './components/PlaySection';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const addScore = () => {
    setScore(score + 1);
  };

  return (
    <>
      <ScoreBoard
        score={score}
        highScore={highScore}
      ></ScoreBoard>
      <PlaySection addScore={addScore}></PlaySection>
    </>
  );
}

export default App;
