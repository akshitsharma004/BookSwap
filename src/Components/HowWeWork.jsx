import React from "react";

const HowWeWork = () => {
    return (
        <div className="bg-orange-400 p-8">
            <div className="bg-black rounded-2xl h-[60rem] shadow-xl p-12 flex gap-12 ">
                <div className="w-2/3 pr-6">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Sign-Up and Book Listing
                    </h2>
                    <p className="text-gray-200 text-lg w-[35rem] leading-relaxed text-justify">
                        A BookSwap platform allows users to exchange books with
                        others, making it an affordable and sustainable way to
                        discover new reads. Users start by signing up and
                        creating a profile where they list books they own and
                        are willing to swap. They can also specify books they
                        are looking for, making it easier to find matches.
                    </p>

                    <h2 className="text-4xl font-bold text-white mt-8 mb-4">
                        Browsing and Swap Requests
                    </h2>
                    <p className="text-gray-200 text-lg w-[35rem] leading-relaxed text-justify">
                        Once books are listed, users can browse or search based
                        on title, author, or genre. When they find a book they
                        want, they send a swap request to the owner. Some
                        platforms use a credit system, where giving away books
                        earns points that can be used to request books from
                        others, ensuring fair exchanges.
                    </p>

                    <h2 className="text-4xl font-bold text-white mt-8 mb-4">
                        Exchange Process
                    </h2>
                    <p className="text-gray-200 text-lg w-[35rem] leading-relaxed text-justify">
                        After a swap request is accepted, the two users decide
                        on the method of exchange. They can either meet in
                        person or ship the book, with some platforms offering
                        prepaid shipping labels for convenience. Once the book
                        is received, the recipient confirms the exchange, and
                        users can leave reviews or ratings to build trust within
                        the community.
                    </p>

                    <h2 className="text-4xl font-bold text-white mt-8 mb-4">
                        Community and Fairness
                    </h2>
                    <p className="text-gray-200 text-lg w-[35rem] leading-relaxed text-justify">
                        Some BookSwap platforms facilitate direct one-on-one
                        trades, while others use a third-party system to ensure
                        fairness. The entire process encourages a
                        community-driven approach to reading, reducing waste and
                        making books more accessible to everyone.
                    </p>
                </div>

                <div className="w-2/3  flex flex-col items-center">
                    <h2 className="text-5xl font-bold text-white mb-4">How We Work</h2>
                    <img
                        src="https://i.pinimg.com/474x/0a/e7/85/0ae78593f5f03df94e4e5a394d0ec8f6.jpg"
                        alt="BookSwap UI"
                        className="rounded-lg shadow-lg h-2/3 mt-10 w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
