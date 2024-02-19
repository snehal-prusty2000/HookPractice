import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

const About = () => {

    const location = useLocation();
    console.log(location);

  return (
    <div>
      About
     <Link to="/blog/contact" state={{name:"snehal"}}>Snehal</Link>
    </div>
  )
}

export default About
