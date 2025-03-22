import React from "react";
import { FaFeather, FaSmile, FaGraduationCap, FaPenNib } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Features() {
    useGSAP(() => {
        gsap.to("#slide1", {
            rotate: 0,  // Rotates back to normal
            scrollTrigger: {
                trigger: "#slide1",
                scroller: "body",
                start: "top 60%",  // Adjusted trigger position
                end: "top 30%",
                scrub: 2,
                
            },
        });
    }, []);
    return (
        <div className="w-full bg-white py-16 px-16 flex items-center justify-center">
            {/* Image Section */}
            <div id="slide1" className="w-1/2 rotate-45 flex justify-center">
                <img
                    
                    src="https://cdn.prod.website-files.com/6687a4a3e0c818b40b02adc7/668e97081174fe395feb489f_Image%2001-p-500.webp"
                    alt="Library"
                    className="w-110 h-120 rounded-2xl object-cover "
                />
            </div>

            {/* Text Section */}
            <div className="w-1/2 flex flex-col gap-8 mt-16 py-8">
                <h2 className="text-5xl font-bold text-black">
                    Book’s Top Features
                </h2>
                <div className="grid grid-cols-2 gap-12 py-12">
                    {/* Feature 1 */}
                    <div className="flex w-[16rem] flex-col items-start text-left">
                        <FaFeather className="text-orange-500 text-xl mb-3" />
                        <h3 className="font-bold text-2xl">Best Quality</h3>
                        <p className="text-gray-600 text-justify w-[20rem] text-sm">
                            Discover a curated collection of literary
                            masterpieces, from timeless classics to modern
                            bestsellers, all crafted with the highest standards
                            of quality and care.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex w-[16rem] flex-col items-start text-left">
                        <FaSmile className="text-orange-500 text-xl mb-3" />
                        <h3 className="font-bold text-2xl">
                            Quick and Friendly
                        </h3>
                        <p className="text-gray-600 text-justify text-sm">
                            Our comprehensive resources provide the latest
                            techniques and trends to help you maximize your
                            reach, engage your audience, and drive growth.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex w-[16rem] flex-col items-start text-left">
                        <FaGraduationCap className="text-orange-500 text-xl mb-3" />
                        <h3 className="font-bold text-2xl">Easy to Learn</h3>
                        <p className="text-gray-600 text-justify text-sm">
                            Our platform offers easy-to-understand resources and
                            guides on a variety of subjects, making learning
                            accessible and enjoyable.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col w-[16rem] items-start text-left">
                        <FaPenNib className="text-orange-500 text-xl mb-3" />
                        <h3 className="font-bold text-2xl">Handwritten</h3>
                        <p className="text-gray-600 text-justify text-sm">
                            Discover a unique collection of handwritten letters,
                            notes, and documents, each telling a personal and
                            authentic story.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
