import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Contact(){
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <p>Contact Us!</p>
        </header>
        </>

    )
}