document.addEventListener("DOMContentLoaded", () => {
  const characterList = document.getElementById("character-list");
  const planetList = document.getElementById("planet-list");
  const loadCharactersBtn = document.getElementById("load-characters");
  const loadPlanetsBtn = document.getElementById("load-planets");

  function fetchCharacters() {
      fetch('https://www.swapi.tech/api/people/')
          .then(response => response.json())
          .then(data => {
              characterList.innerHTML = "";
              data.results.forEach(character => {
                  const li = document.createElement("li");
                  li.textContent = character.name;
                  characterList.appendChild(li);
              });
          })
          .catch(error => alert("Error fetching characters"));
  }

  function fetchPlanets() {
      fetch('https://www.swapi.tech/api/planets/')
          .then(response => response.json())
          .then(data => {
              planetList.innerHTML = "";
              data.results.forEach(planet => {
                  const li = document.createElement("li");
                  li.textContent = planet.name;
                  planetList.appendChild(li);
              });
          })
          .catch(error => alert("Error fetching planets"));
  }

  loadCharactersBtn.addEventListener("click", fetchCharacters);
  loadPlanetsBtn.addEventListener("click", fetchPlanets);
});