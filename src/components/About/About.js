import React from 'react';
import './About.css'

const About = ( {about} ) => {
    return (
        <div className="Home-about" id='about'>
            <h3>ABOUT</h3>
            <div className="Home-about-info">
                <p>{about}</p>
            </div>
        </div>
    )
}

export default About;