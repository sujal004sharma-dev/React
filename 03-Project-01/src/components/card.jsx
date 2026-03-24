
const Card = (props) => {
 
  return (
    <div>
      <div className="card">
        <div>
          <div className="top">
            <img src={props.logo} alt="" />
            <button>Save </button>
        </div>
        <div className="center">
          <h3>{props.company}<span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='job'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        </div>
        
        <div className="bottom">
        <div className='pay'>          
            <h5>{props.pay}</h5>
            <p>{props.location}</p>          
        </div>
      <button>Apply Now</button>
      </div>
      </div>
      
    </div>
  )
}

export default Card
