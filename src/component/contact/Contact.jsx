import React from 'react'
import "./contact.scss"
import { useState } from 'react';

export default function Contact() {
    const [message,setMessage] = useState(false);
    const handleSubmit =(e) =>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="images/QA.png" alt="contact" />
            </div>
            <div className="right">
                <h1> Have some questions?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder = "  First Name" />
                    <input type="text" placeholder = "  Last Name" />
                    <input type="text" placeholder = "  Email" />
                    <textarea placeholder="  Message"></textarea>
                    <button type="submit" >Send</button>
                    {message && <span>Thanks!!! I will get back to you :)</span>} 
                </form>
            </div>
        </div>
    )
}
