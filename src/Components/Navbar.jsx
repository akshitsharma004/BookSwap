import React from "react";
import { RiSearchLine } from "react-icons/ri";
import NavImg from "../assets/NavbarBg.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div
                className="flex px-32 py-6 justify-between bg-center"
                style={{ backgroundImage: `url(${NavImg})` }}
            >
                <div>
                    <ul className="flex text-4xl gap-4 text-yellow-600 font-semibold">
                        <li>
                            <span className="text-white">Book</span>Swap
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex cursor-pointer  items-center gap-10 text-white text-xl font-semibold">
                        <li className="hover:text-yellow-600">
                            {" "}
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-yellow-600">
                            {" "}
                            <Link to="/MainAbout">About Us</Link>
                        </li>
                        <li className="hover:text-yellow-600">
                            <Link to="/MainExchange">Exchange</Link>
                        </li>
                        <li className="hover:text-yellow-600">
                            <Link to="/MainLogIn">Log In</Link>
                        </li>

                        <form>
                            <RiSearchLine className="absolute mt-3 ml-5" />
                            <input
                                type="Text"
                                placeholder="      Search book.."
                                className="border-1  border-yellow-600 text-xs rounded-full px-8 py-3"
                            />
                        </form>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Navbar;
