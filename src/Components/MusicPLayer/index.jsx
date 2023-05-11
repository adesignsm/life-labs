import React, { useState, useEffect, useRef } from "react";

import audioAkin from "../../Assets/Component_media/MusicPlayer/audio-akin.mp3";
import audioSkin from "../../Assets/Component_media/MusicPlayer/audio-skin.mp3";
import audioApathy from "../../Assets/Component_media/MusicPlayer/audio-apathy.mp3";

import img1 from "../../Assets/Component_media/MusicPlayer/1.jpg";
import img2 from "../../Assets/Component_media/MusicPlayer/2.jpg";
import img3 from "../../Assets/Component_media/MusicPlayer/3.jpg";

import PLAY_BUTTON from "../../Assets/Component_media/MusicPlayer/controls/play.png";
import PAUSE_BUTTON from "../../Assets/Component_media/MusicPlayer/controls/pause.png";

import FORWARD_BUTTON from "../../Assets/Component_media/MusicPlayer/controls/forward.png";
import REWIND_BUTTON from "../../Assets/Component_media/MusicPlayer/controls/rewind.png";

import "./index.css";

const MusicPlayer = () => {
    const [count, setCount] = useState(0);
    const albumCoverMedia = [img1, img2, img3];
    const musicAlbumAudio = [audioAkin, audioSkin, audioApathy];

    const playAudio = () => {

    }

    const handlePlayPause = (e) => {
        if (e.target.className === "play-button") {
            e.target.src = PAUSE_BUTTON;
            e.target.classList.replace("play-button", "pause-button");
        } else if (e.target.className === "pause-button") {
            e.target.src = PLAY_BUTTON;
            e.target.classList.replace("pause-button", "play-button");
        }
    }

    return (
        <>
            <div id="music-player">
                <img id="music-player-image" src={albumCoverMedia[count]} />
                <div className="music-player-controls">
                    <img className="rewind-button" src={REWIND_BUTTON} />
                    <img onClick={(e) => {handlePlayPause(e)}} className="play-button" src={PLAY_BUTTON} />
                    <img className="forward-button" src={FORWARD_BUTTON} />
                </div>
            </div>
        </>
    )
}
  
export default MusicPlayer;