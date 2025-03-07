import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../assets/Academics.jpg";
import pic2 from "../assets/Poetry.jpg";
import pic3 from "../assets/Action.jpg";
import pic4 from "../assets/Business.jpg";
import pic5 from "../assets/Crime.jpg";
import pic6 from "../assets/Drama.jpg";
import pic7 from "../assets/HEalth.jpg";
import pic8 from "../assets/Historical.jpg";
import pic9 from "../assets/Biography.avif";
import pic10 from "../assets/Horror.avif";
import pic11 from "../assets/Kids.avif";
import pic12 from "../assets/Romance.jpg";
import { Link } from "react-router-dom";

export default function Categories() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //         },
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //         },
        //     },
        // ],
    };

    const data = [
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
        <div className="mx-28 py-32 flex flex-col justify-center items-center">
            <h1 className="text-7xl font-bold my-16">Categories</h1>
            <div className="w-full my-8 flex justify-end">
                <Link to="/MainExplore">
                    <h2 className="text-2xl rounded-full px-6 py-3 border border-black hover:bg-white hover:text-black bg-black text-white font-semibold">
                        Explore All
                    </h2>
                </Link>
            </div>
            <div className="px-10 py-10 w-full text-white bg-black">
                <Slider {...settings}>
                    {data.map((elem, index) => (
                        <div
                            key={index}
                            className="h-[25rem] w-[18rem] flex flex-col items-center"
                        >
                            <div className="w-[18rem] h-[20rem] px-2 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    src={elem.img}
                                    alt={elem.name}
                                />
                            </div>
                            <h1 className=" text-2xl font-semibold px-2 py-5">
                                {elem.name}
                            </h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
