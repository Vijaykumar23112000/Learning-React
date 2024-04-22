import React, { useState } from "react"

const Component = () => {

    const [text , setText] = useState<string>("")
    const [email , setEmail] = useState<string>("")

    const emailInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()  
        console.log(`my name is ${text} and my email is ${email}`)
        
        const formData = new FormData(e.currentTarget)
        console.log(formData);

        const data = Object.fromEntries(formData)
        console.log(data)
        
        setText("")
        setEmail("")
    }

    return (
        <div>
            <h1>Events</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter a text" 
                    value={text} 
                    onChange={e=>setText(e.target.value)}
                    name="text"
                />
                <input 
                    type="email" 
                    placeholder="Enter an Email" 
                    value={email} 
                    onChange={emailInput}
                    name="email"
                />
                <button type="submit">Submit</button>
            </form>
            <hr />
            <h2>Text Content : {text}</h2>
            <h2>Email Content : {email}</h2>
        </div>
    )
}

export default Component
