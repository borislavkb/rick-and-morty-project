
//This is not relevant and not working

 function generateNameList(name){
    const BASE_URL = "https://rickandmortyapi.com/api/character";
    fetch(BASE_URL)
    .then(response =>{
      console.log(response.status);
      return response.json();
    })
    .then(data.results.forEach((name) => {
        selectCharacter.append(addNameToList(characterName));
      form.append(SelectCharacter);
  })
};




function addNameToList(){
    const form = document.querySelector("form");
const selectCharacter = document.createElement("select");
selectCharacter.classList.add("form-filter");
const charOption = document.createElement("option");
    const charOption = document.createElement("option");
    charOption.textContent = data.results.name;
    charOption.value = '"' + data.results.name + '"';
    return charOption; 

}