import React from 'react'
import Card from './Card'
import  products  from '../data'
function Main(props) {
  const category=props.category
  const all="all"
  return (
    <div className='grid grid-cols-3 w-10/12 mx-auto gap-x-8 gap-y-16 my-12  '>
       {
        category===all ?
        products.map((item)=>(
          <Card item={item}/>
        )):
        products.filter((item)=>(item.category==category)).map((item)=>(
          <Card item={item}/>
        ))
       }
    </div>
  )
}

export default Main