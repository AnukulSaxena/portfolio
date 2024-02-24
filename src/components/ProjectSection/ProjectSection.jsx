import React, { useState } from "react";
import { data } from "../../data.js";
import ProjectCard from "./ProjectCard.jsx";
function ProjectSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" h-fit bg-neutral-800 rounded-md sm:px-10 mx-5  py-5 mt-5 relative ">
      <div className="text-3xl text-white mb-5 text-center md:text-start">
        Projects
      </div>

      <div className=" flex-col items-center flex sm:gap-10  sm:flex-row sm:justify-start overflow-y-scroll sm:overflow-y-hidden sm:overflow-x-scroll no-scrollbar sm:items-center max-h-[650px] ">
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
      <MiniProjectSection setIsOpen={setIsOpen} isOpen={isOpen} />
    </section>
  );
}

export default ProjectSection;

const MiniProjectSection = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`flex  justify-center items-center  absolute top-0 h-full w-full ${
        isOpen ? "left-0 bg-white" : "translate-x-full bg-transparent"
      }  ease-in-out duration-1000 `}
    >
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        className="p-5 bg-black rounded-e-sm"
      >
        X
      </button>
    </div>
  );
};
