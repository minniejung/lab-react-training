import React from 'react';

const BoxColor = (props) => {
  console.log(props);

  const { r, g, b } = props;

  return (
    <div
      className="BoxColor"
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      }}>
      RGB({props.r}, {props.g}, {props.b})
    </div>
  );
};

export default BoxColor;
