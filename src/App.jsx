import { useState } from 'react';
import PlaySection from './components/PlaySection';
import { fetchCardData } from './components/card-data';
import './App.css';

function App() {
  //Need to call fetchCardData once outside CardContainer
  return (
    <>
      <PlaySection></PlaySection>
    </>
  );
}

export default App;
