import React, { useState } from 'react'

function Increment() {
    const [count,setCount] = useState(1);

    const  yessirincrement = function () {
      console.log("buttonclicked")
        setCount(count + 1)
      };
      const yessirdecrement=function() {
        console.log("button clicked")
        setCount(count-1)
      }
    
       
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={yessirincrement}>Increment(+)</button>

        <button onClick={yessirdecrement}>Decrement(-)</button>


    </div>
  )
}

export default Increment;