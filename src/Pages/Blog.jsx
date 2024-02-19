import React from 'react'
import { useNavigate } from 'react-router';

const Blog = () => { 
  const navigate = useNavigate(); 

  const gotoContact = () =>{
    //  alert("hii");
    navigate("/blog/contact");//path of contact page
  }
  return (
    <div>
      Blog
      {/* <button onClick={() => gotoContact()}>goto Contact Page</button> */}
      <button onClick={ gotoContact }>goto Contact Page</button>
      <button onClick={() => navigate(-1)} > goto back</button>
    </div>
  )
}

export default Blog
