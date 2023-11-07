import React from 'react'
import JoelPicture from "../assets/React_Profile_Picture.jpg";

function About() {
    return (
        <div className='porfolio-div'>
        <img className='mt-4 custom-border' src={JoelPicture} alt="Picture of creater"/> <br/>
        <div className="custom-height custom-screen text-center">About Me </div>
        <div className='about-me-description mb-20'> Motivated Fullstack Coding graduate eager to learn more and contribute for success. I have knowledge in HTML/CSS Javascript for front and backend development, utilizing node.js and proficient in frameworks like React, bootstrap, jquery, express.js and others. Currently live in Duluth MN, where I can often be found hiking on weekends enjoying nature.</div>
        </div>
    )
}

export default About