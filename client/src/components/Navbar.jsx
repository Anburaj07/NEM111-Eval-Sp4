import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <h2>Social-Media App</h2>
      <Link to={"/"}> Home</Link>
      <Link to={"/signup"}> Register</Link>
      <Link to={"/login"}> Login</Link>
      <Link to={"/posts"}> Posts</Link>
      <Link to={"/"}> Logout</Link>
    </div>
  )
}

export default Navbar
