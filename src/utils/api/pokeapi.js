export const fetchPokemonList = async (limit = 20, offset = 0) => {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    if (!response.ok) throw new Error("Failed to fetch Pokémon list");
    return response.json();
};

export const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Pokémon details");
    return response.json();
};
