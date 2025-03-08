import React from "react";
import pic1 from "../assets/About.png";
import pic2 from "../assets/Book.png";

function About() {
    const data = [
        {
            heading: "1. List Your Books",
            paragraph:
                "Have books you’ve already read or no longer need? Simply upload the details, including the book’s title, author, condition, and a brief description. Adding images can help attract more interest. The more books you list, the better your chances of finding a great swap!",
        },
        {
            heading: "2. Browse Available Books",
            paragraph:
                "Looking for your next great read? Explore a diverse collection of books listed by other users. Use filters to search by genre, author, or availability in your area. Bookmark books you’re interested in and keep an eye out for new additions.",
        },
        {
            heading: "3. Connect & Swap",
            paragraph:
                "Found a book you love? Send a swap request to the owner and arrange a convenient way to exchange. You can chat within the platform to coordinate pickup, delivery, or even a local book meet-up. Some users might also offer mail swaps for added flexibility.",
        },
        {
            heading: "4. Enjoy & Repeat",
            paragraph:
                "Once you've received your book, dive into a new story and enjoy the read! When you're done, you can return it, swap it for another book, or list it back on the platform to keep the cycle going. The more you swap, the more books you get to explore—all without spending extra money!",
        },
    ];

    return (
        <div className="bg-black text-white">
            {/* Banner Image */}
            <div className="w-full">
                <img className="w-full h-96 object-cover" src={pic1} alt="About Us" />
            </div>

            {/* About Us Section */}
            <div className="px-6 md:px-16 lg:px-28 py-16 text-center">
                <h1 className="text-5xl font-semibold text-yellow-600">About Us</h1>
                <p className="font-medium text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mt-6">
                    Welcome to <span className="text-orange-400 font-bold">BookSwap</span>, your trusted source for a diverse range of books catering to every reader's taste. Established with
                    the mission to foster a love for reading in our community, we pride ourselves on providing excellent service and a wide selection of books. Whether you're looking to declutter your
                    shelves or find your next great read, BookSwap connects you with like-minded readers in your community.
                </p>
                <p className="font-medium text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mt-6">
                    Our platform is built on the idea that books should be accessible to everyone. By swapping books instead of buying new ones, we encourage a sustainable and budget-friendly way of reading. 
                    We aim to create a welcoming community where readers can share, discover, and discuss books they love.
                </p>
                <p className="font-medium text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mt-6">
                    Whether you're a student looking for textbooks, a passionate reader hunting for classics, or a casual browser in search of something new, our platform offers an ever-growing collection tailored to your needs. 
                    Join us in building a culture of shared knowledge and endless reading adventures!
                </p>
            </div>

            {/* How It Works Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center py-24 gap-12 px-6 md:px-10 lg:px-28">
                {/* Image Section */}
                <div className="flex-shrink-0">
                    <img className="w-80 md:w-96 rounded-lg shadow-lg" src={pic2} alt="Book" />
                </div>

                {/* Steps Section */}
                <div className="h-auto w-full max-w-4xl bg-white text-black flex flex-col items-center p-12 shadow-xl  text-center">
                    <h1 className="text-5xl font-bold text-orange-500 mb-10">How It Works?</h1>
                    
                    {data.map((item, index) => (
                        <div key={index} className="mt-10 w-full">
                            <h2 className="text-2xl text-yellow-600 font-bold">{item.heading}</h2>
                            <p className="text-lg text-gray-700 font-medium mt-2">{item.paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
