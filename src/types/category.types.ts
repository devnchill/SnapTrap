import type { Phase } from "./app.types";

export type TCategory = "got" | "bb" | "pokemon" | "ram";

export interface TCategoryItem {
  key: TCategory;
  label: string;
  img: string;
}

export interface ICategoryProp {
  goToNextPhase: (phase: Phase) => void;
  chooseCategory: (category: TCategory) => void;
}
