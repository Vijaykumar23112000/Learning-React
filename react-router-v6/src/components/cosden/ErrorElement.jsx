import React from 'react'
import { Link } from 'react-router-dom'

const ErrorElement = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-4xl'>Error 404 : Page Not Found</h1>
            <Link to="/">Home from Link tag</Link>        
        </div>
    )
}

export default ErrorElement
