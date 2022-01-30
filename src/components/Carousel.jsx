import React from 'react';
import { useState } from 'react';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="Carousel">
      <div className="imgBox">
        <img src={images[index]} alt="" />
      </div>
      <button
        onClick={() => {
          index <= 0 ? setIndex(images.length - 1) : setIndex(index - 1);
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          index < images.length - 1 ? setIndex(index + 1) : setIndex(0);
        }}
      >
        Right
      </button>
    </div>
  );
};

export default Carousel;
