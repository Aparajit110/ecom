import React, { useState } from 'react'
import amazonLogo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const NavBar = () => {

  const navigate=useNavigate();

  const [Filter , setFilter] = useState("");

  const Handler = async (e)=>{
      const value = e.target.value;
       setFilter(value);


      const prod = await axios.get("http://localhost:8000/api/prodSearch",{params : {name : Filter}})

      navigate("/search" , {state : {product : prod.data}})
  }
  

  
  return (
    <div className='flex items-center p-2 justify-evenly bg-blue-950'>
      <img src={amazonLogo} alt="Logo" className='h-20 rounded-lg w-25'/>

      <input 
        value={Filter}
        onChange={Handler}
        type="text" 
        placeholder="Search..." 
        className="w-1/2 p-3 border border-gray-300 rounded-md"
      />

      <div className="flex items-center justify-center gap-4 ">
        <button onClick={()=>navigate("/SignUp")} className="p-2 text-white bg-blue-500 rounded-md">Sign Up</button>
        <button onClick={()=>navigate("/login")} className="p-2 text-white bg-green-500 rounded-md">Login</button>
      </div>

      <button className="p-2 text-white bg-yellow-500 rounded-md">Cart</button>
    </div>
  )
}

export default NavBar