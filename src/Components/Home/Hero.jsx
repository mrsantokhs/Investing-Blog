import React from 'react';
import './Hero.css';
import heroImage from "../../Assets/hero-image.svg"
import {Link} from "react-router-dom"



function Hero() {
    return (
        <div className="main-hero d-flex">
            <div class="hero-left-text">
            
                <h1>Investing Blog is a place to start your Investment Learning Journey</h1>
                <p>It's easy and free to search any investment topic. </p>
                <button className="btn btn-dark"><Link to="/join" className="hero-link">Get Started</Link></button>
            </div>

            <div className="hero-right-image">
                <img src={heroImage}/>   
            </div>
            
        </div>
    )
}

export default Hero

