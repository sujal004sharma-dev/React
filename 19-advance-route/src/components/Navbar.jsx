import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-700 flex px-4 py-5 justify-between  '>
      <h2 className='font-bold text-xl'>FunMart</h2>
      <div className='flex gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/Courses'>Courses</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/Call'>Call </Link>

      
      </div>
    </div>
  )
}

export default Navbar
