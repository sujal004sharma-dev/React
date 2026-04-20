import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
      let navigate = useNavigate()
  return (
    <div className='bg-cyan-900 px-2'>
      <button onClick={() => {
        navigate('/');
      }}
        className='m-3 px-4 py-4 bg-amber-600 rounded-2xl cursor-pointer active:scale-95'>
        Go to Home Page
      </button>

      <button onClick={() => {
        navigate(-1);;
      }}
        className='m-3 px-4 py-4 bg-amber-600 rounded-2xl cursor-pointer active:scale-95'>
        Back
      </button>
      <button onClick={() => {
        navigate(+1);;
      }}
        className='m-3 px-4 py-4 bg-amber-600 rounded-2xl cursor-pointer active:scale-95'>
        Next
      </button>
    </div>
  )
}

export default Navbar2
