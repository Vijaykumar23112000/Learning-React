import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const ProfilesPage = () => {

    const profiles = [1, 2, 3, 4, 5];

    return (
        <div className='flex gap-28'>
            <div className='flex flex-col gap-2'>
                {
                    profiles.map(profile => <NavLink 
                                                className={({isActive}) => isActive ? "text-red-700" : ""}
                                                key={profile} 
                                                to={`/profiles/${profile}`}
                                            >Profile {profile}
                                            </NavLink>)
                }
            </div>
            <Outlet />
        </div>
    )
}

export default ProfilesPage
