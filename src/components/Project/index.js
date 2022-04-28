import React, { useState } from 'react';
import { MdOutlineChromeReaderMode } from 'react-icons/md';
import { FaGithubSquare } from "react-icons/fa";

function Project() {
  const [projects] = useState([
    {
      name: 'Troop 586',
      description: 'Troop 586 is a website built with HTML, and CSS to provide an online presence in the community for Troop 586 in Tipp City, Ohio.                                                ',
      link: 'https://troop586.com',
      github: 'https://github.com/glenluersman/troop-586',
      image:  require('../../assets/images/troop1.PNG')
    },
    {
      name: 'Fire In The Hole',
      description: 'Fire in the hole is an app built with Node.js, Express.js, Mongoose, MongoDB, React, CSS, Bootstrap, and Javascript to sell hot sauces of varying intensity.                    ',
      link: 'https://murmuring-lake-91341.herokuapp.com/',
      github: 'https://github.com/YourFunkyDad/Hot-Sauce',
      image: require('../../assets/images/FireInTheHole.PNG')
    },
    {
      name: 'Sweet Sports Stuff',
      description: 'Sweet Sports Stuff is an app built with Node.js, Express.js, Sequelize, MySQL, Handlebars, CSS, Bulma, and Javascript to to browse OSU apparel and write reviews of the apparel.',
      link: 'https://arcane-reef-45830.herokuapp.com/',
      github: 'https://github.com/glenluersman/sweet-sports-stuff',
      image:  require('../../assets/images/SweetSportsStuff.PNG')

    },
    {
      name: 'Project Pizza',
      description: 'Project Pizza is an app built with HTML, CSS, Bulma, and Javascript to search for pizzerias within 25 miles of user input address.                                              ',
      link: 'https://glenluersman.github.io/project-pizza/',
      github: 'https://github.com/glenluersman/project-pizza',
      image:  require('../../assets/images/ProjectPizza.PNG')
    },
    {
      name: 'Tech Blog',
      description: 'Tech Blog is an app built with Node.js, Express.js, Sequelize, MySQL, handlebars, CSS, and JavaScript to allow developers to post and comment on articles.                      ',
      link: 'https://glenluersman.github.io/tech-blog/',
      github: 'https://github.com/glenluersman/tech_blog',
      image:  require('../../assets/images/TechBlog.PNG')
    },
    {
      name: 'Password Generator',
      description: 'Password Generator is an app built with HTML, CSS, and Javascript that generates a password based on user input.                                                                ',
      link: 'https://glenluersman.github.io/javascript-code-quiz/',
      github: 'https://github.com/glenluersman/javascript-code-quiz',
      image:  require('../../assets/images/password-generator.PNG')
    }
  ]);

  return (
    <>
    {projects.map((project, index) => (
        <div className="card" key={index}>
            <img className='image' src={project.image} alt={project.name} width="400" height="200" />
          <p className="title">{project.name}</p>
          <br></br>
          <p className='description'>{project.description}</p>
          <br></br>
          <div className='icon'>
            <a href={project.link}>
              <MdOutlineChromeReaderMode />   
            </a>
            <a href={project.github}>
              <FaGithubSquare />
            </a>
          </div>
        </div>
    ))}    
    </>  
        
  )
};

export default Project;