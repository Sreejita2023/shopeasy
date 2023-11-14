import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog'
function Cart() {
  const val=useSelector((state)=>state.cartData)
  console.warn(val)

  return (
    <div className='grid grid-cols-1 gap-y-6 '>
      { 
        val.map((item)=>(<Blog item={item}/>))
      }
    </div>
  )
}

export default Cart