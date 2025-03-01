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
import Explore from "./Components/Explore";

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
                        <Route path="/mainexplore" element={<Explore />} />


                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
