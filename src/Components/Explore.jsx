import React from 'react'
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

function Explore() {
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
    <div className="flex flex-col justify-center text-white bg-black items-center">
            <h1 className="text-7xl py-20 font-bold">Categories</h1>
            
                <div className='justify-center flex gap-24 my-16 flex-wrap'>
                    {data.map((elem, index) => (
                        <div
                            key={index}
                            className="h-[23rem] border hover:bg-zinc-800 hover:border-transparent  border-white w-[18rem] flex flex-col items-center "
                        >
                            <div className="w-[18rem] h-[20rem] px-2 overflow-hidden">
                                <img
                                    className="w-full py-5 px-7 h-full object-cover"
                                    src={elem.img}
                                    alt={elem.name}
                                />
                            </div>
                            <h1 className="text-2xl text-center font-semibold px-1 py-3">
                                {elem.name}
                            </h1>
                        </div>
                    ))}
                </div>
            
        </div>
  )
}

export default Explore