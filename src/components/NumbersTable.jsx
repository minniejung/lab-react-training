import React from 'react';

const NumbersTable = (props) => {
  const numbers = [...Array(props.limit).keys()];

  return (
    <div className="NumbersTable">
      {numbers.map((num) => {
        return (
          <div
            className="oneBox"
            key={num}
            style={{ backgroundColor: num % 2 === 0 ? 'white' : 'red' }}
          >
            <p>{num + 1}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
