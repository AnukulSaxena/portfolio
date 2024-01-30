import React, { useEffect } from 'react'

function ProjectCard({ data }) {
    const { gitUrl, imgUrl, title, description } = data;

    return (
        <div className=" rounded-md hover:shadow-2xl mb-5 hover:cursor-pointer max-w-72 h-80">

            <a href={gitUrl}>
                <img className=" min-h-44 max-h-44 min-w-full rounded-md object-cover" src={imgUrl} alt={imgUrl} />

                <div className="p-4  bg-transparent rounded-b-md">

                    <h5 className="mb-2 text-2xl font-bold  text-white">{title}</h5>

                    <p className="font-normal text-gray-400">{description}</p>

                </div>
            </a>

        </div>

    )
}

export default ProjectCard