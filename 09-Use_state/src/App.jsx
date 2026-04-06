import React, { useState } from 'react'

const App = () => {
  const [num,Setnum] = useState(5);


  const increaseNum=()=>{
    Setnum(num+1);
  };
  const decreaseNum=()=>{
    Setnum(num-1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App
