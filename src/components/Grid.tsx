import type { IGridProp } from "../types/grid.types";

const Grid = ({ arrOfImg, handleClick }: IGridProp) => {
  return (
    <section className="card-grid">
      {arrOfImg.map((url) => {
        return <img src={url} key={url} onClick={handleClick} />;
      })}
    </section>
  );
};

export default Grid;
