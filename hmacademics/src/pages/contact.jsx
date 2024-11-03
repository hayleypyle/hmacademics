import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Contact(){
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
        </header>
        <div className="contactForm"> <p>Schedule a Tutoring Session</p></div>
        </>

    )
}