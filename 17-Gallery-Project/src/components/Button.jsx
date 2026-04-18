import React from 'react'

const Button = (props) => {
  return (
    
       <div className='flex justify-center mt-5 items-center gap-4'>
        <button
          onClick={() => {
            if(index>0){
              props.setUserdata([])
              props.setindex(props.index - 1)
            }
            
          }}
          className='bg-amber-400  px-4 py-1 rounded font-bold cursor-pointer active:scale-95 text-xl '>
          Prev
        </button>
        <h3>Page{props.index}</h3>
        <button
          onClick={() => {
            props.setUserdata([])
            props.setindex(props.index + 1)
          }}
          className='bg-amber-400 px-4   py-1 rounded font-bold cursor-pointer active:scale-95 text-xl '>
          Next
        </button>
    </div>
  )
}

export default Button
