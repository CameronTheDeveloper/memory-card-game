export default function Card({ addScore, children }) {
    function handleClick() {
        addScore();
    }
    return (
        <button onClick={handleClick} className="card">
            {children}
        </button>
    );
}