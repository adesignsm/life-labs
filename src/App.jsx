import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

import Home from "./Routes/Home";
import Art from "./Routes/Art";
import Education from "./Routes/Education";
import CommunityDev from "./Routes/CommunityDev";

const App = () => {
    return (
        <>
            <main className="page">
                <Home />
            </main>
        </>
    )
}

export default App;