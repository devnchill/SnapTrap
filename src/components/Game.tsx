import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import type { IGameProps } from "../types/game.types";

export default function Game({
  category,
  difficultyLevel,
}: IGameProps): ReactElement {
  return (
    <div id="game">
      <header>
        <h1>SnapTrap</h1>
      </header>
      <main>
        You chose {category} category with {difficultyLevel} level.
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
