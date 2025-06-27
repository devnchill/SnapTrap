import type { ReactElement } from "react";
import type { IGameProps } from "../types/game.types";

export default function Game({
  category,
  difficultyLevel,
}: IGameProps): ReactElement {
  return (
    <>
      <main>
        You chose {category} category with {difficultyLevel} level.
      </main>
    </>
  );
}
