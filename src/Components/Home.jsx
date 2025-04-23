import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import bgGif from "../assets/Background.gif";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
    // useGSAP(() => {
    //     gsap.from("#slide1", {
    //         x: "50%",
    //         duration: 3,
    //         // repeat: 1,
    //         stagger: 1,
    //         ease: "none",
    //     });
    // });
    // useGSAP(() => {
    //     gsap.from("#slide2", {
    //         x: "-50%",
    //         duration: 3,
    //         // repeat: 1,
    //         stagger: 1,
    //         ease: "none",
    //     });
    // });
    
    // useGSAP(() => {
    //     gsap.from("#slide3", {
    //         y: "10%",
    //         duration: 1,
    //         // repeat: 1,
    //         stagger: 1,
    //         ease: "none",
    //     });
    // });
    return (
        <div
        id="slide3"
            className="h-screen flex justify-center bg-cover bg-center px-6"
            style={{ backgroundImage: `url(${bgGif})` }}
        >
            <div className="text-center mt-12 max-w-4xl flex flex-col items-center gap-6">
                <h1
                    id=""
                    className="text-6xl w-[80rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-600"
                >
                    The Book Lover's Dreamland Awaits!
                </h1>
                <p id="" className="text-white w-[60rem] text-xl">
                    Welcome to the ultimate book lover's paradise! Join our
                    community and contribute to the ever-evolving library of
                    stories, where every book has a chance to inspire someone
                    new.
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
