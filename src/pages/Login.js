import React,{useState}from 'react'
import photo from '../assests/login.png'
import logo from  '../assests/logo.png';
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import  app  from '../config';
import { NavLink } from 'react-router-dom';
function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]=useState("")
  const auth = getAuth(app);
  const submit=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
        console.warn("it is an error")
    });
  }
  return (
    <div className='w-screen flex flex-row justify-between'>
          <img src={photo} className='w-6/12 min-h-screen float-left'/>
           <div className='w-6/12 float-right flex flex-col items-center min-h-screen'>
             <div className='w-28 h-28 '><img src={logo} alt="Logo" className='max-w-full max-h-full' /></div>
             <div className=' text-3xl font-semibold mb-20'>
               Sign in to Shopeasy
             </div>
             <div className='w-full flex flex-col items-center'>
               <div className='flex flex-row justify-center items-center w-full'>
                 <label for='email' className='w-7/12 mb-6'>
                  <input type='email' name='email' placeholder='Enter your email'
                      onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    value={email}
                     className='py-2 focus:outline-none border-slate-300 border-2 rounded-md w-full text-base pl-3 focus:border-green-600'
                  />
                 </label> 
               </div>
               <div className='flex flex-col justify-center items-center w-full mb-5'>
                <label for="pass"></label>
                <input
                    id="pass"
                    type={
                        showPassword ? "text" : "password"
                    }
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    placeholder='Enter your password'
                    className='py-2 focus:outline-none border-slate-300 border-2 rounded-md w-7/12 text-base pl-3 focus:border-green-600'
                />
                </div>
                <div className='flex flex-row w-7/12'>
                <label for="check" className='mr-2'>Show Password</label>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                        onChange={() =>
                    setShowPassword((prev) => !prev)
                    }
                />
                </div>
             </div>
             
             <button className='bg-green-600 w-7/12 py-2 rounded-md text-white text-lg font-semibold mt-20' onClick={submit}>
             <NavLink to="/home">Log in </NavLink>
             </button>
             <div className='text-sm mt-8'>Not a member ? <span className='text-green-600 font-bold '><NavLink to="/signup"> Sign up for now </NavLink></span></div>
           </div>
    </div>
  )
}

export default Login