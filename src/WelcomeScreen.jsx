import { useGame } from "./GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();
  return (
    <div>
      <h1>Welcome to Whack a Mole!</h1>
      <p>Click the mole when it pops up to score points.</p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}
