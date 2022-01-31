import React, { useState } from 'react';

const SingleColorPicker = () => {
  const [values, setValues] = useState({
    numR: 0,
    numG: 0,
    numB: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  return (
    <>
      <div className="singleColor">
        <div className="colorBox" style={{ backgroundColor: 'red' }}></div>
        <label htmlFor="color">R</label>
        <input
          name="numR"
          type="number"
          onChange={handleChange}
          min={0}
          max={255}
          value={values.numR}
        />
      </div>
      <div className="singleColor">
        <div className="colorBox" style={{ backgroundColor: 'green' }}></div>
        <label htmlFor="color">G</label>
        <input
          name="numG"
          type="number"
          onChange={handleChange}
          min={0}
          max={255}
          value={values.numG}
        />
      </div>
      <div className="singleColor">
        <div className="colorBox" style={{ backgroundColor: 'black' }}></div>
        <label htmlFor="color">B</label>
        <input
          name="numB"
          type="number"
          onChange={handleChange}
          min={0}
          max={255}
          value={values.numB}
        />
      </div>
      <div className="singleColor">
        <div className="colorBox" style={{ backgroundColor: 'orange' }}></div>
        <p>
          RGB ({values.numR},{values.numG},{values.numB})
        </p>
      </div>
    </>
  );
};

export default SingleColorPicker;
