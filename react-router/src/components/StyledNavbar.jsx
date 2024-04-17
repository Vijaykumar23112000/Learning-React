import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
    return (
        <nav style={{display:"flex", flexDirection:"row" , gap:"20px"}}>
            <NavLink style={({isActive})=>{
                return {color:isActive?"red":"blue"}
            }} to="/" >Home</NavLink>
            <NavLink style={({isActive})=>{
                return {color:isActive?"red":"blue"}
            }} to="/about" >About</NavLink>
            <NavLink style={({isActive})=>{
                return {color:isActive?"red":"blue"}
            }} to="/products" >Products</NavLink>
            <NavLink style={({isActive})=>{
                return {color:isActive?"red":"blue"}
            }} to="/login" >Login</NavLink>
          
        </nav>
    )
}

export default StyledNavbar
