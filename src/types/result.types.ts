import type { Phase } from "./app.types";
import type { TResult } from "./game.types";

export interface IResultProps {
  category: string;
  gameResult: TResult;
  score: number;
  highScore: number;
  goToNextPhase: (phase: Phase) => void;
}
