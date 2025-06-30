import type { ReactElement } from "react";
import type { ICategoryProp, TCategoryItem } from "../types/category.types";
import "../style/category.css";

import got from "/got.jpg";
import pokemon from "/pokemon.jpg";
import bb from "/breaking_bad.jpg";
import ram from "/ricky_and_morty.png";

const categories: TCategoryItem[] = [
  { key: "got", label: "Game of Thrones", img: got },
  { key: "pokemon", label: "Pokemon", img: pokemon },
  { key: "bb", label: "Breaking Bad", img: bb },
  { key: "ram", label: "Ricky and Morty", img: ram },
];

export default function Category({
  goToNextPhase,
  chooseCategory,
}: ICategoryProp): ReactElement {
  document.body.classList = "category";

  return (
    <>
      <h2>Select Category</h2>
      <main className="category-grid">
        {categories.map(({ key, label, img }) => (
          <article
            key={key}
            className="category-card"
            onClick={() => {
              goToNextPhase("difficulty");
              chooseCategory(key);
            }}
            tabIndex={0}
          >
            <img src={img} alt={label} />
            <h3>{label}</h3>
          </article>
        ))}
      </main>
    </>
  );
}
