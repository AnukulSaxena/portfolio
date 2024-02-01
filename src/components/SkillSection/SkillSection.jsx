import React from 'react'
import { skills } from '../../data.js'
function SkillSection() {

    return (
        <div
            className='m-5 h-fit   bg-neutral-800 rounded-md px-10 py-5  '
        >
            <div className='text-3xl text-white mb-5 text-center md:text-start'>Skills</div>

            <div
                className='flex flex-wrap md:text-lg gap-2 md:gap-5'
            >
                {
                    skills.map((skill, index) => (
                        <div
                            key={skill + index}
                            className=' px-3 md:px-5 py-1 flex gap-2 items-center justify-center text-neutral-400 border-4 border-neutral-700   rounded-lg'
                        >

                            <span>{skill}</span>
                            <img className='md:h-6 md:w-6 w-4 h-4' src={`/logos/${skill}.png`} alt="" />



                        </div>
                    )
                    )
                }
            </div>

        </div>
    )
}

export default SkillSection