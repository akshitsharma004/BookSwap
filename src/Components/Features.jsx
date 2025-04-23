import React from "react";
import { FaFeather, FaSmile, FaGraduationCap, FaPenNib } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Features() {
    useGSAP(() => {
        gsap.to("#slide1", {
            rotate: 0,
            duration: 10,
            scrollTrigger: {
                trigger: "#slide1",
                scroller: "body",
                start: "top 60%",
                end: "top 30%",
                scrub: 2,
            },
        });
    }, []);

    const featuresData = [
        {
            icon: <FaFeather className="text-orange-500 text-xl mb-3" />,
            title: "Best Quality",
            description:
                "Discover a curated collection of literary masterpieces, from timeless classics to modern bestsellers, all crafted with the highest standards of quality and care.",
        },
        {
            icon: <FaSmile className="text-orange-500 text-xl mb-3" />,
            title: "Quick and Friendly",
            description:
                "Our comprehensive resources provide the latest techniques and trends to help you maximize your reach, engage your audience, and drive growth.",
        },
        {
            icon: <FaGraduationCap className="text-orange-500 text-xl mb-3" />,
            title: "Easy to Learn",
            description:
                "Our platform offers easy-to-understand resources and guides on a variety of subjects, making learning accessible and enjoyable.",
        },
        {
            icon: <FaPenNib className="text-orange-500 text-xl mb-3" />,
            title: "Handwritten",
            description:
                "Discover a unique collection of handwritten letters, notes, and documents, each telling a personal and authentic story.",
        },
    ];

    return (
        <div className="bg-white my-32 px-28 flex flex-col items-center justify-center">
            <div className="flex items-center gap-24">
                {/* Image Section */}
                <div id="slide1" className="rotate-45">
                    <img
                        src="https://cdn.prod.website-files.com/6687a4a3e0c818b40b02adc7/668e97081174fe395feb489f_Image%2001-p-500.webp"
                        alt="Library"
                        className="w-[22rem] h-[22rem] rounded-2xl object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-8 mt-8 lg:mt-0">
                    <h2 className="text-5xl font-bold text-black">
                        Book’s Top Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-8">
                        {featuresData.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start text-left"
                            >
                                {feature.icon}
                                <h3 className="font-bold text-2xl">
                                    {feature.title}
                                </h3>
                                <p className="w-[23rem] text-gray-600 text-justify text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
