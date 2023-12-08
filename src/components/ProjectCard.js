import React from 'react'

function ProjectCard({project}) {
    const {title, description, tech, github, image} = project

    const techList = tech.map(name => <li>{name}</li>)
    return (
        <div
        className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row"
        >
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5
                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-wrap">
                {description}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-300">
                {github}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
