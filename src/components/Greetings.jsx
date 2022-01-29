import React from 'react';

const Greetings = ({ lang, children }) => {
  const translator = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
    tx: 'Howdy',
  };

  return (
    <div className="Greetings">
      <p>
        {translator[lang]} {children}
        {/* {lang === 'fr' ? 'Bonjour' : 'Hallo'} {children} */}
      </p>
    </div>
  );
};

export default Greetings;
