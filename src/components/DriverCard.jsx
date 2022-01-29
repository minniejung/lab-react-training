import React from 'react';
import Rating from './Rating'

const DriverCard = (props) => {
  return (
  <div className="DriverCard">
      <div className="photo">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="detail">
        <p>{props.name}</p>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
  </div>
  );
};

export default DriverCard;
