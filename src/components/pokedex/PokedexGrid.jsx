import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList, fetchPokemonDetails } from "../../utils/api/pokeapi";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/components/pokedex/_PokedexGrid.module.scss";

const PokedexGrid = () => {
    const [pokemonList, setPokemonList] = useState([]);

    // fetch pokemon list
    const { data, isLoading, error } = useQuery({
        queryKey: ["pokemonList"],
        queryFn: () => fetchPokemonList(20, 0),
    });

    // fetch details for each pokemon
    useEffect(() => {
        if (data?.results) {
            const fetchDetails = async () => {
                const details = await Promise.all(
                    data.results.map((pokemon) => fetchPokemonDetails(pokemon.url))
                );
                setPokemonList(details);
            };
            fetchDetails();
        }
    }, [data]);

    if (isLoading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error: {error.message}</div>;

    return (
        <div className={styles.grid}>
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokedexGrid;