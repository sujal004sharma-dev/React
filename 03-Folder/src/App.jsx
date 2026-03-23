import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
     <Card user='Sujal' age={18} img='https://images.unsplash.com/photo-1770699196996-1c94e091cdfb?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Krati' age={21} img='https://images.unsplash.com/photo-1773243086593-d36487e39a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
