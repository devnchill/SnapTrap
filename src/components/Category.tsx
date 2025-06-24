import type { ReactElement } from "react";
import type { ICategoryProp } from "../types/category.types";
import { FaGithub } from "react-icons/fa";
import "../style/category.css";

import got from "/got.jpg";
import pokemon from "/pokemon.jpg";
import bb from "/breaking_bad.jpg";
import ram from "/ricky_and_morty.jpeg";

const categories = [
  { key: "got", label: "Game of Thrones", img: got },
  { key: "pokemon", label: "Pokemon", img: pokemon },
  { key: "bb", label: "Breaking Bad", img: bb },
  { key: "ram", label: "Ricky and Morty", img: ram },
];

export default function Category({
  goToNextPhase,
}: ICategoryProp): ReactElement {
  document.body.classList.add("category");
  return (
    <div id="app">
      <header>
        <h1>SnapTrap</h1>
      </header>
      <h2>Select Category</h2>
      <main className="category-grid">
        {categories.map(({ key, label, img }) => (
          <article
            key={key}
            className="category-card"
            onClick={() => goToNextPhase("difficulty")}
            tabIndex={0}
          >
            <img src={img} alt={label} />
            <h3>{label}</h3>
          </article>
        ))}
      </main>
      <footer>
        <p>
          &copy; Viena
          <a href="https://github.com/devnchill/">
            <FaGithub />
          </a>
        </p>
      </footer>
    </div>
  );
}
