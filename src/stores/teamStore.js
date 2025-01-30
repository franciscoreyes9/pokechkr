import { create } from "zustand";
import { auth } from "../firebase/firebase";

export const useTeamStore = create((set) => ({
    team: Array(6).fill(null),
    setTeam: (newTeam) => {
        if (!auth.currentUser) {
            alert("Please log in to save teams!");
            return;
        }
        set({ team: newTeam });
    },
    addToTeam: (pokemon) => {
        set((state) => {
            const firstEmptySlot = state.team.findIndex(p => !p);
            if (firstEmptySlot === -1) return state;
            const newTeam = [...state.team];
            newTeam[firstEmptySlot] = pokemon;
            return { team: newTeam };
        });
    }
}));