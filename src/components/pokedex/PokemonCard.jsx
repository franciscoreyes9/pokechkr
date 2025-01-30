import React from "react";
import styles from "../../styles/components/pokedex/_PokemonCard.module.scss";

const PokemonCard = ({ pokemon }) => {
    const { name, sprites, types } = pokemon;
    const image = sprites.front_default;

    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.types}>
                {types.map((type) => (
                    <span key={type.slot} className={styles.type}>
            {type.type.name}
          </span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;