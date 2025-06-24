import type { Phase } from "./app.types";

export interface IDifficultyProp {
  goToNextPhase: (phase: Phase) => void;
}
