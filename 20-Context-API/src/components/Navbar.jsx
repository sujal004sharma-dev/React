import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { PostContextData } from '../context/ThemeContext'

const Navbar = () => {

  const data = useContext(PostContextData)
  
  return (
    <div className='nav'>
      <h1>{data}</h1>


      <Nav2 />
    </div>
  )
}

export default Navbar
