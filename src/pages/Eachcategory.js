import React from 'react'
import Nav from '../components/Nav'
import Main from '../components/Main'
import { useSelector } from 'react-redux'
function Eachcategory() {
  const val=useSelector((state)=>state.catData) 
  console.warn(val)
  return (
    <div>
        <Nav/>
        <Main category={val}/>
    </div>
  )
}

export default Eachcategory