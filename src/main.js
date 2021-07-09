const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  console.log("clicked");
  event.preventDefault();
});
