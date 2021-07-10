import { renderCard } from "./lib/card.js";
// import { fetchCharacters } from "./lib/db";

const formButton = document.querySelector(".form");
const filter = document.querySelector("select");
const main = document.querySelector("main");

formButton.addEventListener("submit", (event) => {
  const url = "https://rickandmortyapi.com/api/character";
  fetch(url)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      data.results.forEach((character) => {
        main.append(renderCard(character));
      });
    });

  event.preventDefault();
});

// const status = filter.value;
// fetchCharacters(status).then((status) => {
//   status.forEach((character) => {
//     const characterCard = renderCard(character);
//     main.append(character);
//   });
// });
