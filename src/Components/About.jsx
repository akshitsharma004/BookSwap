import React from "react";
import pic1 from "../assets/About.png";
import pic2 from "../assets/Book.png";

function About() {
    const data = [
        {
            heading: "1. List Your Books  ",
            paragraph:
                "Have books you’ve already read or no longer need? Simply upload the details, including the book’s title, author, condition, and a brief description. Adding images can help attract more interest. The more books you list, the better your chances of finding a great swap!",
        },
        {
            heading: "2. Browse Available Books ",
            paragraph:
                "Looking for your next great read? Explore a diverse collection of books listed by other users. Use filters to search by genre, author, or availability in your area. Bookmark books you’re interested in and keep an eye out for new additions.",
        },
        {
            heading: "3. Connect & Swap ",
            paragraph:
                "Found a book you love? Send a swap request to the owner and arrange a convenient way to exchange. You can chat within the platform to coordinate pickup, delivery, or even a local book meet-up. Some users might also offer mail swaps for added flexibility.",
        },
        {
            heading: "4. Enjoy & Repeat ",
            paragraph:
                "Once you've received your book, dive into a new story and enjoy the read! When you're done, you can return it, swap it for another book, or list it back on the platform to keep the cycle going. The more you swap, the more books you get to explore all without spending extra money!",
        },
    ];
    return (
        <div className="bg-black text-white">
            <img className="w-full" src={pic1} alt="" />
            <div className="px-28 py-10">
                <h1 className="text-4xl font-semibold text-yellow-600">
                    About Us
                </h1>
                <p className="font-semibold text-xl py-10 w-[90rem] leading-relaxed">
                    Welcome to BookSwap, your trusted source for a diverse range
                    of books catering to every reader's taste. Established with
                    the mission to foster a love for reading in our community,
                    we pride ourselves on providing excellent service and a wide
                    selection of books. Whether you're looking to declutter your
                    shelves or find your next great read, BookSwap connects you
                    with like-minded readers in your community.
                </p>
            </div>
            <div className="flex justify-between py-24">
                <div>
                    <img
                        className="absolute ml-[259px] mt-44"
                        src={pic2}
                        alt=""
                    />
                </div>
                <div className="h-[60rem] w-[75rem] bg-white items-center flex flex-col">
                    <h1 className="text-6xl mt-24 font-semibold text-orange-400">
                        How It Works?
                    </h1>

                    {data.map((item, index) => (
                        <div key={item} className="mt-10 ml-32 flex flex-col w-[45rem]">
                            <h1 className="text-3xl text-yellow-500 font-semibold">
                                {item.heading}
                            </h1>
                            <p className="text-xl px-7 text-black font-semibold">
                                {item.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
