import { useEffect, useState, type MouseEvent, type ReactElement } from "react";
import type { IGameProps, TResult } from "../types/game.types";
import Grid from "./Grid";
import type { TDifficulty } from "../types/difficulty.types";
import fetchPokemonImg from "../service/pokemon";
import "../style/game.css";

const difficultyLevelTonoOfCards: Record<TDifficulty, number> = {
  easy: 10,
  medium: 25,
  hard: 50,
};

export default function Game({
  gameCategory,
  difficultyLevel,
}: IGameProps): ReactElement {
  document.body.classList.replace("difficulty", "game");

  const noOfCards = difficultyLevelTonoOfCards[difficultyLevel];
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [arrOfImg, setArrofImg] = useState<string[]>([]);
  const [clickedImg, setClickedImg] = useState<Set<string>>(new Set<string>());

  function roundOver(res: TResult): ReactElement {
    if (res === "lost" && highScore < score) {
      setHighScore(score);
    }

    const message =
      res === "lost" ? "Oops! You had already clicked it." : "Hurray! You won.";

    return (
      <>
        <p>{message}</p>
        <p>Maybe try a different category or difficulty level ?</p>
        <button>Play Again?</button>
      </>
    );
  }

  function handleClick(e: MouseEvent<HTMLImageElement>) {
    const imgUrl = e.currentTarget.src;
    if (clickedImg.has(imgUrl)) {
      roundOver("lost");
      return;
    }
    setScore((prev) => prev + 1);
    setClickedImg((prev) => new Set(prev).add(imgUrl));
    if (score === noOfCards) roundOver("win");
  }

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
      <main>
        <div id="score">
          <p>Score: {score}</p>
          <p>HighScore: {highScore}</p>
        </div>
        <Grid arrOfImg={arrOfImg} handleClick={handleClick} />
      </main>
    </>
  );
}
