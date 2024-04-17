import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({user}) => {
    return (
        <section className='section'>
            <h2>Dashboard</h2>
            <h1>Hello {user?.name}</h1>
            <Link to="/">Home</Link>
        </section>
    )
}

export default Dashboard
