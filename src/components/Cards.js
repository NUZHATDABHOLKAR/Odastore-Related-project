import React from 'react'
import { BsChevronRight } from "react-icons/bs";
function Cards(props) {
  return (
    <div className='p-4 border-8 border-white flex flex-col rounded-md ml-12 w-72 h-80 py-6 bg-sky-100 z-0 drop-shadow-2xl hover:bg-gray-100 my-6 '>
        <h1 className='text-2xl mx-auto mt-6 font-bold '>{props.h1}</h1>
        <div className='mx-auto my-2'>{props.icon}</div>
        <h4 className="text-xs text-center">{props.h4}</h4>
        <a  className='my-1 font-bold flex flex-row  justify-center my-4' href={props.link} >{props.h} <BsChevronRight className="mt-1 font-bold"/></a>
    </div>
  )
}

export default Cards