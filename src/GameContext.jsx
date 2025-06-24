import { createContext, useContext, useState } from "react";

// Create a new context to hold the game's state and actions
const GameContext = createContext();

// GameProvider wraps the app and provides game data to all components
export function GameProvider({ children }) {
  const [playing, setPlaying] = useState(false); // Whether the game is active
  const [score, setScore] = useState(0); // Player's score
  const [holes, setHoles] = useState(new Array(9).fill(false)); // Mole positions

  // Start the game: reset score, generate a new mole, and enable playing state
  function startGame() {
    setScore(0);
    setHoles(randomMole());
    setPlaying(true);
  }

  // Restart brings user back to welcome screen
  function restartGame() {
    setPlaying(false);
  }

  // When mole is whacked, increase score and move the mole
  function whackMole() {
    setScore((prev) => prev + 1);
    setHoles(randomMole());
  }

  // Randomly place a mole in one of the 9 holes
  function randomMole() {
    const newHoles = new Array(9).fill(false);
    const randomIndex = Math.floor(Math.random() * 9);
    newHoles[randomIndex] = true;
    return newHoles;
  }

  // Provide context to all children components
  return (
    <GameContext.Provider
      value={{ playing, score, holes, startGame, restartGame, whackMole }}
    >
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to consume the game context
export function useGame() {
  return useContext(GameContext);
}
