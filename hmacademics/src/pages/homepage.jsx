import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Mary from '../img/Mary.jpeg'
import Hayley from '../img/pichayley.jpg'
import Logo from '../img/HMALogo.png'


export default function Home(){
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            
        </header>
        <div className="container">
        <div className="about">
        <img src={Logo}></img>
        
        </div>

        <div className="topics">
            <div className="secondary-topics">
            <div className="meet">
                <h1>Meet Mary</h1>
                <img src={Mary}></img>
            </div>
            <div className="experience">
            <h2>Experience:</h2>
            <p>Licensed Registered Nurse for 5 years.</p>
            <p> 2 years experience working as a TA for Anatomy & Physiology.</p>
            <p>6 years tutoring experience in various sciences and nursing.</p>

            <h3>I tutor the following topics:</h3>
            <ul>
                <li>Biology, Chemistry</li>
                <li>Anatomy & Physiology</li>
                <li>Nursing Courses</li>
                <li>Microbiology</li>
                <li> and more...</li>
            </ul>
            </div>
            </div>
        

            <div className="secondary-topics">
                <div className="meet">
                    <h1>Meet Hayley</h1>
                    <img src={Hayley}></img>
                </div>
            <div className="experience">
            <h2>Experience:</h2>
            <p>Bachelor’s of Math Education from TTU.</p>
            <p>Master’s of Mathematics from UTK.</p>  
            <p> 6 years experience teaching grades 9-12.</p> 
            <p> 1 year experience teaching college level Mathematics.</p>
            <h3>
                I tutor the following topics:
            </h3>
            <ul>
                <li>7th Grade, 8th Grade Math</li>
                <li>Algebra I, Algebra II, Geometry</li>
                <li>Statistics, Precalculus, Calculus I</li>
                <li>Calculus II, Calculus III, Linear Algebra</li>
                <li>and more...</li>
            </ul>
            
        </div>
        </div>
        </div>
        </div>

        <div className="schedule">
            <p>Schedule a Tutoring Session Now</p>
            <Link to="/contact"><button>Book Now</button></Link>
        </div>

        <div className="rates">
        <h2>Our Rates</h2>
            <div className="rate-box">
                <h4>Mary</h4>
                <h5>Standard Topics</h5>
                <ul>
                    <li>Biology</li>
                    <li>Chemistry I</li>
                    <li>Anatomy & Physiology</li>
                    <li>Microbiology</li>
                    <li>and more...</li>
                </ul>
                <div className="price"> $40 per hour</div>
            </div>
            <div className="rate-box">
                <h4>Hayley</h4>
                <h5>Standard Topics</h5>
                <ul>
                    <li>7th-8th Grade Math</li>
                    <li>Algebra I</li>
                    <li>Algebra II</li>
                    <li>Geometry</li>
                    <li>and more...</li>
                </ul>
                <div className="price"> $40 per hour</div>
            </div>
            <div className="rate-box">
                <h4>Mary</h4>
                <h5>Advanced Topics</h5>
                <ul>
                    <li>Fundamentals of Nursing</li>
                    <li>Medical-Surgical</li>
                    <li>Pharmacology</li>
                    <li>Pediatrics</li>
                    <li>and more...</li>
                </ul>
                <div className="price"> $50 per hour</div>
            </div>
            <div className="rate-box">
                <h4>Hayley</h4>
                <h5>Advanced Topics</h5>
                <ul>
                    <li>Statistics</li>
                    <li>PreCalculus</li>
                    <li>Calclulus I, II, and III</li>
                    <li>Linear Algebra</li>
                    <li>and more...</li>
                </ul>
                <div className="price"> $50 per hour</div>
            </div>
        </div>
        <footer>
            <Link to="/">H&M Academics</Link>
            <Link to="/contact">Contact Us</Link>
        </footer>
        </>

    )
}