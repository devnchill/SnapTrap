import type { IGridProp } from "../types/grid.types";

const Grid = ({ arrOfImg }: IGridProp) => {
  return (
    <>
      {arrOfImg.map((url) => {
        return <img src={url} key={url} />;
      })}
    </>
  );
};

export default Grid;
