import React from 'react'
import { useLocation } from 'react-router';

const Contact = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>
      Contact page
    </div>
  )
}

export default Contact
