import { type MouseEvent } from "react";
export interface IGridProp {
  arrOfImg: string[];
  handleClick: (e: MouseEvent<HTMLImageElement>) => void;
}
