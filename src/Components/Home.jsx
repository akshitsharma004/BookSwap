import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import bgGif from "../assets/Background.gif";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div
            className="h-screen flex justify-center bg-cover bg-center px-6"
            style={{ backgroundImage: `url(${bgGif})` }}
        >
            <div className="text-center mt-12 max-w-4xl flex flex-col items-center gap-6">
                <h1 className="text-6xl w-[80rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-600">
                    The Book Lover's Dreamland Awaits!
                </h1>
                <p className="text-white w-[60rem] text-xl">
                    Welcome to the ultimate book lover's paradise! Join our community and contribute to the ever-evolving library of stories, where every book has a chance to inspire someone new.
                </p>
                <Link to="/MainExplore">
                    <div className="flex items-center gap-3 text-xl bg-white hover:bg-yellow-600 hover:text-white transition-all duration-300 text-black px-6 py-3 rounded-full font-semibold shadow-lg">
                        <p>Explore Books</p>
                        <HiOutlineArrowNarrowRight />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
