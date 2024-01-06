import { useState } from "react";

export default function Card({ cardID, handleCardSelected, children }) {
  return (
    <button onClick={() => handleCardSelected(cardID)} className="card">
      {children}
    </button>
  );
}
