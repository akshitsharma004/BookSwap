import React from "react";
import Home from "../Components/Home";
import HomeSecond from "../Components/HomeSecond";
import Categories from "../Components/Categories";
function MainHome() {
    return (
        <div>
            <Home />
            <Categories />
            <HomeSecond />
        </div>
    );
}

export default MainHome;
