import { useGame } from "./GameContext";
import Hole from "./Hole";

export default function GameBoard() {
  const { score, restartGame, holes } = useGame();

  return (
    <div>
      <h1>Score: {score}</h1>
      <button onClick={restartGame}>Restart</button>
      <div className="board">
        {holes.map((hasMole, index) => (
          <Hole key={index} index={index} hasMole={hasMole} />
        ))}
      </div>
    </div>
  );
}
