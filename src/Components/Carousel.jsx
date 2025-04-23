import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Carousel() {
    const data = [
        { name: "Academics and Textbooks" },
        { name: "Action and Adventure" },
        { name: "Horror" },
        { name: "Biographies" },
        { name: "Kids and Children" },
        { name: "Romance" },
        { name: "Business and Economics" },
        { name: "Health and Fitness" },
        { name: "Historical" },
        { name: "Crime, Thriller and Adventure" },
        { name: "Drama" },
        { name: "Poetry" },
        { name: "Academics and Textbooks" },
        { name: "Action and Adventure" },
        { name: "Horror" },
        { name: "Biographies" },
        { name: "Kids and Children" },
        { name: "Romance" },
        { name: "Business and Economics" },
        { name: "Health and Fitness" },
        { name: "Historical" },
        { name: "Crime, Thriller and Adventure" },
        { name: "Drama" },
        { name: "Poetry" },
    ];

    useGSAP(() => {
        gsap.to("#slide10", {
            x: "-50%",
            duration: 120,
            repeat: 1,
            ease: "none",
        });
    });
    useGSAP(() => {
        gsap.from("#slide20", {
            x: "-50%",
            duration: 120,
            repeat: 1,
            ease: "none",
        });
    });

    return (
        <div
            style={{
                background:
                    "linear-gradient(to bottom, white 0%, #d4d4d8 25%, #52525b 60%, #18181b 85%, black 100%)",
            }}
            className="py-12 flex flex-col gap-3 font-medium overflow-hidden"
        >
            <div className="-rotate-3 inline-flex">
                <div id="slide10" className="flex gap-2">
                    {data.map((value, index) => (
                        <div
                            key={index}
                            className="px-8 py-3 bg-orange-400 rounded-full whitespace-nowrap"
                        >
                            {value.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="-rotate-3 inline-flex">
                <div id="slide20" className="flex gap-2">
                    {data.map((value, index) => (
                        <div
                            key={index}
                            className="px-8 py-3 bg-orange-400 rounded-full whitespace-nowrap"
                        >
                            {value.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
