import { useEffect, useRef } from "react";
import type { IResultProps } from "../types/result.types";

function getWinMessage(category: string): string {
  switch (category) {
    case "pokemon":
      return " You caught 'em all!";
    case "ram":
      return " Wubba Lubba Dub Dub! You nailed it!";
    case "got":
      return " You survived the Game of Thrones — and took the crown!";
    case "bb":
      return " Say his name... You won, Heisenberg!";
    default:
      return " Victory!";
  }
}

function getLoseMessage(category: string): string {
  switch (category) {
    case "pokemon":
      return " Oh no! You blacked out!";
    case "ram":
      return " Rick just called you a Jerry!";
    case "got":
      return " You fought bravely... but winter came for you.";
    case "bb":
      return " Jesse's disappointed in you.";
    default:
      return " Better luck next time!";
  }
}

export default function Result({
  category,
  gameResult,
  score,
  highScore,
  goToNextPhase,
}: IResultProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={dialogRef} className="result-dialog">
      <div className="modal">
        <h2>
          {gameResult === "win"
            ? getWinMessage(category)
            : getLoseMessage(category)}
        </h2>
        <p>Your Score: {score}</p>
        <p>High Score: {highScore}</p>
        <button onClick={() => goToNextPhase("category")}>Play Again?</button>
      </div>
    </dialog>
  );
}
