import React from 'react'

const App = () => {

  const btnClicked=() =>{
    console.log("Button is Clicked");
  };
  const MouseEntered=()=>{
    console.log('Mouse Entered');
  }
  return (
    <div>
      {/* <button onMouseEnter={MouseEntered} onDoubleClick={btnClicked}>Click Me</button> */}
      <input onChange={(elem)=>{
        console.log(elem.target);
      }} type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App
