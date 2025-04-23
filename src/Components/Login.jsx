import React from "react";
import pic1 from "../assets/LoginImage.png";
import SignIn from "../Components/SignIn";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="flex">
            <img src={pic1} alt="" />
            <div className="bg-black flex flex-col gap-2 items-center text-white w-full">
                <div className="flex flex-col gap-8 items-center mt-24">
                    <h1 className="text-6xl font-semibold">
                        Welcome to
                        <span className="text-yellow-600"> BookSwap</span>
                    </h1>
                    <p className="w-[35rem] text-justify text-lg">
                        Discover a seamless way to sell your books and unlock
                        exclusive benefits. Enjoy a hassle-free experience, save
                        valuable time, and take advantage of our amazing offers.
                    </p>
                    <h1 className="text-4xl py-2 text-yellow-600 font-semibold">
                        Login to your Account!
                    </h1>
                    <form className="flex-col gap-3 flex">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="py-4 px-8 w-[25rem] rounded-md bg-yellow-800"
                        />
                        <input
                            type="text"
                            placeholder="Password"
                            className="py-4 px-8 w-[25rem] rounded-md bg-yellow-800"
                        />
                    </form>
                </div>

                <div className="flex flex-col items-center">
                    <p className="cursor-pointer">Don't you have an account?</p>
                    <p className="text-yellow-600 cursor-pointer">
                        <Link to="/MainSignIn" className="sm">
                            Create an Account
                        </Link>
                    </p>
                </div>

                {/* <hr className="w-[35rem]"></hr> */}
                <button className="mt-8 px-16 py-4 rounded-full border-orange-500 border bg-yellow-700">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;
