import type { Phase } from "./app.types";
import type { TCategory } from "./category.types";

export interface IDifficultyProp {
  goToNextPhase: (phase: Phase) => void;
  chooseDifficulty: (difficulty: TDifficulty) => void;
  gameCategory: TCategory;
}

export type TDifficulty = "easy" | "medium" | "hard";
