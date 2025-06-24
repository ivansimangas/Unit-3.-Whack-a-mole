import { useGame } from "./GameContext";
import "./index.css";

export default function Hole({ index, hasMole }) {
  const { whackMole } = useGame();

  return (
    <div
      className={`hole ${hasMole ? "mole" : ""}`}
      onClick={() => hasMole && whackMole(index)}
      style={{
        width: "100px",
        height: "100px",
        display: "inline-block",
        margin: "0.5rem",
      }}
    ></div>
  );
}
