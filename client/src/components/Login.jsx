import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=()=>{
        const payload={email,password}
        console.log('payload:', payload)
        
        fetch('https://social-media-aqqn.onrender.com/users/login',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json())
        .then((res)=>{
                console.log(res)
                localStorage.setItem("token",res.token)
                navigate("/posts")
                })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <h3>User Login</h3>
      
      <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
      <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Login now!</button>
    </div>
  )
}

export default Login
