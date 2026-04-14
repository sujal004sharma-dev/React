import React from 'react'

const App = () => {

  const user={
    username:'Sujal',
    age:18,
    City:'Bhopal',
  }

  localStorage.setItem('user',JSON.stringify(user));//Object--->String Conversion
  const userA=JSON.parse(localStorage.getItem('user'));//String--->Object Conversion

  user.username="Krati";//update 

  localStorage.setItem('user',JSON.stringify(user));//Convert to string

  console.log(user);//Print  
  return (
    <div>
      App
    </div>
  )
}

export default App
