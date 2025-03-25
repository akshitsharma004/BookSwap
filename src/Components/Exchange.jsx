import React from "react";
import pic1 from "../assets/LoginImage.png";
import pic2 from "../assets/Cat.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function Exchange() {
   useGSAP(()=> {
          gsap.from("#slide1",{
            y: "-100%",
            duration: 2,
          })
   })
    return (
        <div className="flex overflow-hidden">
            <img src={pic1} alt="" />
            <div className="bg-black py-20 flex flex-col text-center text-white items-center w-full gap-32">
                <h1 id="slide1" className="text-5xl font-semibold">
                    <span className=" font-semibold text-orange-400">
                        {" "}
                        Exchange your books{" "}
                    </span>
                    with anyone worldwide!
                </h1>
                <img
                    id="cat"
                    className="h-[25rem] w-[35rem] "
                    src={pic2}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Exchange;
