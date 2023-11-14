import React,{useState} from 'react'
import {useDispatch } from 'react-redux'
import logo from  '../assests/delete.png';
import { removefromCart, removeid } from '../redux/action';
function Blog(prop) {
 const item=prop.item
  const dispatch=useDispatch()
  const [showmore,setShowmore]=useState(false)
  const toggleMore=()=>{
    setShowmore((prev)=>!prev)
  }
  const removeItem=()=>{
    dispatch(removefromCart(item.id))
    dispatch(removeid(item.id))
  }
  console.warn(item)
  return (
    <div key={item.id} className='grid grid-cols-2 border-b-2 py-4 border-black'>
        <div>
            <img src={item.image} alt='no' className='w-44 h-44'/>
        </div>
        <div className='grid grid-cols-1 gap-y-2'>
           <div className='grid grid-cols-1 gap-y-2'>
           <div className='text-base font-bold cursor-pointer'>{item.title}</div>
            <div className='text-xs font-light cursor-pointer'  onClick={toggleMore}>
            {showmore ? ` ${item.description}` : `${item.description.substring(0, 50)}...`}
           </div>
          </div>
          <div className='flex justify-between'>
            <div className='font-semibold text-green-600 self-center'><span className=' mr-2'>Rs</span>{((item.price)*83.29).toFixed(2)}</div>
            <button className='' onClick={removeItem}><img src={logo} className='w-10 h-10'/></button>
          </div>
        </div>   
    </div>
  )
}

export default Blog