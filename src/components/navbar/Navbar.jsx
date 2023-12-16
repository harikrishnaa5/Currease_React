import React from 'react'
import "./navbar.css"
import Logo from "../../assets/currease logo.png"
import Shop from "../../assets/shop-icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
                <img class="nav-logo" src={Logo} alt="logo" />
                <span class="nav-right">
                    <ul class="nav-menu">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li><Link to='/login' style={{textDecoration:"none", color: "gray"}}>Login</Link></li>
                    </ul>
                    <div class="btn">Shop <img src={Shop} alt=""/></div>
                </span>
            </nav>
  )
}

export default Navbar