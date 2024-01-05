import { useState } from "react";

export default function Card({ addScore, children }) {
    const [selected, setSelected] = useState(false);

    function handleClick() {
        if (!selected) {
            addScore();
            setSelected(true);
        } else {
            console.log('Lose');
        }
    }

    return (
        <button onClick={handleClick} className="card">
            {children}
        </button>
    );
}