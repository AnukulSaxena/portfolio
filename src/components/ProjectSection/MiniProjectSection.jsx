import { useEffect } from "react";
import { miniProjectData } from "../../data.js";
import ProjectCard from "./ProjectCard.jsx";

const MiniProjectSection = ({ isOpen, setIsOpen }) => {
  //   useEffect(() => {
  //     window.onload(setIsOpen(true));
  //   }, []);
  return (
    <div
      className={` rounded-md  sm:px-10 py-5  absolute top-0 h-full w-full ${
        isOpen ? "left-0 bg-neutral-800" : "translate-x-full bg-transparent"
      }  ease-in-out duration-1000 `}
    >
      <div className="flex py-5 justify-start w-full">
        <button
          className="  rounded-md text-lg font-semibold  px-5"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-neutral-300"
              d="M12.9268 18.8389C13.7351 19.5461 15 18.9721 15 17.8982L15 6.10192C15 5.02797 13.7351 4.454 12.9268 5.1612L6.61617 10.683C5.81935 11.3802 5.81935 12.6198 6.61617 13.317L12.9268 18.8389ZM13.5 17.3472L7.60393 12.1882C7.4901 12.0886 7.4901 11.9115 7.60393 11.8119L13.5 6.65286L13.5 17.3472Z"
              fill="#212121"
            />
          </svg>
        </button>
      </div>
      <div className=" flex-col items-center flex sm:gap-10  sm:flex-row sm:justify-start overflow-y-scroll sm:overflow-y-hidden sm:overflow-x-scroll no-scrollbar sm:items-center max-h-[650px] ">
        {miniProjectData.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MiniProjectSection;
