import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pic1 from "../assets/Book.png";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
    {
        title: "Sign-Up and Book Listing",
        text: "A BookSwap platform allows users to exchange books with others, making it an affordable and sustainable way to discover new reads. Users start by signing up and creating a profile where they list books they own and are willing to swap. They can also specify books they are looking for, making it easier to find matches.",
    },
    {
        title: "Browsing and Swap Requests",
        text: "Once books are listed, users can browse or search based on title, author, or genre. When they find a book they want, they send a swap request to the owner. Some platforms use a credit system, where giving away books earns points that can be used to request books from others, ensuring fair exchanges.",
    },
    {
        title: "Exchange Process",
        text: "After a swap request is accepted, the two users decide on the method of exchange. They can either meet in person or ship the book, with some platforms offering prepaid shipping labels for convenience. Once the book is received, the recipient confirms the exchange, and users can leave reviews or ratings to build trust within the community.",
    },
    {
        title: "Community and Fairness",
        text: "Some BookSwap platforms facilitate direct one-on-one trades, while others use a third-party system to ensure fairness. The entire process encourages a community-driven approach to reading, reducing waste and making books more accessible to everyone.",
    },
];

export default function HowWeWork() {
    useGSAP(() => {
        gsap.to("#scrollBar", {
            y: 795,
            ease: "sine.out",
            scrollTrigger: {
                trigger: "#scrollBarMain",
                scroller: "body",
                start: "top 40%",
                end: "bottom 50%",
                scrub: 1,
            },
        });

        contentData.forEach((_, index) => {
            gsap.set(`#heading-${index}`, { color: "#ffffff" });
            gsap.set(`#description-${index}`, { color: "#bfbfbf" });

            gsap.to(`#heading-${index}`, {
                color: "#FF8904",
                ease: "sine.out",
                scrollTrigger: {
                    trigger: `#heading-${index}`,
                    scroller: "body",
                    start: "top 70%",
                    end: "top 60%",
                    scrub: 1,
                },
            });
        });
    });

    return (
        <div className="relative p-20 bg-black">
            <div className="border rounded-2xl border-orange-400 p-20">
                <div className="flex flex-col items-end right-0">
                    <div className="flex text-[3rem] font-semibold tracking-tight">
                        <h2 className="text-6xl font-bold text-white mb-4">
                            <span className="text-orange-400">How</span> We
                            Work?
                        </h2>
                    </div>
                </div>

                <div
                    id="scrollBarMain"
                    className="relative flex gap-10 justify-between pt-10 pb-20"
                >
                    <div className="flex">
                        <div className="relative border-[2.5px] border-white h-[70rem] flex justify-center">
                            <div
                                id="scrollBar"
                                className="absolute border-[2.5px] border-orange-400 h-[10rem]"
                            ></div>
                        </div>

                        <div className="flex flex-col gap-24 pl-10">
                            {contentData.map((section, index) => (
                                <div key={index}>
                                    <div className="w-[35rem] text-gray-300">
                                        <h5
                                            id={`heading-${index}`}
                                            className="text-4xl font-bold pb-6 text-white"
                                        >
                                            {section.title}
                                        </h5>
                                        <p
                                            id={`description-${index}`}
                                            className="text-lg leading-relaxed"
                                        >
                                            {section.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img
                        src="https://i.pinimg.com/474x/0a/e7/85/0ae78593f5f03df94e4e5a394d0ec8f6.jpg"
                        alt="Book UI"
                        className="sticky top-20 w-[45rem] h-[35rem] rounded-3xl border border-orange-400"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
}
