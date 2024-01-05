import { useState } from 'react';
import PlaySection from './components/PlaySection';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <ScoreBoard
        score={score}
        highScore={highScore}
      ></ScoreBoard>
      <PlaySection></PlaySection>
    </>
  );
}

export default App;
