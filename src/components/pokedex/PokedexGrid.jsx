import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList, fetchPokemonDetails } from "../../utils/api/pokeapi";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/components/pokedex/_PokedexGrid.module.scss";

const PokedexGrid = () => {
    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["pokemonList"],
        queryFn: ({ pageParam = 0 }) => fetchPokemonList(pageParam, 40),
        getNextPageParam: (lastPage) => lastPage.nextOffset,
    });

    const allPokemon = data?.pages.flatMap((page) => page.results) || [];

    return (
        <div>
            <div className={styles.grid}>
                {allPokemon.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))}
            </div>

            {hasNextPage && (
                <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className={styles.loadMore}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </button>
            )}
        </div>
    );
};

export default PokedexGrid;