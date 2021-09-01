import React from 'react';
import { data } from '../../data/data';
import Skill from '../Skill/Skill';
import Education from '../Education/Education';
import About from '../About/About';
import Project from '../Project/Project';
import './Home.css'

const Home = () => {
    console.log("data")
    console.log(data)
    return (
        <div className="Home">
            <div className="Home-container">
                <div className="Home-title">
                    <div className='Home-img'>
                        <img src={data.image} alt="profile" className='profile'/>
                    </div>
                    <div className='Home-Header'> 
                        <p className='Name'> <span className='Name'>{data.fname}</span> {data.lname}</p>
                        <p className='Header'>A <strong className='Header'>{data.job}</strong> {data.summery}</p>
                        {data.contact.map((contact, index) => {
                            return <a href={contact.link} id={index}><i className={contact.image}></i></a>
                        })}
                        <a href={`mailto:${data.email.address}`}><i className={data.email.image}></i></a>
                    </div>
                </div>
                <About about={data.about}/> 
                <Skill skills={data.skills}/>
                <Education education={data.education}/>
                <Project projects={data.projects}/>
            </div>
        </div>
    );
}

export default Home;