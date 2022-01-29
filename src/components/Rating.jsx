import React from 'react';

const Rating = (props) => {
  function stars() {
    let num = Math.round(props.children);
    // console.log(num);

    if (num === 0) return `☆☆☆☆☆`;
    if (num === 1) return `★☆☆☆☆`;
    if (num === 2) return `★★☆☆☆`;
    if (num === 3) return `★★★☆☆`;
    if (num === 4) return `★★★★☆`;
    if (num === 5) return `★★★★★`;
    }

  return (
  <div className="Rating">
    <p>{stars()}</p>
  </div>
  );
};

export default Rating;
