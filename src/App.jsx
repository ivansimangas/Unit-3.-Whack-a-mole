import { GameProvider } from "./GameContext";
import Welcome from "./Welcome";
import GameBoard from "./GameBoard";
import { useGame } from "./GameContext";

export default function App() {
  return (
    <GameProvider>
      <Content />
    </GameProvider>
  );
}

function Content() {
  const { playing } = useGame();
  return playing ? <GameBoard /> : <Welcome />;
}
