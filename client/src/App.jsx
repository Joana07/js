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
import './App.css'
import Form from './components/Form'
import Display from './components/Display'


function App() {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  
  return (
    <>
     <Form setfirstName={setfirstName} setlasttName={setlastName}setemail={setemail} setpassword={setpassword}setconfirmPassword={setconfirmPassword}/>
     <Display firstName={firstName} lasttName={lastName} email={email}  confirmPassword={confirmPassword}/>
    </>
  )
}

>>>>>>> f7c774c ( I am going to push my folder)
export default App
