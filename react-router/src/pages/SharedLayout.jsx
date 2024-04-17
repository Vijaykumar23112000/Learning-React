import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import StyledNavbar from '../components/StyledNavbar'

const SharedLayout = () => {
    return (
        <>
            <StyledNavbar/>
            <Outlet />
            <Footer/>
        </>

    )
}

export default SharedLayout
