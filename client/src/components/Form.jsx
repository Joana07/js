<<<<<<< HEAD
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
=======
import React, { useEffect } from 'react';

const Form = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errors, 
  setErrors
}) => {

  useEffect(() => {
    validateInputs();
  }, [firstName, lastName, email, password, confirmPassword]);

  const validateInputs = () => {
    const newErrors = {};

    if (firstName && firstName.length < 2) {
      newErrors.firstName = "First Name must be at least 2 characters.";
    }
    if (lastName && lastName.length < 2) {
      newErrors.lastName = "Last Name must be at least 2 characters.";
    }
    if (email && email.length < 5) {
      newErrors.email = "Email must be at least 5 characters.";
    }
    if (password && password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords must match.";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} placeholder="Enter your name" onChange={(e) => setFirstName(e.target.value)}/>
          {errors && errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} />
          {errors && errors.lastName && <p className="error">{errors.lastName}</p>}
>>>>>>> f3174ee (I am going to push my floder More Form)
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
<<<<<<< HEAD
=======
          {errors && errors.email && <p className="error">{errors.email}</p>}
>>>>>>> f3174ee (I am going to push my floder More Form)
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
<<<<<<< HEAD
=======
          {errors && errors.password && <p className="error">{errors.password}</p>}
>>>>>>> f3174ee (I am going to push my floder More Form)
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} placeholder="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)}/>
<<<<<<< HEAD
        </div>
        </form>
    </>
  )
}

export default Form;
=======
          {errors && errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
>>>>>>> f3174ee (I am going to push my floder More Form)
