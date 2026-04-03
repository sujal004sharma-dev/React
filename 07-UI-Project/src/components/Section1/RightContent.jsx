import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='w-2/3 overflow-x-auto rounded-4xl flex gap-5 p-6 h-full'>
       {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.Tag}/>
       })}
        
    </div>
  )
}

export default RightContent
