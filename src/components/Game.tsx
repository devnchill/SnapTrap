import { useEffect, useState, type ReactElement } from "react";
import type { IGameProps } from "../types/game.types";
import Grid from "./Grid";
import type { TDifficulty } from "../types/difficulty.types";
import fetchPokemonImg from "../service/pokemon";

const difficultyLevelTonoOfCards: Record<TDifficulty, number> = {
  easy: 10,
  medium: 25,
  hard: 50,
};

export default function Game({
  category,
  difficultyLevel,
}: IGameProps): ReactElement {
  const noOfCards = difficultyLevelTonoOfCards[difficultyLevel];
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [arrOfImg, setArrofImg] = useState<string[]>([]);
  useEffect(() => {
    switch (category) {
      case "pokemon":
        const imgPromise = fetchPokemonImg(noOfCards);
        imgPromise.then((val) => setArrofImg(val));
        break;
      case "got":
        break;
      case "bb":
        break;
      case "ram":
        break;
      default:
        break;
    }
  }, [category]);

  return (
    <>
      <main>
        <div id="score">
          <p>{score}</p>
          <p>{highScore}</p>
        </div>
        <Grid arrOfImg={arrOfImg} />
      </main>
    </>
  );
}
