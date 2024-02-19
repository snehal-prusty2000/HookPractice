import React from 'react'
import Component3 from './Component3';

const Component2 = ({ user, age }) => {
  // console.log(user);//undefined


  console.log({ user, age });
  //    {user: undefined}user: undefined[[Prototype]]: Object

  return (

    <>
      {/* <h1>{`Component 2 ${users}!`}</h1>
      <Component3 user={user} /> */}

      <h1>Component 2</h1>
      <Component3 user={user} />
    </>

  )
}

export default Component2
