import React from "react";
import "./index.css";

import ImageTrack from "../../Components/ImageTrack";

const Art = () => {
    return (
        <>
            <main className="art-description">
                <article>
                    <h1> Art Page Title </h1>
                    <p>
                        Some random text to fill up this space. 
                        We can put some sort of brief description here to highlight what LIFELABS is all about. 
                        I would say that a paragraph that consists of around five to seven lines would be enough to take just enough space up but not too much.
                    </p>
                </article>
            </main>
            <ImageTrack />
        </>
    )
}

export default Art;