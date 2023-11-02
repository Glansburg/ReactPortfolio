import React from 'react'
import JoelPicture from "../assets/React_Profile_Picture.jpg";

function About() {
    return (
        <div className='porfolio-div'>
        <img className='mt-4 custom-border' src={JoelPicture} alt="Picture of creater"/> <br/>
        <div className="custom-height text-center mt-3">About Me </div>
        <div className='about-me-description'> I'm a motivated fullstack coding bootcamp graduate who is always eager to learn more when it comes to code.  Currently I have knowlege in HTML/CSS Javascript for front and backend development, utilizing node.js.  I have learned frameworks like React, bootstrap, jquery, express.js and others.   I currently live in Duluth MN where I can often be found hiking on the weekends enjoying nature.</div>
        </div>
    )
}

export default About