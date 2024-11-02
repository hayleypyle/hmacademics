import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Mary from '../img/Mary.jpeg'
import Hayley from '../img/picHayley.jpg'


export default function Home(){
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            
        </header>
        <div className="container">
        {/* <div>
        <MySvgFile />
        </div> */}
        <div className="about">
        <h1>H&M Academics</h1>
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

        </>

    )
}