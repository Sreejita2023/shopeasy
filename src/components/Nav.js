import React from 'react'
import { NavLink } from "react-router-dom";
import logo from  '../assests/logo.png';
import bag from '../assests/bag.png'
import { useSelector } from 'react-redux'
function Nav() {
  const val=useSelector((state)=>state.cartData)
  return (
    <div className='bg-black flex flex-row justify-between  lg:px-32 md:px-14 sm:px-10 '> 
        <div className='flex flex-row '>
         <NavLink to='/home'>
         <div className='lg:w-36 lg:h-36 md:w-28 md:h-28 w-20 h-20'>
         <img src={logo} alt="Logo" className='w-full h-full cursor-pointer' />
         </div>
         </NavLink>
         
        <div className='text-white self-center gap-y-2  grid grid-cols-1 cursor-pointer'>
          <NavLink to='/home'>
          <div className='lg:text-2xl md:text-xl text-base font-bold underline  underline-offset-4'>Shopeasy</div>
          <div className='text-sm italic'>Make your shopping more easy</div>
          </NavLink>
        </div>
       
        </div>
        <div className='grid grid-cols-4  h-36 gap-x-8 '>
           
           <div className='text-white self-center cursor-pointer lg:text-lg md:text-base text-sm'>
            <NavLink to='/home'>
              Home
            </NavLink>
           </div>

           <div className='text-white self-center cursor-pointer lg:text-lg md:text-base text-sm'>
            <NavLink to='/category'>
              Categories
            </NavLink>
           </div>
     
           <div className='text-white self-center cursor-pointer lg:text-lg md:text-base text-sm'>
            <NavLink to='/profile'>
              My Profile
            </NavLink>
           </div>

           <div className='self-center relative'> 
           <NavLink to='/cart'>
            <img src={bag} alt="Cart" className='lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 cursor-pointer'/>
            <div className='bg-white rounded-[100px] flex  justify-center items-center p-1 px-4 lg:text-lg md:text-base text-sm font-semibold absolute -top-6 left-8 '>{val.length}</div>
            </NavLink>
           </div>

           
        </div>
    </div>
  )
}

export default Nav