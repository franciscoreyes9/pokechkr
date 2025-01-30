import React from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import styles from "../../styles/components/teambuilder/_TeamSlot.module.scss";

const TeamSlot = ({ pokemon, index }) => {
    const { setNodeRef: setDroppableRef, isOver } = useDroppable({
        id: `slot-${index}`,
    });

    const { attributes, listeners, setNodeRef: setDraggableRef } = useDraggable({
        id: pokemon?.id || `empty-${index}`,
        data: { pokemon, index },
    });

    return (
        <div
            ref={setDroppableRef}
            className={`${styles.slot} ${isOver ? styles.hovered : ""}`}
        >
            {pokemon ? (
                <div
                    ref={setDraggableRef}
                    {...listeners}
                    {...attributes}
                    className={styles.pokemon}
                >
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <span>{pokemon.name}</span>
                </div>
            ) : (
                <div className={styles.empty}>Slot {index + 1}</div>
            )}
        </div>
    );
};

export default TeamSlot;