import React from "react";
import Home from "../Components/Home";
import HomeSecond from "../Components/HomeSecond";
import Categories from "../Components/Categories";
import WhoWeAre from "../Components/WhoWeAre";
import Features from "../Components/Features";
import Community from "../Components/Community";
import HowWeWork from "../Components/HowWeWork";
function MainHome() {
    return (
        <div className="bg-black">
            <Home />
            <Features />
            <WhoWeAre />
            <HowWeWork />
            <Categories />
            <HomeSecond />
            <Community />
        </div>
    );
}

export default MainHome;
