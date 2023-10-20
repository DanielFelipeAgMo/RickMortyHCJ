document.getElementById("loadData").addEventListener("click", function () {
    fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(data => {
            const characterData = document.getElementById("characterData");
            characterData.innerHTML = ""; // Limpia el contenido anterior

            const searchInput = document.getElementById("searchInput");
            const searchTerm = searchInput.value.toLowerCase();

            data.results.forEach(character => {
                if (character.name.toLowerCase().includes(searchTerm)) {
                    const characterElement = document.createElement("div");
                    characterElement.classList.add("character-card");
                    characterElement.innerHTML = `
                        <h2>${character.name}</h2>
                        <img src="${character.image}" alt="${character.name}">
                        <p>Status: ${character.status}</p>
                        <p>Species: ${character.species}</p>
                        <p>Gender: ${character.gender}</p>
                    `;
                    characterData.appendChild(characterElement);
                }
            });
        })
        .catch(error => {
            console.error("Error al cargar datos:", error);
        });
});
    