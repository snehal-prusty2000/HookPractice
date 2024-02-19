import React, { useRef, useState } from 'react'

const UseRefUser = () => {
    //const RefElement = useRef("Dhiren");
    const RefElement = useRef(" ");
    console.log(RefElement);
    const [inputValue, setInputValue] = useState("Snehal Prusty");
   // console.log(inputValue);

   const Reset = () =>{
    setInputValue("");
    RefElement.current.focus();
   }

   const handelInput = ()=>{
    RefElement.current.style.color = "Red";
    RefElement.current.value = "Dhiren"
   }

  return (
    <div>
      <h1> Name is {`${RefElement.current}`}</h1>    {/*   when value is Dhiren */}
       <input ref={RefElement}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handelInput}>handelInput</button>
    </div>
  )
}

export default UseRefUser
