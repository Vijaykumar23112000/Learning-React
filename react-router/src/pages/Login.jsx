import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        if(!name || !email) return;
        setUser({
            name:name,
            email:email
        })
        navigate('/dashboard')
    }

    return (
        <section className='section'>
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="uname">Name</label>
                    <input type="text" id='uname' value={name} onChange={e=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="uemail">Email</label>
                    <input type="email" id='uemail' value={email} onChange={e=>setEmail(e.target.value)} />
                </div>
                <div><input type="submit" value="Login" /></div>
            </form>
        </section>
    )
}

export default Login
