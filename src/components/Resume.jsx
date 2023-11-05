import { useState } from 'react';
import ResumeFile from "./../assets/resume.svg"

function Resume() {
    return (
        <>
        <div className="custom-height text-center mt-3">Resume</div>
<div className="row justify-content-center">
  <div className="col-md-7 col-sm-9 h-200 custom-border resume-height">
    <div className="row">
      <div className="col-md-6">
        <h2>Front-End Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
         
        </ul>
        <h2 className="skillsHeader">Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Express</li>
          <li>Node</li>
          <li>MySQL Sequelize</li>
          <li>MERN</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <a href="https://github.com/JoelGetzke" target="_blank">
          <img src={ResumeFile} alt="github" />
        </a>
        <h1>click Resume</h1>
      </div>
    </div>
  </div>
</div>


        </>
    
    )
}

export default Resume