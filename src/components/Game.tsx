import { useEffect, useState, type MouseEvent, type ReactElement } from "react";
import type { IGameProps, TResult } from "../types/game.types";
import Grid from "./Grid";
import type { TDifficulty } from "../types/difficulty.types";
import fetchPokemonImg from "../service/pokemon";
import "../style/game.css";
import "../style/result.css";

const difficultyLevelTonoOfCards: Record<TDifficulty, number> = {
  easy: 10,
  medium: 25,
  hard: 50,
};

export default function Game({
  gameCategory,
  difficultyLevel,
  highScore,
  goToNextPhase,
  setHighScore,
}: IGameProps): ReactElement {
  document.body.classList.replace("difficulty", "game");

  const noOfCards = difficultyLevelTonoOfCards[difficultyLevel];
  const [score, setScore] = useState(0);
  const [arrOfImg, setArrofImg] = useState<string[]>([]);
  const [clickedImg, setClickedImg] = useState<Set<string>>(new Set<string>());
  const [gameResult, setGameResult] = useState<TResult | null>(null);

  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function handleClick(e: MouseEvent<HTMLImageElement>) {
    const imgUrl = e.currentTarget.src;
    if (clickedImg.has(imgUrl)) {
      setGameResult("lost");
      return;
    }
    const newScore = score + 1;
    setScore(newScore);
    if (newScore === noOfCards) {
      setGameResult("win");
      return;
    }
    setClickedImg((prev) => new Set(prev).add(imgUrl));
    setArrofImg((prev) => shuffleArray(prev));
  }

  useEffect(() => {
    if (gameResult && score > highScore) {
      setHighScore(score);
    }
  }, [gameResult, score, highScore, setHighScore]);

  useEffect(() => {
    if (gameResult) {
      document.body.className = "result";
    }
  }, [gameResult]);

  useEffect(() => {
    switch (gameCategory) {
      case "pokemon": {
        const imgPromise = fetchPokemonImg(noOfCards);
        imgPromise.then((val) => setArrofImg(val));
        break;
      }
      case "got": {
        break;
      }
      case "bb": {
        break;
      }
      case "ram": {
        break;
      }
      default:
        break;
    }
  }, [gameCategory, noOfCards]);

  return (
    <>
      {gameResult ? (
        <main>
          <p>
            {gameResult === "lost"
              ? "Oops! You had already clicked it."
              : "Hurray! You won."}
          </p>
          <p>Maybe try a different category or difficulty level ?</p>
          <button onClick={() => goToNextPhase("category")}>Play Again?</button>
        </main>
      ) : (
        <main>
          <div id="score">
            <p>HighScore: {highScore}</p>
            <p>Score: {score}</p>
          </div>
          <Grid arrOfImg={arrOfImg} handleClick={handleClick} />
        </main>
      )}
    </>
  );
}
