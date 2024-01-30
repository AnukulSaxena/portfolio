import React from 'react'
import { data } from '../../data.js'
import ProjectCard from './ProjectCard.jsx'
function ProjectSection() {
    return (
        <section className='w-full h-fit bg-neutral-800 rounded-md px-10 py-5 mt-5 '>
            <div className='text-2xl text-white mb-5 text-center md:text-start'>Projects</div>
            <div className=' sm:flex gap-10 '>

                {
                    data.map((item, index) => (
                        <ProjectCard
                            key={index}
                            data={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default ProjectSection