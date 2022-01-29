
import React from "react";
import { useState } from "react";

const Carousel = ({images}) => {
  const [index, setIndex] = useState(0);
  
  const goLeft = () => {
    // console.log(index);
    setIndex((index) => { 
    const lastIdx = index - 1;
    return lastIdx < 0 ? lastIdx + images.length : lastIdx;
  })};

  const goRight = () => {
    setIndex((index) => { 
      const lastIdx = index + 1;
      return lastIdx < 0 ? lastIdx + images.length : lastIdx;
  })}

  return (
    <div className="Carousel">      
      <div className="imgBox">
        <img src= {images[index]} alt=""/>
      </div>
      <button onClick={goLeft}>Left</button> <button onClick={goRight}>Right</button>
    </div>
  );
}

export default Carousel;
