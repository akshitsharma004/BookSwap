import React from "react";
import Home from "../Components/Home";
import HomeSecond from "../Components/HomeSecond";
import Categories from "../Components/Categories";
import WhoWeAre from "../Components/WhoWeAre";
import Features from "../Components/Features";
import Community from "../Components/Community";
function MainHome() {
    return (
        <div className="bg-black">
            <Home />
            <Features />
            <WhoWeAre />
            <Categories />
            <Community />
            <HomeSecond />
        </div>
    );
}

export default MainHome;
