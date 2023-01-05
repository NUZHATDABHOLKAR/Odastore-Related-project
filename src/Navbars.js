import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Pricing from './components/Pricing'
import SignIn from './components/SignIn'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Aiplayground from './components/Aiplayground'
import API from './components/API.js'
 import Nav from './Nav'

function Navbars() {
  return (
    <div className='mt-16 '>
         {/* <div class=" bg-white flex flex-col md:flex-row justify-center w-full ">
         <a href="#" class="text-blue-900 ml-9 p-1 hover:text-blue-700 font-bold ">Home</a>
         <a href="#" class="text-blue-900 ml-9 p-1 hover:text-blue-700 font-bold ">Sign In</a>
         <a href="#" class="text-blue-900 ml-9 p-1 hover:text-blue-700 font-bold ">About us </a>
         <a href="#" class="text-blue-900 ml-9 p-1 hover:text-blue-700 font-bold ">Discover</a>
         <a href="#" class="text-blue-900 ml-9 p-1 hover:text-blue-700 font-bold ">Events</a>
         <a href="#" class="text-blue-900 ml-9 p-1 hover:text-blue-700 font-bold ">Contact us</a>
    </div> */}
   
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/SignIN' element={< SignIn/>}></Route>
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/Contactus' element={<Contactus />}></Route>
      <Route path='/Aiplayground' element={<Aiplayground/>}></Route>
      <Route path='/Api' element={<API/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navbars