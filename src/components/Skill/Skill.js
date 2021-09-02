import React from 'react';
import './Skill.css'

const Skill = ({ skills }) => {
    return (
        <div className="Home-skills" id='skill'> 
            <h3>SKILLS</h3>
                {skills.map((skill, index) => {
                    return (
                        <div className="Home-skill" key={index}>
                            <i className={skill.image}></i>
                                <h4>{skill.name}</h4>
                         </div>
                        )
                })}
        </div>
    )
}

export default Skill;