import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [count , setCount] = useState(0);
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

//useEffect(<function>, <dependency>) it takes two arguement


                  useEffect(() => {
                     setTimeout(() => {
                       setCount((count) => count + 1);
                      }, 1000);
                  });


                  // useEffect(() => {
                  //   //Runs on the first render
                  //   //And any time any dependency value changes
                  // }, [prop, state]);



              /*   useEffect(() => {                            
                    setTimeout(() => {
                   setCount((count) => count + 1);
                   }, 1000);
                 },[count]); */

        /*  useEffect(() => {
             setTimeout(() => {
             setCount((count) => count + 1);
             }, 1000);
            },[ ]);//Runs only on the first render */

      const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }

  return (
    <div>
       <h1>I've rendered {count} times!</h1>
       <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={updateColor}> new car brand</button>
    </div>
  )
}

export default Timer
