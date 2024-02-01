import React from 'react'

function HeroSection() {
    return (
        <div className='lg:flex gap-5 mx-5 '>
            <div
                className='bg-neutral-800 justify-center rounded-t-md flex lg:rounded-md lg:w-1/3 py-5  '
            >

                <img
                    className='rounded-full w-1/2 '
                    src="https://res.cloudinary.com/dzv8lzuw2/image/upload/v1706621857/portfolio/abt6khhauxzknkujiswq.jpg" alt="" />
            </div>
            <div className='bg-neutral-800 lg:rounded-md rounded-b-md lg:w-2/3 p-5  '>
                <p className=' text-yellow-500 text-lg'>HELLO I'M</p>
                <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl"> Anukul Prakash Saxena</h1>
                <p className='text-white md:text-lg'>Web developer with a knack for turning ideas into digital wonders. I'm on a journey to explore, learn, and build exciting projects. Let's create something amazing together!</p>
            </div>

        </div>
    )
}

export default HeroSection