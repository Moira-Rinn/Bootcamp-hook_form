import React, { useState } from 'react';
import SMCR from '../imgs/SMCR.png';

const RegForm = (props) => {

  // const { fName, lName, email, pass, pass2 } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const newUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, userEmail, password, password2 }
    //setting innerText to the data entered after submitted (alternate method)
    // document.getElementById('fname').innerText = `First Name: ${newUser.firstName}`;
    // document.getElementById('lname').innerText = `Last Name: ${newUser.lastName}`;
    // document.getElementById('email').innerText = `Email: ${newUser.userEmail}`;
    // document.getElementById('pass').innerText = `Password: ${newUser.password}`;
  }

  return (
    <div className="user">
      <div className='form-wrapper'>
        <img src={SMCR} alt="S.M.C.R. Logo"></img>
        <form onSubmit={newUser}>
          <div className='form-group'>
            <label>First Name: </label>
            <input
              className='form-control-sm'
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Last Name: </label>
            <input
              className='form-control-sm'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Email Address: </label>
            <input
              className='form-control-sm'
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)} />
          </div>
          <div className='form-group'>
            <label>Password: </label>
            <input
              className='form-control-sm'
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Confirm Password: </label>
            <input
              className='form-control-sm'
              type="text"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <input
            className='btn btn-light btn-outline-dark'
            type="submit"
            value="Create User"
          />
        </form>
      </div>
      <div className='userData'>
        <h2>You're Entering: </h2>
        <h4 id='fname'>First Name: {firstName}</h4>
        <h4 id='lname'>Last Name: {lastName}</h4>
        <h4 id='email'>Email: {userEmail}</h4>
        <h4 id='pass'>Password: {password}</h4>
      </div>

    </div>
  );
}

export default RegForm;

