import React from 'react';
import './Project.css'

const Project = ({ projects }) => {
    return (
        <div className="Home-projects" id='project'> 
            <h3>PROJECTS</h3>
                {projects.map((project, index) => {
                    return (
                        <div className="Home-project" key={index}>
                            <div className='Home-project-image'>
                                <img src={project.image} alt={project.title} className='project-image'/>
                            </div>
                            <div className='Home-project-description'>
                                <h4>{project.name}</h4>
                                <p className='project-description'>{project.description}</p>
                                <a href={project.url} target='_blank' rel="noopener noreferrer"><button className='project-description'>GitHub</button></a>
                                {project.website !== null ? <a href={project.website} target='_blank' rel="noopener noreferrer"><button className='project-description'>Demo</button></a> : null}
                                <br/>
                                {project.tech.map((tech, index) => {
                                    return (
                                        <i className={tech} id={index}></i>
                                    )
                                })}
                            </div>
                        </div>
                        )
                })}
        </div>
    )
}

export default Project;