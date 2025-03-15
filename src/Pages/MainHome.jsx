import React from "react";
import Home from "../Components/Home";
import HomeSecond from "../Components/HomeSecond";
import Categories from "../Components/Categories";
import WhoWeAre from "../Components/WhoWeAre";
function MainHome() {
    return (
        <div className="bg-black">
            <Home />
            <WhoWeAre />
            <Categories />
            <HomeSecond />
        </div>
    );
}

export default MainHome;
