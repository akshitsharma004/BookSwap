import React from "react";

const contentData = [
    {
        title: "Sign-Up and Book Listing",
        text: "A BookSwap platform allows users to exchange books with others, making it an affordable and sustainable way to discover new reads. Users start by signing up and creating a profile where they list books they own and are willing to swap. They can also specify books they are looking for, making it easier to find matches."
    },
    {
        title: "Browsing and Swap Requests",
        text: "Once books are listed, users can browse or search based on title, author, or genre. When they find a book they want, they send a swap request to the owner. Some platforms use a credit system, where giving away books earns points that can be used to request books from others, ensuring fair exchanges."
    },
    {
        title: "Exchange Process",
        text: "After a swap request is accepted, the two users decide on the method of exchange. They can either meet in person or ship the book, with some platforms offering prepaid shipping labels for convenience. Once the book is received, the recipient confirms the exchange, and users can leave reviews or ratings to build trust within the community."
    },
    {
        title: "Community and Fairness",
        text: "Some BookSwap platforms facilitate direct one-on-one trades, while others use a third-party system to ensure fairness. The entire process encourages a community-driven approach to reading, reducing waste and making books more accessible to everyone."
    }
];

const HowWeWork = () => {
    return (
        <div className="bg-orange-400 p-8">
            <div className="bg-black rounded-2xl p-12 flex">
                <div className="w-2/3 px-6 py-6 relative">
                    {contentData.map((section, index) => (
                        <div key={index} className="mb-8 sticky top-2">
                            <h2 className="text-4xl font-bold text-white mb-4">{section.title}</h2>
                            <p className="text-gray-200 text-lg w-[30rem] leading-relaxed text-justify">
                                {section.text}
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="w-2/3 flex flex-col items-center">
                    <h2 className="text-6xl font-bold text-white mb-4"><span className="text-orange-400">How</span> We Work ?</h2>
                    <img
                        src="https://i.pinimg.com/474x/0a/e7/85/0ae78593f5f03df94e4e5a394d0ec8f6.jpg"
                        alt="BookSwap UI"
                        className="rounded-lg  h-[37rem] mt-10 w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
