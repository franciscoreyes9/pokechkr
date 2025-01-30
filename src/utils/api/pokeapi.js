export const fetchPokemonList = async (pageParam = 0, limit = 40) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pageParam}`
    );
    if (!response.ok) throw new Error("Failed to fetch Pokémon list");
    const data = await response.json();

    const detailedPokemon = await Promise.all(
        data.results.map(pokemon => fetchPokemonDetails(pokemon.url))
    );

    return {
        results: detailedPokemon,
        nextOffset: data.next ? pageParam + limit : null,
    };
};

export const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Pokémon details");
    return response.json();
};
