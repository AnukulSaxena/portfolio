import { useState, useEffect, useRef } from "react";


const Header = () => {
    const [scrollDirection, setScrollDirection] = useState("up");


    let prevScrollY = 0;


    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
            setScrollDirection("down");

        } else {
            setScrollDirection("up");

        }
        prevScrollY = currentScrollY;

    };
    function contactClick() {
        const contactSection = document.getElementById('contactSection');

        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full flex justify-between px-4 border-gray-200  lg:px-6 py-4 bg-neutral-800 delay-300 duration-700 transition-transform ${(scrollDirection === "down") ? "-translate-y-full" : "translate-y-0"
                }`} >


            <a className="flex " href="/temp/AnukulPrakashSaxena_Resume.pdf" download="AnukulPrakashSaxena_Resume.pdf">
                <button className="bg-gray-300 hover:scale-110 ease-in-out transform duration-500 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Resume</span>
                </button>
            </a>

            <button onClick={contactClick} className="bg-yellow-500 hover:scale-110 ease-in-out transform duration-500 hover:bg-gray-400 text-neutral-800 font-bold py-1 px-2 md:px-4 rounded inline-flex items-center">
                <img src="/logos/male-user.png" className="h-6 mr-2" alt="" />
                <span>Contact Me</span>
            </button>







        </header>
    );
};



export default Header;


