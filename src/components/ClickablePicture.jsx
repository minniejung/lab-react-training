import React from 'react';
import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="ClickablePicture" onClick={handleToggle}>
      <img
        src={isActive ? img : imgClicked}
        alt={img}
        style={{ width: '300px' }}
      />
    </div>
  );
};

export default ClickablePicture;
