import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('A ki value change hori h');
  }

  function bChanging(){
    console.log('B ki value change hori');
  }

  useEffect(function () {
    aChanging();
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a+1);
      }} >ClickA</button>

      <button onClick={()=>{
        setB(b-1);
      }}>ClickB</button>

    </div>
  )
}

export default App
