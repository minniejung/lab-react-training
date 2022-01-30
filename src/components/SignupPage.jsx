import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  // const handleChange = (e) => {
  //   setEmail(e.target.value)
  // }

  return (
    <>
      <form className="form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password"></input>
        </div>
        <div>
          <label htmlFor="nationality">Nationality</label>
          <select
            type="nationality"
            name="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option>EN</option>
            <option>DE</option>
            <option>FR</option>
          </select>
        </div>
      </form>

      <p>
        <b>
          {nationality === 'FR'
            ? 'Bonjour'
            : nationality === 'DE'
            ? 'Hallo'
            : 'Hello'}
        </b>
      </p>
      <p>
        Your email address is: <b>{email}</b>
      </p>
      <p>Your email address is correct</p>
    </>
  );
};

export default SignupPage;
