import React from 'react';
import FbList from '../data/berlin.json';
import { useState } from 'react';

// {"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},

const FaceBook = () => {
  const [onePerson, setList] = useState(FbList);

  const countriesList = (country) => {
    let list = [];
    country
      .map((el) => el.country)
      .forEach((el) => (!list.includes(el) ? list.push(el) : ''));
    return list;
  };

  let countries = countriesList(FbList);

  const findByCountry = (country) => {
    country === ''
      ? setList(FbList)
      : setList(FbList.filter((el) => el.country === country));
  };

  return (
    <div className="FaceBook">
      {countries.map((country) => (
        <button key={country} onClick={() => findByCountry(`${country}`)}>
          {country}
        </button>
      ))}

      {onePerson.map((info) => (
        <div
          className="eachPerson"
          style={{
            border: '1px solid grey',
            marginBottom: '5px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <img
            src={info.img}
            alt={info.firstName}
            style={{ width: '100px' }}
          ></img>

          <div className="infoDetail">
            <p>First Name : {info.firstName}</p>
            <p>Last Name : {info.lastName}</p>
            <p>Country : {info.country}</p>
            <p>Type : {info.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
