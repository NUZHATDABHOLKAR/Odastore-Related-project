import React from 'react'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
function Nav() {
  return (
   <nav className='flex flex-col w-full  mx-auto lg:flex-row  justify-center mx-auto fixed bg-white z-10 mt-10 ' >
   <Link  className="text-blue-900 ml-9 p-2 hover:text-blue-700 font-bold " to='/'>Home</Link>
   <Link className="text-blue-900 ml-9 p-2 hover:text-blue-700 font-bold " to='/aboutus'>About us</Link>
   <Link className="text-blue-900 ml-9 p-2 hover:text-blue-700 font-bold " to='/pricing'>Pricing</Link>
   <Link className="text-blue-900 ml-9 p-2 hover:text-blue-700 font-bold " to='/Contactus'>Contact us</Link>
   <Link className="text-blue-900 ml-9 p-2 hover:text-blue-700 font-bold " to='/SignIn'>Sign IN</Link>
   <Link className="text-blue-900 ml-9 p-2 hover:text-blue-700 font-bold " to='/Aiplayground'>AI Playground</Link>
   <Link className="text-blue-900 ml-9 p-2 hover:text-blue-700 font-bold " to='/API'>API</Link>
   </nav>
  )
}

export default Nav