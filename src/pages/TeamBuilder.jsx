import React from "react";
import TeamBuilderComponent from "../components/teambuilder/TeamBuilder";
import styles from "../styles/components/teambuilder/_TeamBuilder.module.scss";
import TeamSaver from "../components/teambuilder/TeamSaver.jsx";

const TeamBuilder = () => {
    return (
        <div className={styles.teamBuilder}>
            <h1>Team Builder</h1>
            <TeamBuilderComponent />
            <TeamSaver />
        </div>
    );
};

export default TeamBuilder;