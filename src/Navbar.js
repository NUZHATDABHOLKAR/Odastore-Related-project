import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className='hidden md:block w-full bg-sky-900 fixed '>
      <div className=' flex flex-row justify-between'>
       <img className=' ml-12' src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b71593d0f44b0e3_oda%20studio.svg" alt="" />
       <div className='flex flex-row  mr-12'>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white my-12 justify-end border border-slate-300 rounded-md py-2 pl-5 pr-2 " placeholder="search anything " type="text" name="search"/> 
       <button className='border-2 border-white ml-2 text-white p-1 px-4 w-32 h-10 mt-12 rounded-lg hover:bg-sky-800'>search</button> 
       </div>
       </div>
    </div>
    
    <div className='block md:hidden w-full bg-sky-900 fixed '>
    <div className='fixed z-10 bg-sky-600 w-full flex flex-col md:flex-row p-2'>
   
      <img  className="mx-auto p-4" src="https://uploads-ssl.webflow.com/6178eb305b7159c1df44b0b7/6178eb305b71593d0f44b0e3_oda%20studio.svg" alt="" />
  
       <input class="placeholder:italic placeholder:text-slate-400 block bg-white my-12 justify-end border border-slate-300 rounded-md py-2 pl-5 pr-2 " placeholder="search anything " type="text" name="search"/>
       <button class="rounded-lg bg-color-900 border-2 border-white p-2 text-white mr-4 px-10  ml-2 border-2 border-white">Search</button>
      </div>
    </div>
    </div>
   
    
  )
}

export default Navbar