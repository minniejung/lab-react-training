import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [nationality, setNationality] = useState('');
  // const handleChange = (e) => {
  //   setEmail(e.target.value)
  // }

  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label htmlFor="password">Password</label>
        <input type="password" name="password"></input>

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
      </form>

      <p>
        {nationality === 'FR'
          ? 'Bonjour'
          : nationality === 'DE'
          ? 'Hallo'
          : 'Hello'}
      </p>
      <p>Your email address is: {email}</p>
      <p>Your email address is correct</p>
    </>
  );
};

export default SignupPage;
