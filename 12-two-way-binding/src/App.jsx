
import { useState } from 'react';

const App = () => {

  const [title, settitle] = useState('');//use state

  const Submithandler =(elem)=>{//a function run when submit
    elem.preventDefault();
    console.log(elem)
    console.log('Form Submitted by',title);
    settitle('');    
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        Submithandler(elem);
      }}>
        <input type="text" 
        placeholder='Enter Your name'
        value={title} 
        onChange={(e)=>{
          settitle(e.target.value)
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
