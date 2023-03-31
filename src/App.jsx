import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Home from "./Routes/Home";
import Art from "./Routes/Art";
import Education from "./Routes/Education";
import CommunityDev from "./Routes/CommunityDev";

import "./root.css";

const App = () => {
    return (
        <>  
            <div id="main-page-overlay" />
            <main className="page">
                <Header />
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/education" element={ <Education /> } />
                    <Route path="/art" element={ <Art /> }  />
                    <Route path="/communitydev" element={ <CommunityDev /> } />
                </Routes>
                <About />
                <Contact />
                <Footer />
            </main>
        </>
    )
}

export default App;