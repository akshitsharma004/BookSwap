import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Community() {
    return (
        <div className="flex justify-center items-center h-[30rem] bg-black">
            <div className="w-[75rem] rounded-4xl flex justify-center bg-orange-400 px-20 py-16">
                <div className="w-1/2">
                    <h2 className="text-5xl font-bold text-black">Join the community</h2>
                    <p className="mt-2 text-black text-lg">
                        Whether you're seeking advice, networking opportunities, or simply
                        a place to belong, join us and be part of something bigger.
                    </p>

                    {/* Email Input Field */}
                    <div className="mt-6 flex items-center bg-transparent border border-black rounded-full overflow-hidden w-[30rem]">
                        <div className="px-4 text-black">
                            <FaEnvelope />
                        </div>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent text-black placeholder-black flex-1 py-3 px-2 outline-none"
                        />
                        <button className="bg-black text-white font-semibold px-6 py-3 rounded-full">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;
