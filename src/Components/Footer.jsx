import React from "react";

function Footer() {
    return (
        <div className="w-full bg-gradient-to-b bg-black text-white py-12 shadow-2xl">
            {/* Top Section */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 gap-8">
                {/* Contact Info */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 drop-shadow-md">
                            032 9844
                        </h1>
                        <p className="text-lg text-gray-400 max-w-xs text-center md:text-left">
                            (callable from any national network, fixed or mobile)
                        </p>
                    </div>
                    {/* Social Media Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
                            <button
                                key={platform}
                                className="px-5 py-2 border-2 rounded-full border-orange-500 text-orange-500 
                                hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-md"
                            >
                                {platform}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Logo & About */}
                <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
                        Book<span className="text-orange-500">Swap</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                        Join a community of book lovers making reading accessible and sustainable. 
                        Swap books, discover new stories, and reduce waste—all in one place.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-t border-orange-500 my-8"></hr>

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between text-gray-500 text-sm px-6 md:px-16">
                <p>© 2025 BookSwap. All rights reserved.</p>
                <p className="hover:text-yellow-400 transition-all duration-200 cursor-pointer">
                    Privacy Policy | Terms of Service
                </p>
            </div>
        </div>
    );
}

export default Footer;
