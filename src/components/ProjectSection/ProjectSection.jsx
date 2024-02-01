import React from 'react'
import { data } from '../../data.js'
import ProjectCard from './ProjectCard.jsx'
function ProjectSection() {
    return (
        <section className=' h-fit bg-neutral-800 rounded-md px-10 mx-5  py-5 mt-5 '>
            <div className='text-3xl text-white mb-5 text-center md:text-start'>Projects</div>

            <div className=' flex gap-10 flex-col sm:flex-row sm:justify-start justify-center items-center '>

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