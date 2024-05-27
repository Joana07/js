import React from 'react';
const Form=(props)=>{
const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword
  } = props;




  return(


    <>
    <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} placeholder="Enter your name" onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} placeholder="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        </form>
    </>
  )
}

export default Form;