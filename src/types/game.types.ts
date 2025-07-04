import type { Phase } from "./app.types";
import type { TCategory } from "./category.types";
import type { TDifficulty } from "./difficulty.types";

export interface IGameProps {
  gameCategory: TCategory;
  difficultyLevel: TDifficulty;
  highScore: number;
  setHighScore: (n: number) => void;
  goToNextPhase: (p: Phase) => void;
}

export type TResult = "win" | "lost";
