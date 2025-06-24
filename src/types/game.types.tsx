import type { TCategory } from "./category.types";
import type { TDifficulty } from "./difficulty.types";

export interface IGameProps {
  category: TCategory;
  difficultyLevel: TDifficulty;
}
