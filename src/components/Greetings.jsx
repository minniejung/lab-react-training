import React from 'react';

const Greetings = (props) => {
  console.log(props);

  return (
    <div className="Greetings">
      <p>
        {props.lang === 'fr' ? 'Bonjour' : 'Hallo'} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
