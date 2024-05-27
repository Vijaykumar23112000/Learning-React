import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProfilePage = () => {

    const params = useParams()
    return (
        <div>
            <h1 className='text-4xl'>Welcome From ProfilePage Component</h1>
            <h3 className='text-2xl'>Your profile id is : {params.profileId}</h3>
            <Link to={"/profiles"}>Go To Profiles Page</Link>
        </div>
    )
}

export default ProfilePage