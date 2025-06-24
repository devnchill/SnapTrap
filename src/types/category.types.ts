import type { Phase } from "./app.types";

export interface ICategoryProp {
  goToNextPhase: (phase: Phase) => void;
}
