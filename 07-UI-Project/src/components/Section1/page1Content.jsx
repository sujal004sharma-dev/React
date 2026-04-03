import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className=' flex h-[90vh] gap-10 items-center px-18 pb-12 '>
     <LeftContent/>
     <RightContent users={props.users}/> 
    </div>
  )
}

export default Page1Content
