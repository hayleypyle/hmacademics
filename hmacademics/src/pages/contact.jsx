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
        <div className="contactForm"> <p>Contact us with the form below. We will 
            reach out to you to confirm a day and time.</p>
        <form>
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="tel" placeholder="(999)999-9999" required/>
            <p>How do you prefer to be contacted? </p>
            <input type="checkbox" for ="email"/>
            <label for ="email">Email</label>
            <p></p><input type="checkbox" for ="text"/>
            <label for ="text">Text</label>
            <p></p><input type="checkbox" for ="call"/>
            <label for ="call">Phone Call</label>
            
            <p></p>
            <label for ="class">What class and topics are you needing tutoring for? </label>
            <p></p><textarea id="class" rows="5" cols="33" placeholder="Example: I'm taking Algebra 1 and struggling with systmes of equations" required/>
            <p></p><label for ="details">Tell us what days and times work best for you. </label>
            <p></p><textarea id="details" rows="5" cols="33"  required/>
    
            <button type="submit">Contact Us</button>
        </form>
        </div>
        </>

    )
}