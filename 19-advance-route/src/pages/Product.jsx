import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-15 px-4 py-5'>
        <Link  className='text-xl font-semibold' to='/product/mens'>Men</Link>
        <Link  className='text-xl font-semibold' to='/product/womens'>Women</Link>
        <Link  className='text-xl font-semibold' to='/product/kids'>Kids</Link>
      </div>
      
      <Outlet/>
    </div>
  )
}

export default Product
