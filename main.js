import { renderCard } from "./lib/card.js";
import { fetchCharacters } from "./lib/db.js";

const formButton = document.querySelector(".form");
export const filter = document.querySelector("select");
const main = document.querySelector("main");

formButton.addEventListener("submit", (event) => {
  const status = filter.value;
  clearAll();
  fetchCharacters(status).then((data) => {
    data.results.forEach((character) => {
      main.append(renderCard(character));
    });
  });

  event.preventDefault();
});

function clearAll() {
  const characterList = document.querySelectorAll(".card");
  characterList.forEach((character) => character.remove());
}

// const status = filter.value;
// fetchCharacters(status).then((status) => {
//   status.forEach((character) => {
//     const characterCard = renderCard(character);
//     main.append(character);
//   });
// });

//Working fetch
// const url = "https://rickandmortyapi.com/api/character";
//   fetch(url)
//     .then((response) => {
//       console.log(response.status);
//       return response.json();
//     })
//     .then((data) => {
//       data.results.forEach((character) => {
//         main.append(renderCard(character));
//       });
//     });

//   event.preventDefault();

// fetch(url)
//     .then((response) => {
//       return response.json();
//     })
