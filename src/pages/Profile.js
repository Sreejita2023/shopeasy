import React,{useEffect,useState} from 'react'
import Nav from '../components/Nav'
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import  app  from '../config'
function Profile() {
    const auth = getAuth(app);
    const[user,setUser]=useState("")
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.email;
              const name=uid.replace(/@.*$/,"");
              setUser(name)
            } else {
              // User is signed out
              // ...
            }
          });
      }, []);
  return (
    <div>
        <Nav/>
        <div className='flex flex-col w-screen '>
           <div className=' font-extrabold text-3xl py-32 mx-auto'>Hi <span>{user}</span></div>
           <button  className='bg-green-600 w-5/12 py-2 rounded-md text-white text-lg font-semibold mt-10 mx-auto '><NavLink to='/'>Log out</NavLink></button>
        </div>
    </div>
  )
}

export default Profile