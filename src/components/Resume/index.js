import React from "react";
import resume from "../../assets/docs/Resume.pdf";

function Resume() {

  return (
    <div>
      <div className="res">
        <h2>Resume</h2>
      </div>
      <div className="proficiency">
        <div className="front">
          <h4>Front-end Proficiencies</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
        </div>
        <div className="back">
          <h4>Back-end Proficiencies</h4>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
        </div>    
      </div>
      <div className="doc">
        <iframe title="resume" src={resume}></iframe>
      </div>  
    </div>
  )
}

export default Resume;