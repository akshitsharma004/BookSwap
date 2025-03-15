import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import pic1 from "../assets/Academics.jpg";
import pic2 from "../assets/Poetry.jpg";
import pic3 from "../assets/Action.jpg";
import pic4 from "../assets/Business.jpg";
import pic5 from "../assets/Crime.jpg";
import pic6 from "../assets/Drama.jpg";
import pic7 from "../assets/Health.jpg";
import pic8 from "../assets/Historical.jpg";
import pic9 from "../assets/Biography.avif";
import pic10 from "../assets/Horror.avif";
import pic11 from "../assets/Kids.avif";
import pic12 from "../assets/Romance.jpg";

export default function Categories() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const categories = [
        { name: "Academics and Textbooks", img: pic1 },
        { name: "Action and Adventure", img: pic3 },
        { name: "Horror", img: pic10 },
        { name: "Biographies", img: pic9 },
        { name: "Kids and Children", img: pic11 },
        { name: "Romance", img: pic12 },
        { name: "Business and Economics", img: pic4 },
        { name: "Health and Fitness", img: pic7 },
        { name: "Historical", img: pic8 },
        { name: "Crime, Thriller and Adventure", img: pic5 },
        { name: "Drama", img: pic6 },
        { name: "Poetry", img: pic2 },
    ];

    return (
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-bold my-16 text-center text-yellow-600">Categories</h1>
            <div className="w-full my-8 flex justify-end px-4">
                <Link to="/MainExplore">
                    <h2 className="text-xl md:text-2xl rounded-full px-6 py-3 border border-yellow-600 hover:bg-orange-500 hover:text-black bg-black text-yellow-600 font-semibold transition-all">
                        Explore All
                    </h2>
                </Link>
            </div>
            <div className="px-4 md:px-10 py-10 w-full bg-black text-yellow-600 rounded-lg shadow-lg">
                <Slider {...settings}>
                    {categories.map((elem, index) => (
                        <div
                            key={index}
                            className="h-[25rem] w-full flex flex-col items-center"
                        >
                            <div className="w-full max-w-[18rem] h-[20rem] px-2 overflow-hidden rounded-lg shadow-md">
                                <img
                                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform"
                                    src={elem.img}
                                    alt={elem.name}
                                />
                            </div>
                            <h1 className="text-xl md:text-2xl font-semibold px-2 py-5 text-center">
                                {elem.name}
                            </h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
