import React from 'react'

const App = () => {

  const Submithandler =(elem)=>{
    elem.preventDefault();
    console.log('Form Submitted');    
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        Submithandler(elem);
      }}>
        <input type="text" placeholder='Enter Your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
