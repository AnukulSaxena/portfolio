import React from 'react'
import { skills } from '../../data.js'
function SkillSection() {

    return (
        <div
            className='w-full h-fit   bg-neutral-800 rounded-md px-10 py-5 mt-5 '
        >
            <div className='text-2xl text-white mb-5 text-center md:text-start'>Skills</div>
            <div
                className='flex flex-wrap text-lg gap-5'
            >
                {
                    skills.map((skill, index) => (
                        <div
                            key={skill + index}
                            className=' px-5 py-1 text-white border-4 border-neutral-700   rounded-lg'
                        >

                            {skill}
                        </div>
                    )
                    )
                }
            </div>

        </div>
    )
}

export default SkillSection