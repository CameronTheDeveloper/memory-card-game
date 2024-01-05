import { useState } from "react";

export default function Card({ addScore, handleLose, children }) {
    const [selected, setSelected] = useState(false);

    function handleClick() {
        if (!selected) {
            addScore();
            setSelected(true);
        } else {
            handleLose();
        }
    }

    return (
        <button onClick={handleClick} className="card">
            {children}
        </button>
    );
}