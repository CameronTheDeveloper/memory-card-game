import { useState } from 'react';
import PlaySection from './components/PlaySection';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

function App() {
  return (
    <>
      <ScoreBoard></ScoreBoard>
      <PlaySection></PlaySection>
    </>
  );
}

export default App;
