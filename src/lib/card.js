/* <section class="card">
        <div class="img section">
          <a href="#" alt=""></a>
        </div>
        <div id="card-name section">
          <h2 class="card-name">Character</h2>
        </div>
      </section> */

const main = document.querySelector("main");

function renderCard() {
  const cardBox = document.createElement("section");
  cardBox.classList.add("card");

  const cardImg = document.createElement("img");
  cardImg.src = "link"; // dynamically
  cardImg.alt = "char name"; // dynamically

  const cardNameBox = document.createElement("div");
  cardNameBox.classList.add("card-name");

  const cardName = document.createElement("h2");
  cardName.textContent = "character name"; //dynamically

  main.append(cardBox);
  cardBox.append(cardImg);
  main.append(cardNameBox);
  cardNameBox.append(cardName);
}
