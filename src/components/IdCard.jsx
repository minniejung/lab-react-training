// import React from 'react';

const IdCard = (props) => {
  // console.log(props);

  return (
    <div className="IdCard">
      <div className="avatar">
        <img src={props.picture} alt={props.firstName} />
      </div>
      <div className="detail">
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  );
};

export default IdCard;
