import React from 'react';

const Random = (props) => {
  console.log(props);

  function result(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  return (
    <div className="Random">
      <p>
        Random Value between {props.min} and {props.max} = {result(props.min, props.max)}
      </p>
    </div>
  );
};

export default Random;
