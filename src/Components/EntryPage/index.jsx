import React, {useEffect, useState} from "react";
import $ from "jquery";
import "./index.css";

const EntryPage = () => {
    const init = () => {
        let strings = document.getElementsByClassName("entry-text");

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null, iteration = 0, counter = 0, timer = 120;
        let flag = 85;
        let scaleFlag = 0.00005;
        let opacityFlag = 0.0005;
        let blurFlag = 50;

        clearInterval(interval);

        interval = setInterval(() => {
            counter++;

            Object.keys(strings).forEach((str) => {
                let endText = strings[str].dataset.stringValue;

                strings[str].style.transform = `scale(${scaleFlag += 0.003})`;
                strings[str].style.opacity = `${opacityFlag += 0.01}`;
                strings[str].style.filter = `blur(${blurFlag -= 0.6}px)`;

                strings[str].innerText = strings[str].innerText.split("").map((letter, index) => {
                    iteration = -10;

                    if (index < iteration) {
                        return strings[str].dataset.stringValue[index];
                    }

                    if (counter === flag) {
                        iteration = flag;
                        strings[str].dataset.stringValue = endText;
                        return strings[str].dataset.stringValue[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                }).join("");
                if (iteration >= strings[str].dataset.stringValue.length) {
                    clearInterval(interval);
                    counter = counter;

                    if (document.readyState === "complete") {
                        $(".entry-page").delay(1500).fadeOut(300);
                    }
                }
            })
            iteration += 1 / 5;
        }, timer);
    }
    
    useEffect(() => {
        setTimeout(() => {
            init(); 
        }, 1000);
    }, []);
    return (
        <>
            <div className="entry-page">
                <h1 className="entry-text" data-string-value="Community">Community</h1>
                <h1 className="entry-text" data-string-value="Art">Art</h1>
                <h1 className="entry-text" data-string-value="Education">Education</h1>
            </div>
        </>
    )
}

export default EntryPage;