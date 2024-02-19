import React, { useState } from 'react'
import Component2 from './Component2';

const ComponentContext = () => {


  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>Component 1</h1>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} age={23} />
    </>
  );


}

export default ComponentContext
