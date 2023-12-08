import React from 'react'
import { projects } from './../siteData.js'
import ProjectCard from './ProjectCard.js'

function Projects() {
    const projectCards = projects.map(project => {
        return <ProjectCard key={project.id} project={project}/>
    })
    console.log(projectCards)
    return (
        <div className='min-h-screen bg-green-800 flex items-center justify-center border' id='projects'>
            <div className='container text-center border flex items-center justify-center'>
                <h1 className='text-4xl font-bold'>Projects</h1>
                <div className='flex-col'>
                    {projectCards}
                </div>
            </div>
        </div>
    )
}

export default Projects
