import React from 'react'
import './style.css'
function Cardfs(props) {
  return (
    <div className=' border-4 border-black rounded-md flex flex-col p-4 mt-4 w-80 h-80 mt-12 bg-sky-50  mx-auto'>
       <img className='img mx-auto border-2 border-black rounded-full' src={props.IMG} alt="" />
       <h4 className='text-center my-2 text-lg'>{props.p1}</h4>
       <h6 className='text-center font-bold'>{props.name}</h6>
    </div>
  )
}

export default Cardfs