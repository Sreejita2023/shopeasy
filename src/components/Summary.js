import React from 'react'
import { useSelector } from 'react-redux'
function Summary() {
  const val=useSelector((state)=>state.cartData)
  let amount = val.length && val.map(item=>item.price).reduce((prev, next)=>prev+next)
  return (
    <div className='grid grid-cols-1 place-content-between'>
      <div className='grid grid-cols-1 gap-y-1 mb-20' >
        <div className='uppercase text-green-600 text-xl'>your cart</div>
        <div className='uppercase text-green-600 text-6xl font-semibold'>Summary</div>
        <div  className='font-semibold'>Total Items : <span>{val.length}</span></div>
      </div>
      <div className='grid grid-cols-1 gap-y-2'>
          <div className=''><span>Amount: </span><span className='text-green-600 font-semibold '>Rs {((amount)*83.29).toFixed(2)}</span></div>
          <div className=''><span>Discount: </span><span className='text-green-600 font-semibold '>Rs {((amount/10)*83.29).toFixed(2)}</span></div>
          <div className=''><span>Tax: </span><span className='text-green-600 font-semibold '>Rs 1000</span></div>
          <div className=''><span>Total: </span><span className='text-green-600 font-semibold '>Rs {amount==0 ?0 :(((amount-(amount/10)))*83.29+1000).toFixed(2)}</span></div>
          <button className='bg-green-600 w-full text-white rounded-md font-bold py-3 text-base '>Checkout Now</button>    
      </div>
      
    </div>
  )
}

export default Summary