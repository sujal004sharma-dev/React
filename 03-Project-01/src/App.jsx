
import Card from './components/card'



const App = () => {
const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    datePosted: "5 days ago",
    position: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: '45$/hr',
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company: "Amazon",
    datePosted: "2 weeks ago",
    position: "Backend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payPerHour: '50$/hr',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.unsplash.com/photo-1706879349328-4a05bb3e16ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWV0YSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    company: "Meta",
    datePosted: "1 week ago",
    position: "React Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    payPerHour: '40$/hr',
    location: "Delhi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    datePosted: "3 days ago",
    position: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: '70$/hr',
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    datePosted: "10 days ago",
    position: "UI Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    payPerHour: '65$/hr',
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    datePosted: "4 weeks ago",
    position: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: '60$/hr',
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    company: "Tesla",
    datePosted: "6 days ago",
    position: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    payPerHour: '55$/hr',
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    company: "Adobe",
    datePosted: "2 days ago",
    position: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Mid Level",
    payPerHour: '48$/hr',
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    company: "Uber",
    datePosted: "3 weeks ago",
    position: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    payPerHour: '58$/hr',
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    company: "Airbnb",
    datePosted: "1 month ago",
    position: "Frontend Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    payPerHour: '42$/hr',
    location: "Bangalore, India"
  }
];


  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        console.log(idx);
        
        return <div key={idx}>
          <Card  company={elem.company} datePosted={elem.datePosted} logo={elem.brandLogo} post={elem.position} tag1={elem.tag1} tag2={elem.tag2}  pay={elem.payPerHour} location={elem.location} />
    
        </div>
      
      })}  
      </div>
  )
}

export default App
