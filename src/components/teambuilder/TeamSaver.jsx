import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useTeamStore } from "../../stores/teamStore";
import { auth } from "../../firebase/firebase";
import styles from "../../styles/components/teambuilder/_TeamSaver.module.scss";

const TeamSaver = () => {
    const { team } = useTeamStore();
    const [teamName, setTeamName] = useState("");
    const [savedTeams, setSavedTeams] = useState([]);

    const saveTeam = async () => {
        if (!auth.currentUser) return;

        try {
            const teamRef = doc(db, "users", auth.currentUser.uid, "teams", teamName);
            await setDoc(teamRef, {
                name: teamName,
                pokemon: team.filter(p => p).map(p => p.id),
                timestamp: new Date(),
            });
            alert("Team saved!");
        } catch (error) {
            alert("Error saving team: " + error.message);
        }
    };

    const loadTeams = async () => {
        if (!auth.currentUser) return;

        const teamsRef = doc(db, "users", auth.currentUser.uid, "teams");
        const snapshot = await getDoc(teamsRef);
        if (snapshot.exists()) {
            setSavedTeams(snapshot.data());
        }
    };

    return (
        <div className={styles.teamSaver}>
            <input
                type="text"
                placeholder="Team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <button onClick={saveTeam}>Save Team</button>

            <button onClick={loadTeams}>Load Teams</button>

            {savedTeams.map((team) => (
                <div key={team.name} className={styles.savedTeam}>
                    <h4>{team.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default TeamSaver;