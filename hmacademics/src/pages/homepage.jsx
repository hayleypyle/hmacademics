import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function Home(){
    return(
        <>
        <header>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <h1>H&M Academics</h1>
        </header>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam quibusdam laborum rem excepturi aperiam mollitia, ea ad repudiandae corporis dolores expedita molestias velit porro voluptate enim magni consequatur asperiores tempora rerum impedit adipisci amet cumque. Culpa explicabo laudantium, est maxime reprehenderit incidunt maiores aliquid? Totam hic rem veritatis quasi!</div>
        </>

    )
}