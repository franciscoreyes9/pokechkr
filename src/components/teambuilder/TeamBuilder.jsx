import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TeamSlot from "./TeamSlot";
import { useTeamStore } from "../../stores/teamStore";
import styles from "../../styles/components/teambuilder/_TeamBuilder.module.scss";

const TeamBuilder = () => {
    const { team, setTeam } = useTeamStore();

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over) return;

        const oldIndex = team.findIndex(p => p?.id === active.id);
        const newIndex = team.findIndex(p => p?.id === over.id);

        const newTeam = [...team];
        const [movedItem] = newTeam.splice(oldIndex, 1);
        newTeam.splice(newIndex, 0, movedItem);

        setTeam(newTeam);
    };

    return (
        <div className={styles.teamBuilder}>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={team.filter(p => p).map(p => p.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <div className={styles.teamSlots}>
                        {Array(6).fill().map((_, index) => (
                            <TeamSlot
                                key={index}
                                index={index}
                                pokemon={team[index]}
                            />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default TeamBuilder;