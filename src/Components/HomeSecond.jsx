import React from "react";
import pic1 from "../assets/HomeSecond.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

function HomeSecond() {
    const data = [
        {heading:"Simple",para:"Give 1 Take 1 Read."},
        {heading:"Savings",para:"Socialises Cost. Saves Space. Keep reading newer titles just for the cost of shipping."},
        {heading:"Social",para:"Connect readers to Books lying idle in every home."},
    ];
    useGSAP(() => {
        gsap.from("#slide1", {
            x: "100%",
            duration: 3,
            repeat: 1,
            stagger: 1,
            ease: "none",
        });
    });
    useGSAP(() => {
        gsap.from("#slide2", {
            x: "-100%",
            duration: 3,
            repeat: 1,
            ease: "none",
        });
    });
    return (
        <div className="max-w-screen-5xl mx-auto px-8 md:px-28 bg-black flex flex-col md:flex-row items-center justify-center py-28 text-white gap-10 md:gap-28 overflow-hidden">
            <div className="w-full max-w-md md:max-w-lg">
                <img id="slide2" className="w-full object-cover" src={pic1} alt="Why Choose BookSwap?" />
            </div>
            <div className="flex flex-col gap-10 w-full max-w-md md:max-w-2xl">
                <h1 className="text-4xl md:text-5xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-white via-orange-500 to-yellow-700 text-center md:text-left">
                    Why Choose BookSwap?
                </h1>

                {data.map((item, index) => (
                    <div key={index} id="slide1" className="border w-full hover:bg-yellow-600 px-4 py-8 rounded-md border-yellow-600">
                        <h1 className="text-2xl md:text-4xl text-yellow-600 hover:text-white">{item.heading}</h1>
                        <p className="text-lg md:text-xl py-2 ">{item.para}</p>
                    </div>
                ))}
                <Link to="/MainWhyToExchange" className="self-center md:self-start">
                    <button className="mt-8 py-4 w-40 text-xl font-semibold rounded-full bg-transparent border border-orange-500 hover:bg-orange-400">
                        Why
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomeSecond;
