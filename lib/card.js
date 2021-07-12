export function renderCard(character) {
  // Create all fields on card
  const section = createSection(character);
  const cardImg = createImage(character);
  const cardNameBox = createNameBox(character);
  const cardName = createCardName(character);
  //Append them together
  section.append(cardImg);
  section.append(cardNameBox);
  cardNameBox.append(cardName);
  return section;
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("card");
  return section;
}

function createImage(character) {
  const cardImg = document.createElement("img");
  cardImg.src = character.image; // dynamically
  cardImg.alt = character.name; // dynamically
  return cardImg;
}

function createNameBox() {
  const cardNameBox = document.createElement("div");
  cardNameBox.classList.add("card-name");
  return cardNameBox;
}

function createCardName(character) {
  const cardName = document.createElement("h2");
  cardName.textContent = character.name; //dynamically
  return cardName;
}
