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
            {/*Insert Components either before or after <main /> */}
            <Header />
            <main className="page">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/education" element={ <Education /> } />
                    <Route path="/art" element={ <Art /> }  />
                    <Route path="/communitydev" element={ <CommunityDev /> } />
                </Routes>
            </main>
        </>
    )
}

export default App;