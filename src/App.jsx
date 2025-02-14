// import React from 'react'
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import Login from './Components/Login'
// import Footer from './Components/Footer'
// import HomeSecond from './Components/HomeSecond'
// import Exchange from './Components/Exchange'
// import WhyToExchange from './Components/WhyToExchange'
// import About from './Components/About'
// import Categories from './Components/Categories'

// function App() {
//   return (
//     <div>
//         <Navbar/>
//         <Home/>
//         <Categories/>
//         <HomeSecond/>

//         <Exchange/>
//         <WhyToExchange/>
//         <About/>
//         <Login/>

//         <Footer/>
//     </div>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainHome from "./Pages/MainHome";
import MainAboutUs from "./Pages/MainAboutUs";
import MainExchange from "./Pages/MainExchange";
import MainLogIn from "./Pages/MainLogIn";
import MainSignIn from "./Pages/MainSignIn";
import MainWhyToExchange from "./Pages/MainWhyToExchange";
import MainExplore from "./Pages/MainExplore";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainHome />} />
                        <Route path="/mainabout" element={<MainAboutUs />} />
                        <Route
                            path="/mainexchange"
                            element={<MainExchange />}
                        />
                        <Route path="/mainlogin" element={<MainLogIn />} />
                        <Route path="/mainsignin" element={<MainSignIn />} />
                        <Route path="/mainsignin" element={<MainSignIn />} />
                        <Route path="/mainwhytoexchange" element={<MainWhyToExchange />} />
                        <Route path="/mainexplore" element={<MainExplore />} />


                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
