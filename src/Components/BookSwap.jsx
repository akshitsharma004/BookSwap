import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

function BookSwap() {
    const [bookTitle, setBookTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [condition, setCondition] = useState("");

    const handleReset = () => {
        setBookTitle("");
        setAuthor("");
        setCondition("");
    };


    return (
        <div className="bg-black py-10">
            <h1 className="text-7xl py-20 text-center text-white font-bold">
                Book<span className="text-yellow-600">Swap</span>
            </h1>

            <div className="py-10 text-white flex justify-center gap-20">
                
                <div className="w-[35rem] h-[24rem] border text-center py-4 border-yellow-600 rounded-md">
                    <h1 className="text-3xl text-yellow-600">Give Books</h1>
                    <p className="text-xl py-2">Add the books you are giving in exchange here</p>
                    <div className="py-4 flex justify-center">
                        <form className="w-[20rem]" >
                            <input
                                type="text"
                                placeholder="Book Title"
                                className="border border-white p-2 rounded-md w-full"
                                value={bookTitle}
                                onChange={(e) => setBookTitle(e.target.value)}
                                required
                            />

                            <input
                                type="text"
                                placeholder="Author"
                                className="border border-white p-2 rounded-md w-full mt-4"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />

                            <h1 className="text-xl text-yellow-600 mt-4">Book Condition</h1>
                            <div className="flex py-2 gap-2 justify-center">
                                <input
                                    type="radio"
                                    name="condition"
                                    value="New"
                                    checked={condition === "New"}
                                    onChange={(e) => setCondition(e.target.value)}
                                    required
                                />
                                <label>New</label>
                                <input
                                    type="radio"
                                    name="condition"
                                    value="Barely Used"
                                    checked={condition === "Barely Used"}
                                    onChange={(e) => setCondition(e.target.value)}
                                    required
                                />
                                <label>Barely Used</label>
                                <input
                                    type="radio"
                                    name="condition"
                                    value="Heavily Used"
                                    checked={condition === "Heavily Used"}
                                    onChange={(e) => setCondition(e.target.value)}
                                    required
                                />
                                <label>Heavily Used</label>
                            </div>

                            <div className="px-4 py-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="rounded-xl bg-red-600 px-5 hover:bg-red-400 py-2"
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-xl bg-green-700 px-5 hover:bg-green-500 py-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                
                <div className="w-[35rem] h-[24rem] flex-col flex justify-between border text-center py-4 border-yellow-600 rounded-md">
                    <div className="py-2 justify-center">
                        <h1 className="text-3xl text-yellow-600">Take Books</h1>
                        <p className="text-xl py-2">Add the books you are taking in exchange here</p>
                        <form className="ml-32 py-3 w-[20rem] relative">
                            <RiSearchLine className="absolute mt-3 ml-3 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search for books"
                                className="border border-white p-2 pl-10 rounded-md w-full"
                            />
                        </form>
                    </div>
                    <div className="justify-end flex py-3 px-3">
                        <button className="rounded-xl bg-green-700 hover:bg-green-500 px-4 py-2">
                            Find Book
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookSwap;
