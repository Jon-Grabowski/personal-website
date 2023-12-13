import React from 'react'
import { useState } from 'react'
import { projects } from './../siteData.js'
import ProjectCard from './ProjectCard.js'
import PortfolioEducation from './PortfolioEducation.js'
import PortfolioExp from './PortfolioExp.js'


function Projects() {
    const [resumeToggle, setResumeToggle] = useState(true)

    function handleToggleClick(state) {
        setResumeToggle(state)
    }

    const projectCards = projects.map(project => {
        return <ProjectCard key={project.id} project={project}/>
    })

    return (
        <div className='min-h-screen bg-white flex items-center justify-center border' id='projects'>
            
            <div className='border grid md:grid-cols-2'>

                <div className='p-2 m-3 rounded bg-gray-900'>
                    <h1 className='text-center p-3 text-3xl text-white'>Projects</h1>
                    <div className=''>
                        <div className='flex-col'>
                            {projectCards}
                        </div>
                    </div>
                </div>

                <div className='p-2 m-3 rounded'>
                    <h1 className='text-center p-3 text-3xl'>Resume</h1>
                    <div className='flex justify-around mb-3'>
                        <p className='border px-10' onClick={() => {handleToggleClick(true)}}>Experience</p>
                        <p className='border px-10' onClick={() => {handleToggleClick(false)}}>Education</p>
                    </div>
                    {resumeToggle ? <PortfolioExp /> : <PortfolioEducation />}
                </div>

            </div>

        </div>
    )
}

export default Projects
