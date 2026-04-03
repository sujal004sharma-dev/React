import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-60 rounded-3xl'>
            <img className='h-full w-full object-cover ' src={props.img} alt="" />

            <RightCardContent color={props.color}  id={props.id} tag={props.tag} intro={props.intro}/>


        </div>
    )
}

export default RightCard
