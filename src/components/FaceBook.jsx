import React from 'react';
import FbList from '../data/berlin.json';
import { useState } from 'react';

// {"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},

const FaceBook = () => {
  const [onePerson, setList] = useState(FbList);
  // console.log(FbList[0].country)

  function findByCountry(country) {
    let copy = [...FbList];
    const foundedList = copy.filter((el) => el.country === country);
    console.log(foundedList);
    setList(copy);
  }

  return (
    <div className="FaceBook">
      {FbList.map((country) => (
        <button onClick={() => findByCountry(onePerson.country)}>
          {country.country}
        </button>
      ))}
      {FbList.map((info) => (
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
