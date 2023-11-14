import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addcategory } from '../redux/action'
import { NavLink } from 'react-router-dom'
function Sub(props) {
  const item=props.item
  const dispatch=useDispatch()
  const help=()=>{
    console.warn("you click")
    dispatch(addcategory(item.category))
  }
  return (
    <div className='px-8  py-3 grid grid-cols-1 place-items-center place-content-center gap-y-5  rounded-md items-center shadow-md cursor-pointer hover:scale-105 hover:shadow-xl'  >
                   
                     <div className='text-lg font-bold capitalize'>{item.category} </div>
                     <div> <img src={item.photo} className='w-64 h-96'/></div>
                     <button  className=' capitalize font-bold rounded-full bg-green-600 text-white text-sm p-2 mb-4 px-6' onClick={help}><NavLink to={`${item.link}`}>Click Here</NavLink></button>
                   
    </div>
  )
}

export default Sub