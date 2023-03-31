import React from "react";
import $ from "jquery";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
  const location = useLocation();

  const artBgChange = () => {
    $("#main-page-overlay").css({background: "transparent"});
  }

  const homeBgChange = () => {
    $("#main-page-overlay").css({background: "rgba(78, 72, 6, 0.3)"});
  }

  return (
    <>
      <div id="main-page-overlay" />
      <main className="page">
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={ 
                <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1, height: "100%" }} exit={{ opacity: 0 }} onAnimationStart={homeBgChange}>
                    <Home />
                </motion.div> } 
            />
            <Route path="/education" element={ 
                <motion.div key="education" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Education />
                </motion.div> } 
            />
            <Route path="/art" element={ 
                <motion.div key="art" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onAnimationStart={artBgChange}>
                    <Art />
                </motion.div> }  
            />
            <Route path="/communitydev" element={ 
                <motion.div key="communitydev" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <CommunityDev />
                </motion.div> } 
            />
          </Routes>
        </AnimatePresence>
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;