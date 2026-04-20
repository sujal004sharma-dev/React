import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Mens from './pages/Mens'
import Womens from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>

      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/courses' element={<Courses/>}/>
       <Route path='/courses/:Courseid'  element={<CourseDetail/>}/>

<Route path='/product' element={<Product/>}>

       <Route path='/product/mens'element={<Mens/>}/>
       <Route path='/product/womens'element={<Womens/>}/>
       <Route path='/product/kids'element={<Kids/>}/>
       

       </Route>
       

       <Route path='/*' element={<Notfound/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
