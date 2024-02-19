import React, { useContext } from 'react'
import {UserContext} from "./Componenet4"

const Component6 = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h1> Component 6</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  )
}

export default Component6
