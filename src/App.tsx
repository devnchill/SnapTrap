import { useState, type ReactElement } from "react";
import "./style/app.css";
import type { Phase } from "./types/app.types";
import Category from "./components/Category";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";

export default function App(): ReactElement {
  const [currentPhase, setCurrentPhase] = useState<Phase>("category");

  function goToNextPhase(nextPhase: Phase) {
    setCurrentPhase(nextPhase);
  }

  return (
    <>
      {currentPhase === "category" && (
        <Category goToNextPhase={goToNextPhase} />
      )}
      {/* {currentPhase === "difficulty" && ( */}
      {/*   <Difficulty onPhaseChange={goToNextPhase} /> */}
      {/* )} */}
      {/* {currentPhase === "game" && <Game onPhaseChange={goToNextPhase} />} */}
    </>
  );
}
