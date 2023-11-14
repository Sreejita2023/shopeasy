import React,{useState} from 'react'
import Nav from '../components/Nav'
import men from '../assests/men.png'
import women from '../assests/women.png'
import jewellery from '../assests/jewellery.png'
import gadget from '../assests/gadget.png'

import Sub from '../components/Sub'
function Category() {
  const catData=[
    {
        key:1,
        category: "men's clothing",
        photo:men,
        link:"men"

    },
    
    {
        key:2,
        category: "electronics",
        photo:gadget,
        link:"electronics"
    },
    {
        key:3,
        category: "women's clothing",
        photo:women,
        link:"women"
    },
    {
        key:4,
        category: "jewelery",
        photo:jewellery,
        link:`jewelery`
    },
  ] 
  
  return (
    <div>
        <Nav/>
        <div className='grid grid-cols-2 w-10/12 mx-auto gap-x-8 gap-y-16 my-12  '>
           {
             catData.map((item)=>(
                <Sub item={item}/>
             ))
           }
        </div>
    </div>
  )
}

export default Category