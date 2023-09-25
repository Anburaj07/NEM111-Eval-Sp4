import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [gender,setGender]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()
    
    const handleSubmit=()=>{
        const payload={name,email,gender,password}
        console.log('payload:', payload)
        
        fetch('https://social-media-aqqn.onrender.com/users/register',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            navigate("/login")
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <h3>User Registeration</h3>
      <input type="text" placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='Enter gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
      <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>SignUp now!</button>
    </div>
  )
}

export default SignUp
