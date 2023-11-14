import React, { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { addToCart, addid, removefromCart, removeid } from '../redux/action'
function Card(prop) {
    const item=prop.item
    const id=useSelector((state)=>state.idData)
    const [showmore,setShowmore]=useState(false)
    const [showhead,setShowhead]=useState(false)
    const [add,setAdd]=useState(false)
    const dispatch=useDispatch()
    const toggleHead=()=>{
        setShowhead((prev)=>!prev)
    }
    const toggleMore=()=>{
        setShowmore((prev)=>!prev)
    }
    const toggleAdd=()=>{
       setAdd((prev)=>!prev)
       console.warn(item)
       console.warn(item.id)
       add?dispatch(removefromCart(item.id)):dispatch(addToCart(item))
       add?dispatch(removeid(item.id)):dispatch(addid(item.id))
    }
  return (
    <div key={item.id} className='px-8  py-3 grid grid-cols-1 place-items-center gap-y-3  rounded-md items-center shadow-md cursor-pointer hover:scale-105 hover:shadow-xl' >
       <h2 className='text-base font-bold cursor-pointer' onClick={toggleHead}>
       {showhead ? ` ${item.title}` : `${item.title.substring(0, 20)}...`}
       </h2>
       <div className='text-xs font-light cursor-pointer'  onClick={toggleMore}>
       {showmore ? ` ${item.description}` : `${item.description.substring(0, 50)}...`}
        </div>
       <img src={item.image} className='w-44 h-44'/>
       <div className='flex lg:flex-row lg:justify-between w-full flex-col'>
          <div className='font-semibold text-green-600 self-center lg:mb-0 mb-4'><span className=' mr-2'>Rs</span>{((item.price)*83.29).toFixed(2)}</div>
          <button className=' capitalize font-semibold border-2 rounded-full border-black text-sm p-2' onClick={toggleAdd}>{
             id.includes(item.id)? `remove from cart` : 'add to cart'
          }</button>
       </div>
        
    </div>
  )
}

export default Card