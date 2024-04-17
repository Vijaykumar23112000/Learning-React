import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav style={{display:"flex", flexDirection:"row" , gap:"20px"}}>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/products" >Products</Link>
        </nav>
    )
    
}

export default Navbar
