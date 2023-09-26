import React from 'react'
import JoelPicture from "../assets/React_Profile_Picture.jpg";

function About() {
    return (
        <div className='porfolio-div'>
        <img src={JoelPicture} alt="Picture of creater"/> <br/>
        <div className='about-me'><b>About Me</b></div>
        <div className='about-me-description'> Hi my name is Joel Getzke. I'm a fullstack coding bootcamp student who is always eager to learn more when it comes to code.  Currently I have knowlege in HTML/CSS Javascript for front and backend development.  I have learned frameworks like React, bootstrap, jquery, express.js and others.   I currently live in Duluth MN where I can often be found hiking on the weekends enjoying nature.</div>
        </div>
    )
}

export default About