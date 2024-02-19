import React from 'react'

const Component3 = ({user}) => {
  console.log({user});
  return (
    <>
    <h1>Component 3</h1>
    <h1>{`Hello ${user} again!`}</h1></>
  )
}

export default Component3
//Even though components 2 did not need the state, 
//they had to pass the state along so that it could reach component 3.