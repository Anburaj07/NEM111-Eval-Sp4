import React, { useEffect, useState } from 'react'

const Posts = () => {
    const [posts,setPosts]=useState([])
      const [title,setTitle]=useState('')
      const [body,setBody]=useState('')
      const [device,setDevice]=useState('')
      useEffect(()=>{
        fetch("http://localhost:8080/posts",{
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        }).then((res)=>res.json())
        .then(res=>{
            setPosts(res)
        }).catch(err=>console.log(err))
      },[posts])

      const handleDelete=(id)=>{
        fetch(`https://social-media-aqqn.onrender.com/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem('token')
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
      }
  return (
    <div>
        {posts.map((el)=>(
            <div key={el._id}>
                <h3>{el.title}</h3>
                <h3>{el.body}</h3>
                <h3>{el.device}</h3>
                <button onClick={()=>{}}>Edit</button>
                <button onClick={()=>{handleDelete(el._id)}}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default Posts
