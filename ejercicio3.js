async function fetchCharacterData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        return data.results; // Devuelve el arreglo de personajes
    } catch (error) {
        console.error("Error al cargar la informacion:", error);
        return [];
    }
}

async function main() {
    console.log("Cargando datos...");
    const characters = await fetchCharacterData();
    console.log("Personajes: ", characters);

    // Filtrar personajes con ID par
    const evenIdCharacters = characters.filter(character => character.id % 2 === 0);

    // Asignar "Programación Móvil" a personajes con type vacío
    characters.forEach(character => {
        if (character.type === "") {
            character.type = "Programación Móvil";
        }
    });

    // Crear arreglo de objetos con información de personajes
    const resultado = characters.map(character => {
        return {
            personaje: character.name,
            episodios: character.episode.length,
            masDeCincoEpisodios: character.episode.length > 5 ? "Si" : "No"
        };
    });
    for (let i = 0; i < evenIdCharacters.length; i++) {
        console.log("Personajes con ID par:  personaje: "+evenIdCharacters[i].name+", episodios: "+evenIdCharacters[i].episodios+",  masDeCincoEpisodios: "+ evenIdCharacters[i].masDeCincoEpisodios);
    }
    for (let i = 0; i < characters.length; i++) {
        console.log("Personajes con type modificado:  personaje: "+characters[i].name+", episodios: "+characters[i].episodios+",  masDeCincoEpisodios: "+ characters[i].masDeCincoEpisodios+ ", type: "+characters[i].type);
    }
    for (let i = 0; i < resultado.length; i++) {
        console.log("Resultado final:  personaje: "+resultado[i].personaje+", episodios: "+resultado[i].episodios+",  masDeCincoEpisodios: "+ resultado[i].masDeCincoEpisodios);
    }



}

main();
