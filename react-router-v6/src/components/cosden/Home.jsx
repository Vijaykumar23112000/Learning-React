import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl'>Hello From Home Component</h1>
            <Link to="/profiles">Go To Profiles</Link>
        </div>
    )
}

export default Home
