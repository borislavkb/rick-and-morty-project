const BASE_URL = "https://rickandmortyapi.com/api/character";

export function fetchCharacters(status) {
  let url;

  if (status === "Alive") {
    url = `${BASE_URL}?status=alive`;
  } else if (status === "unknown") {
    url = `${BASE_URL}?status=unknown`;
  } else if (status === "Dead") {
    url = `${BASE_URL}?status=dead`;
  } else {
    url = BASE_URL;
  }
  return fetch(url).then((res) => res.json());
}
