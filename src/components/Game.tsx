import { useEffect, useState, type MouseEvent, type ReactElement } from "react";
import type { IGameProps, TResult } from "../types/game.types";
import Grid from "./Grid";
import type { TDifficulty } from "../types/difficulty.types";
import fetchPokemonImg from "../service/pokemon";
import "../style/game.css";
import "../style/result.css";
import fetchGOTImg from "../service/got";
import fetchRAMImg from "../service/ram";
import fetchBBImg from "../service/bb";
import Result from "./Result";

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
      document.body.classList.add("result");
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
        const imgPromise = fetchGOTImg(noOfCards);
        imgPromise.then((val) => setArrofImg(val));
        break;
      }
      case "bb": {
        const imgPromise = fetchBBImg(noOfCards);
        imgPromise.then((val) => setArrofImg(val));

        break;
      }
      case "ram": {
        const imgPromise = fetchRAMImg(noOfCards);
        imgPromise.then((val) => setArrofImg(val));
        break;
      }
      default:
        break;
    }
  }, [gameCategory, noOfCards]);

  return (
    <>
      {gameResult && (
        <Result
          category={gameCategory}
          gameResult={gameResult}
          score={score}
          highScore={highScore}
          goToNextPhase={goToNextPhase}
        ></Result>
      )}
      <main>
        <div id="score">
          <p>HighScore: {highScore}</p>
          <p>Score: {score}</p>
        </div>
        <Grid arrOfImg={arrOfImg} handleClick={handleClick} />
      </main>
    </>
  );
}
