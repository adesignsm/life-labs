import React, { useRef, useState } from "react";

import "./index.css";

const ImageTrack = () => {
  const trackRef = useRef(null);
  const [dragFlag, setDragFlag] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    trackRef.current.dataset.mouseDownAt = e.clientX;
    e.target.style.cursor = "grabbing";
  };

  const handleMouseUp = (e) => {
    trackRef.current.dataset.mouseDownAt = "0";
    trackRef.current.dataset.prevPercentage = trackRef.current.dataset.percentage;
    e.target.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (trackRef.current.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(trackRef.current.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = nextPercentage;

    console.log(e);

    trackRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );

    for (const image of trackRef.current.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage / 2}%`,
        },
        {
          duration: 0,
          fill: "forwards",
        }
      );
    }
  };

  return (
        <div ref={trackRef} id="image-track" data-mouse-down-at="0" data-prev-percentage="0" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1676298492566-90b53e61ef65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8cVBZc0R6dkpPWWN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1676282990356-d377ceab4630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1673446932312-413e564c5640?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1676029480491-9ac31662c555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1675746050108-13812e76f758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1675924064169-f9795b2fbd1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHFQWXNEenZKT1ljfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1674910249908-51ed27d57972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwM3xxUFlzRHp2Sk9ZY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            <img draggable="false" className="image" src="https://images.unsplash.com/photo-1674854174272-6647b379e87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyN3xxUFlzRHp2Sk9ZY3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
    )
}

export default ImageTrack;