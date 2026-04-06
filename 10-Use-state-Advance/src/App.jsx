import React, { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(10);
  // const [num, setnum] = useState([10,20,30]);
  // const [num, setnum] = useState({user:'Sarthak',age:20});

  const clickbtn = ()=>{
    setnum(prev=>(prev+1));//Batch Update
    setnum(prev=>(prev+1));
    setnum(prev=>(prev+1));

    // const newNum=[...num];
    // newNum.push(99);
    // setnum(newNum);
    

    // const newNum={...num};
    // newNum.user='Aman'
    // setnum(newNum);
  }

  return (
    <div>
      <h1>the value is {num}</h1>
      <button onClick={clickbtn}>Click</button>

    </div>
  )
}

export default App
