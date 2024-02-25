import React, { useEffect, useState } from "react";
import { data } from "../../data.js";
import ProjectCard from "./ProjectCard.jsx";
import MiniProjectSection from "./MiniProjectSection.jsx";

function ProjectSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <div className="mx-5 mt-5 sm:h-[26rem] h-[44rem] relative rounded-md overflow-hidden">
      <div
        className={` rounded-md bg-neutral-800  sm:px-20 py-5  relative inset-0  h-full w-full 
        ${!isOpen ? " translate-y-0" : "-translate-y-full"}   duration-1000 `}
      >
        <div className="text-3xl text-white mb-5 text-center md:text-start">
          Projects
        </div>

        <div className=" flex-col pb-5 items-center flex sm:gap-10  sm:flex-row sm:justify-start overflow-y-scroll sm:overflow-y-hidden sm:overflow-x-scroll no-scrollbar sm:items-center max-h-[650px] ">
          {data.map((item, index) => (
            <ProjectCard key={index} data={item} />
          ))}
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className=" rounded-md hover:shadow-2xl mb-5 md:mb-0 hover:cursor-pointer min-w-72 max-w-72 h-80"
          >
            <img
              className=" min-h-44 max-h-44 min-w-full rounded-md object-cover"
              src="/projectImages/miniproject.jpeg"
            />

            <div className="p-4  bg-transparent rounded-b-md">
              <h5 className="mb-2 text-2xl font-bold  text-white">
                Mini Projects
              </h5>

              <p className="font-normal text-gray-400">
                NextJS-Authentication-App, Audio-Player, Star-Wars-API
              </p>
            </div>
          </div>
        </div>
      </div>
      <MiniProjectSection setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default ProjectSection;
