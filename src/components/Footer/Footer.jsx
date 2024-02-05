
const Footer = () => {
    function handleClick() {
        window.scrollTo(0, 0);

    }
    return (
        <div>
            <footer className=" w-screen bg-neutral-800">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex  md:justify-between">
                        <button
                            onClick={handleClick}
                            className="self-center mb-10 text-xl font-semibold whitespace-nowrap  text-white"
                        >Anukul Saxena</button>
                        <div className="grid grid-cols-2 gap-6 sm:gap-20 sm:grid-cols-3">

                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase  text-white">Find Me</h2>
                                <ul className=" text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://github.com/AnukulSaxena" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/anukul-prakash-saxena/" className="hover:underline">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  order-gray-700 lg:my-8" />

                    <p className="text-sm text-gray-500 text-center  ext-gray-400">© 2024 <a href="https://github.com/AnukulSaxena" className="hover:underline"></a>. All Rights Reserved.
                    </p>


                </div>
            </footer>
        </div>

    )
}

export default Footer