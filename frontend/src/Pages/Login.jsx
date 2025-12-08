import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Login = () => {
 const [LoginData,setLoginData] = useState({
        
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        setLoginData({...LoginData,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit =async (e)=>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:8000/api/login",LoginData)
            
            console.log(res.data.token)

            localStorage.setItem('accessToken', res.data.token)

            setLoginData({
                
                email:"",
                password:""
            })

            alert(res.data.message)

        }catch(err){
            alert(err.response?.data?.message  || "something went wrong ")
        }

    }

  return (
    <div>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center w-1/3 p-6 bg-gray-200 border rounded-lg '>
             <h1 className='text-3xl '>Login</h1>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
          
            <input className='p-2 mt-2 text-2xl border' value={LoginData.email} name="email" onChange={handleChange} type='email' required placeholder='Enter your Email'/>
            <input className='p-2 mt-2 text-2xl border' value={LoginData.password} name="password" onChange={handleChange} type='password' required placeholder='Create your Password'/>
            <button  className="p-2 mt-3 text-white bg-blue-600 rounded hover:bg-blue-700" type='submit'>Log in</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login