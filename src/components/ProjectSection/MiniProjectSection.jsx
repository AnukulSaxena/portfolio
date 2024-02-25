import { useEffect } from "react";
import { miniProjectData } from "../../data.js";
import ProjectCard from "./ProjectCard.jsx";

const MiniProjectSection = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={` rounded-md  sm:px-20 bg-neutral-800 left-0  absolute h-full w-full ${
        isOpen ? "  " : "translate-y-full"
      } duration-1000 `}
    >
      <div className="flex py-5 justify-start w-full">
        <button
          className="  rounded-md text-lg font-semibold  px-5"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 512 512"
          >
            <path
              className="fill-neutral-300"
              d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"
            ></path>
          </svg>
        </button>
      </div>
      <div className=" flex-col pb-5 items-center flex sm:gap-10  sm:flex-row sm:justify-start overflow-y-scroll sm:overflow-y-hidden sm:overflow-x-scroll no-scrollbar sm:items-center max-h-[650px] ">
        {miniProjectData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MiniProjectSection;
