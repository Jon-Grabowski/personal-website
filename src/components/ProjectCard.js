import React from 'react'

function ProjectCard({project}) {
    const {title, description, tech, github, image} = project

    const techList = tech.map(name => <li>{name}</li>)
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <ul>
                {techList}
            </ul>
            <p>{github}</p>
            <p>{image}</p>
        </div>
    )
}

export default ProjectCard
