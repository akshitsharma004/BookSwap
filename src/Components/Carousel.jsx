import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Carousel() {
    const data = [
               { name: "Academics and Textbooks" },
               { name: "Action and Adventure" },
               { name: "Horror"},
               { name: "Biographies"},
               { name: "Kids and Children"},
               { name: "Romance"},
               { name: "Business and Economics"},
               { name: "Health and Fitness"},
               { name: "Historical"},
               { name: "Crime, Thriller and Adventure"},
               { name: "Drama"},
               { name: "Poetry"},
               { name: "Academics and Textbooks" },
               { name: "Action and Adventure" },
               { name: "Horror"},
               { name: "Biographies"},
               { name: "Kids and Children"},
               { name: "Romance"},
               { name: "Business and Economics"},
               { name: "Health and Fitness"},
               { name: "Historical"},
               { name: "Crime, Thriller and Adventure"},
               { name: "Drama"},
               { name: "Poetry"},
    ];

    useGSAP(() => {
        gsap.to("#slide1", {
            x: "-50%",
            duration: 120,
            repeat: 1,
            ease: "none",
        });
    });
    useGSAP(() => {
        gsap.from("#slide2", {
            x: "-50%",
            duration: 120,
            repeat: 1,
            ease: "none",
        });
    });

    return (
        <div className="my-6 mx-10 py-6 flex flex-col gap-2 font-medium overflow-hidden">
            <div className="-rotate-2 inline-flex">
                <div id="slide1" className="flex gap-2">
                    {data.map((value, index) => (
                        <div key={index} className="px-8 py-3 bg-orange-400 rounded-full whitespace-nowrap">
                            {value.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="-rotate-2 inline-flex">
                <div id="slide2" className="flex gap-2">
                    {data.map((value, index) => (
                        <div key={index} className="px-8 py-3 bg-orange-400 rounded-full whitespace-nowrap">
                            {value.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
