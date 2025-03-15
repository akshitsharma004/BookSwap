import React from "react";
import pic1 from "../assets/BookShelves.png";
function WhoWeAre() {
    return (
        <div className="flex justify-between py-10 bg-black">
            <div className="mx-20 py-24 flex flex-col gap-5 w-[40rem]">
                <h1 className="text-6xl font-bold text-orange-500">
                    <span className="text-White">Who</span> We Are?
                </h1>
                <p className="text-white mt-10 text-xl">
                    <span className="font-semibold text-orange-500">BookSwap</span> is an online platform that connects book
                    enthusiasts, allowing them to exchange, lend, or trade books
                    within a trusted community. The platform addresses the
                    common issue of unused books sitting on shelves while others
                    could benefit from them, promoting sustainable practices by
                    encouraging the reuse of books, reducing waste, and making
                    reading more accessible to everyone.
                </p>
                <button className="mt-8 py-2 w-[8rem] text-xl font-semibold rounded-full bg-transparent border border-orange-500 text-white hover:bg-orange-400">Learn</button>
            </div>
            <div className="px-10">
                <img className="h-[35rem] w-[65rem]" src={pic1} alt="" />
            </div>
        </div>
    );
}

export default WhoWeAre;
