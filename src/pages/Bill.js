import React from 'react'
import Cart from '../components/Cart'
import Summary from '../components/Summary'
import Nav from '../components/Nav'
function Bill() {
  return (
    <div>
      <Nav/>
      <div className='grid grid-cols-2 w-10/12  py-6 mx-auto gap-x-14 '>
       <Cart/>
       <Summary/>
      </div>
    </div>
  )
}

export default Bill