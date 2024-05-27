import React from 'react';
const Display=({ firstName, lastName, email, password, confirmPassword })=>{





  return(


    <>
    <h1>Display a user</h1>
    <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </>
  )
}

export default Display;