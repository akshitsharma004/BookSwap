import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LatestNews() {
    const data1 = [
        {
            heading: "Simple",
            paragraph:
                "Bookxchange is a simple to use platform that is easy for booklovers of all age groups to discover the joy of reading. Just give one and you can take one we have, and then enjoy reading. Be the smart aleck – exchange in easy steps.",
        },
        {
            heading: "Save",
            paragraph:
                "Bookxchange is a social commerce enterprise where booklovers share their treasures. At bookxchange you only have to pay for shipping – reducing the cost of a book to a fraction of its original cost. Be the miser - save money when you exchange.",
        },
        {
            heading: "Socialise",
            paragraph:
                "Rediscover the joy of sharing, and socialising with books. Any book in your collection, could be on someone else's 'must read' list. A unique opportunity to give your books a new lease of life... let them fly. Be the socialist – share your treasures when you exchange.",
        },
        {
            heading: "Convenient",
            paragraph:
                "No more stepping out to buy books... we pick up and deliver the books at your doorstep. We will do the leg work for you. Be the eco warrior - save trees when you exchange.",
        },
        {
            heading: "Less Carbon Footprint",
            paragraph:
                "Let’s leave a lasting legacy and not more carbon footprint! The more we recycle and exchange we not only reduce the stress on our forests, but also earn good karma by sharing what we have. Be the legend – leave a clean footprint when you exchange.",
        },
        {
            heading: "Less for More",
            paragraph:
                "Classics, best sellers and even some rare books that cost a fortune are here at bookxchange for you. Just exchange your old ‘well-read’ books by just paying for shipping. Fortune at a fraction...go for it. Be the bounty hunter – gather treasures when you exchange.",
        },
        {
            heading: "Less Cluster",
            paragraph:
                "Less clutter means more space. Where space is a premium, by proactively exchanging your books you not only save space but also avoid clutter. Be the minimalist – clean your house when you exchange.",
        },
        {
            heading: "Less Paper...more trees",
            paragraph:
                "The best way to save the environment is to plant a tree - the next best way is to save a tree from being cut. Research shows that we save one tree for every 65 books recycled. Be the eco warrior - save trees when you exchange.",
        },
        {
            heading: "Discover New Reads",
            paragraph:
                "Swapping introduces you to books you might not have picked up otherwise. It’s a great way to explore different genres and authors recommended by fellow readers.",
        },
    ];

    const data2 = [
        {
            heading: "Convenient",
            paragraph:
                "No more stepping out to buy books... we pick up and deliver the books at your doorstep. We will do the leg work for you. Be the eco warrior - save trees when you exchange.",
        },
        {
            heading: "Less Carbon Footprint",
            paragraph:
                "Let’s leave a lasting legacy and not more carbon footprint! The more we recycle and exchange we not only reduce the stress on our forests, but also earn good karma by sharing what we have. Be the legend – leave a clean footprint when you exchange.",
        },
        {
            heading: "Less Cluster",
            paragraph:
                "Less clutter means more space. Where space is a premium, by proactively exchanging your books you not only save space but also avoid clutter. Be the minimalist – clean your house when you exchange.",
        },
        {
            heading: "Less Paper...more trees",
            paragraph:
                "The best way to save the environment is to plant a tree - the next best way is to save a tree from being cut. Research shows that we save one tree for every 65 books recycled. Be the eco warrior - save trees when you exchange.",
        },
        {
            heading: "Less for More",
            paragraph:
                "Classics, best sellers and even some rare books that cost a fortune are here at bookxchange for you. Just exchange your old ‘well-read’ books by just paying for shipping. Fortune at a fraction...go for it. Be the bounty hunter – gather treasures when you exchange.",
        },
        {
            heading: "Simple",
            paragraph:
                "Bookxchange is a simple to use platform that is easy for booklovers of all age groups to discover the joy of reading. Just give one and you can take one we have, and then enjoy reading. Be the smart aleck – exchange in easy steps.",
        },
        {
            heading: "Save",
            paragraph:
                "Bookxchange is a social commerce enterprise where booklovers share their treasures. At bookxchange you only have to pay for shipping – reducing the cost of a book to a fraction of its original cost. Be the miser - save money when you exchange.",
        },
        {
            heading: "Socialise",
            paragraph:
                "Rediscover the joy of sharing, and socialising with books. Any book in your collection, could be on someone else's 'must read' list. A unique opportunity to give your books a new lease of life... let them fly. Be the socialist – share your treasures when you exchange.",
        },
        
        {
            heading: "Discover New Reads",
            paragraph:
                "Swapping introduces you to books you might not have picked up otherwise. It’s a great way to explore different genres and authors recommended by fellow readers.",
        },
    ];

    const data3 = [
        {
            heading: "Less Cluster",
            paragraph:
                "Less clutter means more space. Where space is a premium, by proactively exchanging your books you not only save space but also avoid clutter. Be the minimalist – clean your house when you exchange.",
        },
        {
            heading: "Less Paper...more trees",
            paragraph:
                "The best way to save the environment is to plant a tree - the next best way is to save a tree from being cut. Research shows that we save one tree for every 65 books recycled. Be the eco warrior - save trees when you exchange.",
        },
        {
            heading: "Discover New Reads",
            paragraph:
                "Swapping introduces you to books you might not have picked up otherwise. It’s a great way to explore different genres and authors recommended by fellow readers.",
        },
        {
            heading: "Simple",
            paragraph:
                "Bookxchange is a simple to use platform that is easy for booklovers of all age groups to discover the joy of reading. Just give one and you can take one we have, and then enjoy reading. Be the smart aleck – exchange in easy steps.",
        },
        {
            heading: "Convenient",
            paragraph:
                "No more stepping out to buy books... we pick up and deliver the books at your doorstep. We will do the leg work for you. Be the eco warrior - save trees when you exchange.",
        },
        {
            heading: "Less Carbon Footprint",
            paragraph:
                "Let’s leave a lasting legacy and not more carbon footprint! The more we recycle and exchange we not only reduce the stress on our forests, but also earn good karma by sharing what we have. Be the legend – leave a clean footprint when you exchange.",
        },
        {
            heading: "Less for More",
            paragraph:
                "Classics, best sellers and even some rare books that cost a fortune are here at bookxchange for you. Just exchange your old ‘well-read’ books by just paying for shipping. Fortune at a fraction...go for it. Be the bounty hunter – gather treasures when you exchange.",
        },
        {
            heading: "Save",
            paragraph:
                "Bookxchange is a social commerce enterprise where booklovers share their treasures. At bookxchange you only have to pay for shipping – reducing the cost of a book to a fraction of its original cost. Be the miser - save money when you exchange.",
        },
        {
            heading: "Socialise",
            paragraph:
                "Rediscover the joy of sharing, and socialising with books. Any book in your collection, could be on someone else's 'must read' list. A unique opportunity to give your books a new lease of life... let them fly. Be the socialist – share your treasures when you exchange.",
        },
        
    ];

    useGSAP(() => {
        gsap.to(".slider1", {
            y: "-51%",
            duration: 20,
            repeat: -1,
            // stagger: 0.1,
            ease: "none",
        });
    });

    useGSAP(() => {
        gsap.to(".slider2", {
            y: "-48%",
            duration: 28,
            repeat: -1,
            // stagger: 0.1,
            ease: "none",
        });
    });

    useGSAP(() => {
        gsap.to(".slider3", {
            y: "-45%",
            duration: 23,
            repeat: -1,
            // stagger: 0.1,
            ease: "none",
        });
    });

    return (
        <div className=" px-16 h-[60rem] bg-black py-10 text-white overflow-hidden">
            <h1 className="text-6xl text-orange-500 font-bold flex justify-center mb-24">
                Why to Exchange Books?
            </h1>

            <div className="flex justify-center gap-10 overflow-hidden">
                <div className="slider1 w-[30rem]">
                    <div className="flex flex-col gap-8 mb-8">
                        {data1.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 border rounded-xl border-zinc-500 bg-black"
                            >
                                <h1 className="text-3xl text-yellow-500 font-semibold mb-4">
                                    {item.heading}
                                </h1>
                                <p className="text-xl">{item.paragraph}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8">
                        {data1.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 border rounded-xl border-zinc-500 bg-black"
                            >
                                <h1 className="text-3xl text-yellow-500 font-semibold mb-4">
                                    {item.heading}
                                </h1>
                                <p className="text-xl">{item.paragraph}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider2 w-[30rem]">
                    <div className="flex flex-col gap-8 mb-8">
                        {data2.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 border rounded-xl border-zinc-500 bg-black"
                            >
                                <h1 className="text-3xl text-yellow-500 font-semibold mb-4">
                                    {item.heading}
                                </h1>
                                <p className="text-xl">{item.paragraph}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8">
                        {data2.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 border rounded-xl border-zinc-500 bg-black"
                            >
                                <h1 className="text-3xl text-yellow-500 font-semibold mb-4">
                                    {item.heading}
                                </h1>
                                <p className="text-xl">{item.paragraph}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="slider3 w-[30rem]">
                    <div className="flex flex-col gap-8 mb-8">
                        {data3.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 border rounded-xl border-zinc-500 bg-black"
                            >
                                <h1 className="text-3xl text-yellow-500 font-semibold mb-4">
                                    {item.heading}
                                </h1>
                                <p className="text-xl">{item.paragraph}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-8">
                        {data3.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 border rounded-xl border-zinc-500 bg-black"
                            >
                                <h1 className="text-3xl text-yellow-500 font-semibold mb-4">
                                    {item.heading}
                                </h1>
                                <p className="text-xl">{item.paragraph}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}