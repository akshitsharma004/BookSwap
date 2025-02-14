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
        <div className="px-28 bg-black items-center overflow-hidden justify-center py-28 text-white flex gap-28">
            <div>
                <img id="slide2" src={pic1} alt="" />
            </div>
            <div className="flex flex-col gap-10">
                <h1 className="text-6xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-white via-orange-500 to-yellow-700">
                    Why Choose BookSwap?
                </h1>

               {data.map((item,index)=>(
                 <div key={index} id="slide1" className="border w-[40rem] px-4 py-8 rounded-md border-yellow-600">
                 <h1 className="text-4xl text-yellow-600">{item.heading}</h1>
                 <p className="text-xl py-2 ">
                     {item.para}
                 </p>
             </div>
               ))}
                <Link to="/MainWhyToExchange">
                <button className="mt-8 py-4 w-[10rem]  text-xl font-semibold rounded-full bg-transparent border border-orange-500 hover:bg-orange-400">
                Why
                    
                </button>
                </Link>
            </div>
        </div>
    );
}

export default HomeSecond;
