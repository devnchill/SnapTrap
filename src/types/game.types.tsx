import type { TCategory } from "./category.types";
import type { TDifficulty } from "./difficulty.types";

export interface IGameProps {
  gameCategory: TCategory;
  difficultyLevel: TDifficulty;
}

export type TResult = "win" | "lost";
