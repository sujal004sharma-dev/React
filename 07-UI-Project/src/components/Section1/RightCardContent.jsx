const RightCardContent = (props) => {
  return (
    
      <div className='absolute h-full w-full top-0 flex flex-col p-5 justify-between left-0'>
                <h2 className='bg-white h-10 w-10 font-semibold text-xl flex justify-center items-center rounded-full'>{props.id+1}</h2>
                <div>
                    <p className='text-shadow-3xs text-[16px] leading-normal text-white mt-25'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus delectus necessitatibus earum nam similique?</p>
                </div>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className= 'px-5 py-2 rounded-full text-medium text-white'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}}  className=' transform transition duration-300 hover:scale-120 px-3 cursor-pointer py-2 rounded-full text-medium text-white'>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
    
  )
}

export default RightCardContent
