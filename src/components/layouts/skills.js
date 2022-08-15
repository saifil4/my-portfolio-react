import Pill from "./pill";

import React from 'react'

function Skills() {
    const skills = [
        'React',
        'Angular',
        'CSS',
        'HTML',
        'JavaScript',
        'SQL',
        'Node JS',
        'Tailwind CSS',
        'Bootstrap'
    ]
    return (

        <div className="space-x-2 space-y-2">
            {
                skills.map(skill => (
                    <Pill name={skill} />
                ))
            }
        </div>
    )
}

export default Skills
