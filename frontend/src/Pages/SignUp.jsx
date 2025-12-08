import React from 'react'
import { useState } from 'react'

const SignUp = () => {

    const [formData,setformData] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        setformData({...formData,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center w-1/3 p-6 bg-gray-200 border rounded-lg '>
             <h1 className='text-3xl '>Sign Up </h1>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            <input className='p-2 mt-4 text-2xl border' value={formData.username} name="username" onChange={handleChange} type='text' placeholder='Enter your username'/>
            <input className='p-2 mt-2 text-2xl border' value={formData.email} name="email" onChange={handleChange} type='email' placeholder='Enter your Email'/>
            <input className='p-2 mt-2 text-2xl border' value={formData.password} name="password" onChange={handleChange} type='password' placeholder='Create your Password'/>
            <button  className="p-2 mt-3 text-white bg-blue-600 rounded hover:bg-blue-700" type='submit'>Sign Up</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp