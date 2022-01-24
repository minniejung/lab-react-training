import React from 'react';

const IdCard = (props) => {
  console.log(props);
  
  return (
    <div className="IdCard">
      <div className="avatar">
        <img src={props.picture} alt={props.firstName} />
      </div>
      <div className="detail">
        <p>lastName: {props.lastname}</p>
        <p>firstName: {props.firstName}</p>
        <p>gender: {props.gender}</p>
        <p>height: {props.height}</p>
        <p>birth: {props.birth}</p>
      </div>
    </div>
  );
};

export default IdCard;
