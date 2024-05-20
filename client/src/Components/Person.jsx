import { useState } from "react";

const Person = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [updateAge, setUpdateAge] = useState(age);

  return (
    <>
      <h1>{firstName} {lastName}</h1>
      <p>Age: {updateAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={() => setUpdateAge(updateAge + 1)}>Happy Birthday</button>
    </>
  );
}

export default Person;

