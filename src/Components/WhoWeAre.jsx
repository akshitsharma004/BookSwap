import React from "react";
import pic1 from "../assets/BookShelves.png";
function WhoWeAre() {
    return (
        <div className="flex  justify-center py-20 bg-black">
            <div className=" flex flex-col gap-5 mt-16 w-[30rem]">
                <h1 className="text-6xl font-bold text-orange-500">
                    <span className="text-white">Who</span> We Are?
                </h1>
                <p className="text-white text-justify mt-10 text-xl">
                    <span className="font-semibold text-orange-500">
                        BookSwap
                    </span>{" "}
                    is an online platform that connects book enthusiasts,
                    allowing them to exchange, lend, or trade books within a
                    trusted community. The platform addresses the common issue
                    of unused books sitting on shelves while others could
                    benefit from them, promoting sustainable practices by
                    encouraging the reuse of books, reducing waste, and making
                    reading more accessible to everyone.
                </p>
                <button className="mt-8 py-2 w-[8rem] text-xl font-semibold rounded-full bg-transparent border border-orange-500 text-white hover:bg-orange-400">
                    Learn
                </button>
            </div>
            <div className=" w-[45rem] h-[30rem]">
                <img className="w-full h-full object-cover" src={pic1} alt="" />
            </div>
        </div>
    );
}

export default WhoWeAre;
