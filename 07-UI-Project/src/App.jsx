import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'blue',
      Tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'pink',
      Tag:'UnderServed'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'black',
      Tag:'Underbanked'
    },
     {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDBDcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq%3D',
      intro:'',
      color:'lightseagreen',
      Tag:'UnEmployed'
    },
     {
      img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDBDcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq%3D',
      intro:'',
      color:'lightblue',
      Tag:'UnEmployed'
    }
  ]

  return (
    <div className=''>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
  )
}

export default App
