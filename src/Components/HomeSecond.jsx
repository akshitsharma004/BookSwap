import React from "react";
import pic1 from "../assets/HomeSecond.png";
import pic2 from "../assets/LoginImage.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomeSecond() {
    const data = [
        { heading: " Simple", para: "Give 1. Take 1. Read. Enjoy an easy and seamless book exchange experience." },
        { heading: " Savings", para: "Save money, shelf space, and the environment by swapping books instead of buying new ones." },
        { heading: " Social", para: "Connect with fellow readers, explore new genres, and share your favorite books effortlessly." },
        { heading: " Sustainable", para: "Reduce paper waste by giving books a second life. Every exchange supports a greener planet." },
        { heading: " Unlimited Reads", para: "With BookSwap, you’ll never run out of books to read! Swap as often as you want." },
    ];
    // useGSAP(() => {
    //     gsap.to("#slide1", {
    //         x: "20%",
    //         duration: 3,
    //         repeat: 1,
    //         stagger: 1,
    //         ease: "none",
    //     });
    // });
    // useGSAP(() => {
    //     gsap.from("#slide2", {
    //         x: "-100%",
    //         duration: 3,
    //         repeat: 1,
    //         ease: "none",
    //     });
    // });
    const [openIndex, setOpenIndex] = useState(null);

    
    return (
        <div className="bg-black overflow-hidden py-28 text-white flex justify-between">
            <div>
                <img id="" src={pic2} alt="" />
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="px-8 text-6xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-700">
                <span className="text-white">Why Choose</span>  BookSwap?
                </h1>
                <div className="mt-12 flex  flex-col gap-5">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            id="slide1"
                            className="border w-[40rem]  px-7 py-5 rounded-xl border-yellow-600"
                        >  
                        <div className="flex justify-between  items-center">
                            <h1 className="text-2xl font-semibold text-yellow-600 ">
                                {item.heading}
                            </h1>
                            <span className="cursor-pointer transition-all ease-in-out duration-500" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </span>
                    </div>
                    <div
                        className={`overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}
                    >
                        <p className="py-2 transition-opacity duration-700 ease-in-out">{item.para}</p>
                    </div>
                </div>
                    ))}
                </div>
                <Link to="/MainWhyToExchange">
                    <button className="mt-8 py-4 w-[10rem] text-xl font-semibold rounded-full bg-transparent border border-orange-500 hover:bg-orange-400">
                        Why
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomeSecond;
