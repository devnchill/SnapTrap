import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import type { IDifficultyProp, TDifficulty } from "../types/difficulty.types";
import "../style/difficulty.css";

export default function Difficulty({
  goToNextPhase,
  chooseDifficulty,
  gameCategory,
}: IDifficultyProp): ReactElement {
  document.body.classList.replace("category", "difficulty");
  document.body.classList.add(gameCategory);

  const level: TDifficulty[] = ["easy", "medium", "hard"];
  return (
    <div id="app">
      <header>
        <h1>SnapTrap</h1>
      </header>
      <h2>Select Difficulty Level</h2>
      <main>
        {level.map((diffLevel, index) => {
          return (
            <section
              tabIndex={0}
              onClick={() => {
                goToNextPhase("game");
                chooseDifficulty(diffLevel);
              }}
            >
              {index}. {diffLevel.toUpperCase()}
            </section>
          );
        })}
      </main>
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
