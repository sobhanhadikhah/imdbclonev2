import React, { useState } from "react";
import { HiUserCircle } from 'react-icons/hi2';
import 'animate.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
    const navbarContext = [
        {
            id: "Popular",
            title: "Popular",
            link: "movies/popular",

        },
        {
            id: "Toprated",
            title: "Top rated",
            link: "movies/top_rated",

        },
        {
            id: "Upcoming",
            title: "Upcoming",
            link: "movies/upcoming",

        }
    ];
    const [navToggle, setnavToggle] = useState(false);
    const handleontogglenav = () => setnavToggle(!navToggle);
    return (
        <nav className="flex items-center sticky mx-auto animate__animated animate__fadeIn max-w-7xl top-0 z-50 justify-between flex-wrap  backdrop-filter backdrop-blur-lg bg-opacity-30  bg-black py-6">
            <div className="flex items-center  flex-shrink-0 text-white mr-6">

                <Link to={`/`} className="font-bold text-black ml-4 bg-yellow-500 rounded-md py-1 px-3  text-xl tracking-tight">IMDB</Link>
            </div>
            <div className="block lg:hidden mr-2 ">
                <button onClick={handleontogglenav} className="flex items-center px-3 py-2 border rounded text-yellow-400 border-yellow-500 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex  lg:items-center lg:w-auto">
                <div className="text-sm font-semibold    lg:flex-grow text-left ">
                    {navToggle === false ? (
                        <>
                            {navbarContext.map(nav => {
                                return (
                                    <Link to={nav.link} key={nav.id} className="hidden mt-4  lg:inline-block lg:mt-0 text-white hover:text-red-500 mr-4">
                                        {nav.title}
                                    </Link>
                                )
                            })}

                        </>
                    ) :
                        (
                            <div className="lg:hidden block   	  my-4 py-2 " >
                                {navbarContext.map(nav => {
                                    return (
                                        <Link to={nav.link} key={nav.id} onClick={handleontogglenav} className="block mt-4 lg:inline-block lg:mt-0 text-white ml-4 hover:text-red-500 mr-4">
                                            {nav.title}
                                        </Link>
                                    )
                                })}
                                <div>
                                    <a href="#"
                                        className="inline-block lg:hidden text-sm px-4 py-2 leading-none ring-2 ring-white hover:ring-yellow-500 rounded-2xl ml-3 text-white border-white hover:border-transparent hover:text-yellow-500 hover:bg-transparent mt-4 lg:mt-0">
                                        Signin
                                    </a>
                                </div>
                            </div>
                        )

                    }

                </div>
                <div>
                    <Link
                        className=" hidden lg:inline-block  text-sm px-4 py-2 leading-none  rounded text-white   hover:text-yellow-500  mt-4 lg:mt-0">
                        <HiUserCircle size={40} />
                    </Link>
                </div>

            </div>
        </nav>
    )
}
export default Navbar