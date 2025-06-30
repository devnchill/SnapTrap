import { useState, type ReactElement } from "react";
import "./style/app.css";
import type { Phase } from "./types/app.types";
import Category from "./components/Category";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";
import type { TDifficulty } from "./types/difficulty.types";
import type { TCategory } from "./types/category.types";
import { FaGithub } from "react-icons/fa";

export default function App(): ReactElement {
  const [currentPhase, setCurrentPhase] = useState<Phase>("category");
  const [difficulty, setDifficulty] = useState<TDifficulty>("easy");
  const [category, setCategory] = useState<TCategory>("got");

  function goToNextPhase(nextPhase: Phase) {
    setCurrentPhase(nextPhase);
  }

  function chooseDifficulty(difficulty: TDifficulty) {
    setDifficulty(difficulty);
  }

  function chooseCategory(category: TCategory) {
    setCategory(category);
  }

  return (
    <div id="app">
      <header>
        <h1>SnapTrap</h1>
      </header>
      {currentPhase === "category" && (
        <Category
          goToNextPhase={goToNextPhase}
          chooseCategory={chooseCategory}
        />
      )}
      {currentPhase === "difficulty" && (
        <Difficulty
          goToNextPhase={goToNextPhase}
          chooseDifficulty={chooseDifficulty}
          gameCategory={category}
        />
      )}
      {currentPhase === "game" && (
        <Game gameCategory={category} difficultyLevel={difficulty} />
      )}
      <footer>
        <p>
          &copy; Viena
          <a href="https://github.com/devnchill/">
            <FaGithub />
          </a>
        </p>
      </footer>
    </div>
  );
}
