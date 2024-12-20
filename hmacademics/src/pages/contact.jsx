import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import {ContactUs} from './ContactUs'


export default function Contact(){
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
        </header>
        <ContactUs/>
        <footer>
            <Link to="/">H&M Academics</Link>
            <Link to="/contact">Contact Us</Link>
        </footer>
            </>

    )
}