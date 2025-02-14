import React from "react";

function Footer() {
    return (
        <div className="flex flex-col mt-28 mx-32">
            <div className="flex items-center justify-between px-10 py-16">
                <div className="flex flex-col  gap-8">
                    <div className="flex gap-5">
                        <h1 className="text-6xl font-medium">032 9844</h1>
                        <div className="w-[15rem]">
                            <p className="text-xl text-[#DECCD3]">
                                (callable from any national network, fixed or
                                mobile)
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-orange-400">
                            Facebbok
                        </button>
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-orange-400">
                            Twitter
                        </button>
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-orange-400">
                            Instagram
                        </button>
                        <button className="px-6 py-3 border-2 rounded-full border-[#F0B8AB] hover:bg-orange-400">
                            LinkedIn
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-10 font-semibold  ">
                    <h1 className="text-7xl text-black">Book<span className="text-orange-400">Swap</span></h1>
                    <p className="w-[25rem]">
                        We are a group of book lovers and our endeavor has
                        always been to come up with world class products in the
                        books and publishing space.
                    </p>
                </div>
            </div>
            <hr className=" border-[#F0B8AB]"></hr>
            <div className="flex justify-between font-semibold"></div>
        </div>
    );
}

export default Footer;
