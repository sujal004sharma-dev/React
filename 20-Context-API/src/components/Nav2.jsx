import React, { createContext, useContext } from 'react' 
import { PostContextData } from '../context/ThemeContext'


const Nav2 = (props) => {

  const data=useContext(PostContextData);
  console.log(data);
  return (
    
    <div className='nav2'>
      <h2>About</h2>
      <h2>Home</h2>
      <h2>Help</h2>
      
      
    </div>
  )
}

export default Nav2
