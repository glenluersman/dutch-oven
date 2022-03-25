import React, { useState } from 'react';
import { MdOutlineChromeReaderMode } from 'react-icons/md';
import { FaGithubSquare } from "react-icons/fa";

function Project() {
  const [projects] = useState([
    {
      name: 'Troop 586',
      link: 'https://troop586.com',
      github: 'https://github.com/glenluersman/troop-586',
      image:  require('../../assets/images/Troop586.PNG')
    },
    {
      name: 'Sweet Sports Stuff',
      link: 'https://arcane-reef-45830.herokuapp.com/',
      github: 'https://github.com/glenluersman/sweet-sports-stuff',
      image:  require('../../assets/images/SweetSportsStuff.PNG')

    },
    {
      name: 'Project Pizza',
      link: 'https://glenluersman.github.io/project-pizza/',
      github: 'https://github.com/glenluersman/project-pizza',
      image:  require('../../assets/images/ProjectPizza.PNG')
    },
    {
      name: 'Tech Blog',
      link: 'https://glenluersman.github.io/tech-blog/',
      github: 'https://github.com/glenluersman/tech_blog',
      image:  require('../../assets/images/TechBlog.PNG')
    },
    {
      name: 'Javascript Code Quiz',
      link: 'https://glenluersman.github.io/javascript-code-quiz/',
      github: 'https://github.com/glenluersman/javascript-code-quiz',
      image:  require('../../assets/images/CodeQuiz.PNG')
    },
    {
      name: 'Weather Dashboard',
      link: 'https://glenluersman.github.io/weather-dashboard/',
      github: 'https://github.com/glenluersman/weather-dashboard',
      image:  require('../../assets/images/WeatherDashboard.PNG')
    }
  ]);

  return (
    <>
    {projects.map((project, index) => (
      <div className="work-link" key={index}>
          <p className="title">{project.name}</p>
          <img src={project.image} alt={project.name} width="400" height="200" />
          <br></br>
          <a className="icon" href={project.link}>
            <MdOutlineChromeReaderMode />   
          </a>
          <a className="icon" href={project.github}>
            <FaGithubSquare />
          </a>
      </div>
    ))}    
    </>  
        
  )
};

export default Project;