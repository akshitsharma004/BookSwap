import React from "react";
import pic1 from "../assets/LoginImage.png";
import pic2 from "../assets/Cat.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
function Exchange() {
   useGSAP(()=> {
          gsap.from("#cat",{
            x: "100%",
            duration: 5,
          })
   })
    return (
        <div className="flex overflow-hidden">
            <img src={pic1} alt="" />
            <div className="bg-black py-20 flex flex-col text-white items-center w-full gap-32">
                <h1 className="text-5xl font-semibold">
                    <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-300 to-orange-500">
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
