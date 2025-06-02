import React from "react";

export default function JobSkills({ skills }) {
    console.log(skills);
    
    return (
        <div>
            <h5>Keahlian yang Dibutuhkan</h5>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
        </div>
    );
}
