import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
  const navigatation = useNavigate();

  const navigateToBlogPage = () =>{
   navigatation("/blog");
  }
  return (
    <div>
      Home
     <button onClick={()=>navigateToBlogPage()}>Goto Blog page</button>

    </div>
  )
}

export default Home
