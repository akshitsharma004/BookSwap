import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import bgGif from "../assets/Background.gif";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div
            className="py-12 bg-center  bg-cover h-[100vh]"
            style={{ backgroundImage: `url(${bgGif})`}}
        >
            <div className="my-8 flex flex-col gap-7 items-center">
                <h1 className="w-[60rem] text-6xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-600">
                    You are not done with a book until you pass it to another
                    reader!
                </h1>
                <p className="text-white text-2xl">
                    Welcome to a world where books find new homes, and stories
                    never end.
                </p>
                <Link to="/MainExplore">
                <div className="flex gap-3 items-center rounded-full text-xl bg-white hover:bg-orange-400 text-black px-6 py-4 font-semibold">
                   
                    <p>Explore Books</p>
                    <HiOutlineArrowNarrowRight />
                </div>
                    </Link>
            </div>
        </div>
    );
}

export default Home;
