import React from 'react';
import './Education.css'

const Education = ({ education }) => {
    return (
        <div className="Home-education" id='education'>
            <h3>EDUCATION</h3>
                {education.map((education, index) => {
                    return (
                        <div className="Home-education-item" key={index}>
                            <div className="Home-education-logo">
                                <img src={education.logo} alt={education.name} className='Education-logo'/>
                            </div>
                            <div className="Home-education-info">
                                <h4>{education.name}</h4>
                                <h5>{education.degree}</h5>
                                <h5>{education.graduation}</h5>
                                <h6>{education.gpa}</h6>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Education;