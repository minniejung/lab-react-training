import React from 'react';
import { useState } from 'react';

const dices = [
  'dice1.png',
  'dice2.png',
  'dice3.png',
  'dice4.png',
  'dice5.png',
  'dice6.png',
];

function Dice() {
  const [dice, setDice] = useState('dice-empty.png');
  function randomDice() {
    const randomNum = dices[Math.floor(Math.random() * dices.length)];
    setDice(randomNum);
  }
  const handleToggle = () => {
    setDice('dice-empty.png');
    setTimeout(randomDice, 1000);
  };

  return (
    <div className="Dice" onClick={handleToggle}>
      <img src={dice} alt="0" style={{ width: '200px' }}></img>
    </div>
  );
}

export default Dice;
