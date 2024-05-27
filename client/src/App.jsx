<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import Person from "./Components/Person";
function App() {
  return (
    <>
      <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black" />
      <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown" />
      <PersonCard lastName="Fillmore" firstName="Millard" age={50} hairColor="Brown" />
      <PersonCard lastName="Smith" firstName="Maria" age={62} hairColor="Brown" />
    </>
  );
}
=======
import { useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> f3174ee (I am going to push my floder More Form)
import './App.css'
import Form from './components/Form'
import Display from './components/Display'


function App() {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
<<<<<<< HEAD
  
  return (
    <>
     <Form setfirstName={setfirstName} setlasttName={setlastName}setemail={setemail} setpassword={setpassword}setconfirmPassword={setconfirmPassword}/>
=======

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  
  return (
    <>
     <Form  firstName={firstName}  setfirstName={setfirstName} lastName={lastName} setlasttName={setlastName}  email={email} setemail={setemail} password={password} setpassword={setpassword} confirmPassword={confirmPassword} setconfirmPassword={setconfirmPassword}  errors={errors} setErrors={setErrors}/>
>>>>>>> f3174ee (I am going to push my floder More Form)
     <Display firstName={firstName} lasttName={lastName} email={email}  confirmPassword={confirmPassword}/>
    </>
  )
}

<<<<<<< HEAD
>>>>>>> f7c774c ( I am going to push my folder)
=======
>>>>>>> f3174ee (I am going to push my floder More Form)
export default App
