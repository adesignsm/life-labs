import React from "react";
import "./index.css";

import MusicPlayer from "../MusicPLayer";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="column">
                    <div className="recent-drops-container">
                        <marquee direction="left" scrollAmount="10" width="100%" vspace="5">
                            <h1> New drop run the flex </h1>
                        </marquee>
                    </div>
                </div>
                <div className="column">
                    <div className="p5-musicplayer-container">
                        <MusicPlayer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;