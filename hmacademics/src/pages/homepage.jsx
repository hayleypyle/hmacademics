import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Home(){
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            
        </header>
        <div className="container">
        <div className="about">
        <h1>H&M Academics</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore 
        magnam quibusdam laborum rem excepturi aperiam mollitia, ea ad 
        repudiandae corporis dolores expedita molestias velit porro voluptate 
        enim magni consequatur asperiores tempora rerum impedit adipisci amet 
        cumque. Culpa explicabo laudantium, est maxime reprehenderit incidunt 
        maiores aliquid? Totam hic rem veritatis quasi!</div>

        <div className="topics">
            <h3>Meet Mary</h3>
            <h2>Nursing Tutor</h2>
            <ul>
                <p>7th. 8th Grade Math</p>
                <p>Algebra 1, Algebra 2, Geometry</p>
                <p>Statistics, Pre Calculus, Calculus 1-3</p>
                <p>Linear Algebra and more...</p>
            </ul>
        </div>
        <div className="topics">
            <h3>Meet Hayley</h3>
            <h2>Math Tutor</h2>
            <ul>
                <p>7th. 8th Grade Math</p>
                <p>Algebra 1, Algebra 2, Geometry</p>
                <p>Statistics, Pre Calculus, Calculus 1-3</p>
                <p>Linear Algebra and more...</p>
            </ul>
        </div>
        </div>

        </>

    )
}