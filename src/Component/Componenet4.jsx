import React, { createContext, useState } from 'react'
import Component5 from './Component5';

export const UserContext = createContext();

const Componenet4 = () => {

    const [user, setUser] = useState("Jesse Hall");
  return (
    <div>
      <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component5 />
     </UserContext.Provider>
    </div>
  )
}

export default Componenet4
