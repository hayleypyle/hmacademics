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
        <div className="contactForm">
            <div className="contactForm-inner"> <p>Contact us with the form below. We will 
            reach out to you to confirm a day and time.</p>
        <form>
            <div className="form-input"><input type="text" placeholder="Name" required/></div>
            <div className="form-input"><input type="email" placeholder="Email" required/></div>
            <div className='form-input'><input type="tel" placeholder="(999)999-9999" required/></div>
            <div  className="contact-pref">
            <p>How do you prefer to be contacted? </p>
            <input type="checkbox" for ="email"/><label for ="email">Email</label>
            <input type="checkbox" for ="text"/><label for ="text">Text</label>
            <input type="checkbox" for ="call"/><label for ="call">Phone Call</label>
            </div>
            
        
            <label for ="class">What class and topics are you needing tutoring for? </label>
            <div className='form-input'><textarea id="class" rows="5" cols="33" placeholder="Example: I'm taking Algebra 1 and struggling with systmes of equations" required/>
            </div>
            <label for ="details">Tell us what days and times work best for you. </label>
            <div className='form-input'><textarea id="details" rows="5" cols="33"  required/>
            </div>
    
            <button type="submit">Contact Us</button>
        </form>
        </div>
        </div>
        <footer>
            <p>H&M Academics</p>
            <Link to="/contact">Contact Us</Link>
        </footer>
        

        </>

    )
}