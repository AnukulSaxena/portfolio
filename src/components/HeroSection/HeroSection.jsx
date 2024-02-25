import React, { useState, useEffect } from "react";

function HeroSection() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <div className="lg:flex gap-5 mt-5 mx-5 ">
      <div
        className={`
        ${load ? "" : "-translate-x-full bg-transparent"}
        bg-neutral-800  justify-center rounded-t-md flex lg:rounded-md lg:w-1/3 py-5 duration-1000 delay-500`}
      >
        <img
          className="rounded-full lg:h-52 lg:w-52 w-1/2 "
          src="/projectImages/profile.jpg"
          alt=""
        />
      </div>
      <div
        className={`${
          load ? "" : "translate-x-full bg-transparent"
        } bg-neutral-800 lg:rounded-md rounded-b-md lg:w-2/3 p-5 duration-1000 delay-1000`}
      >
        <p className=" text-yellow-500 text-lg">HELLO I'M</p>
        <h1 className="mb-4 text-3xl sm:text-4xl text-nowrap font-extrabold text-white md:text-5xl xl:text-6xl">
          {" "}
          Anukul Prakash Saxena
        </h1>
        <p className="text-white md:text-lg text-balance">
          Web developer with a knack for turning ideas into digital wonders. I'm
          on a journey to explore, learn, and build exciting projects. Let's
          create something amazing together!
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
