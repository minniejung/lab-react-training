import React from 'react';

const CreditCard = (props) => {
  const type = props.type === 'Visa' ? `visa.png` : `master-card.svg`;

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div className="CreditCardLogo">
        <img src={type} alt={props.type}></img>
      </div>
      <div className="CreditCardNumber">
        •••• •••• •••• {props.number.slice(-5, -1)}
      </div>
      <p>
        Expires {props.expirationMonth} / {props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
