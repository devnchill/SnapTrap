import type { ReactElement } from "react";
import type { ICategoryProp } from "../types/category.types";

export default function Difficulty({
  goToNextPhase,
}: ICategoryProp): ReactElement {
  document.body.classList.replace("category", "difficulty");
  return <div id="app"></div>;
}
