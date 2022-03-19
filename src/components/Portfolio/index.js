import React from 'react';
import troop586 from "../../assets/images/troop-586.PNG";
import sweetSportsStuff from "../../assets/images/sweet-sports-stuff.PNG";
import pizzaProject from "../../assets/images/pizza-project.PNG";
import techBlog from "../../assets/images/tech-blog.PNG";
import javaScript from "../../assets/images/code-quiz.PNG";
import weatherDashboard from "../../assets/images/weather-dashboard.PNG";
import { MdOutlineChromeReaderMode } from 'react-icons/md';
import { FaGithubSquare } from "react-icons/fa";

function Portfolio() {
  
  return (
    <section id="work" className="work">
        <div>
            <h2>Portfolio</h2>
        </div>
        <div className="container">
            <div className="work-link">    
                <p className="title">Troop 586</p>
                <img src={troop586} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://troop586.com">
                  <MdOutlineChromeReaderMode />   
                </a>
                <a href="https://github.com/glenluersman/troop-586">
                  <FaGithubSquare />
                </a>
            </div>
            <div className="work-link">
                <p className="title">Sweet Sports Stuff</p>   
                  <img src={sweetSportsStuff} alt="#" width="400" height="200" />
                  <br></br>
                <a href="https://arcane-reef-45830.herokuapp.com/">
                <MdOutlineChromeReaderMode />
                </a>
                <a href="https://github.com/glenluersman/sweet-sports-stuff">
                <FaGithubSquare />
                </a>
            </div>
            <div className="work-link"> 
                <p className="title">Project Pizza</p>   
                <img src={pizzaProject} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/project-pizza/">
                <MdOutlineChromeReaderMode />
                </a>
                <a href="https://github.com/glenluersman/project-pizza">
                <FaGithubSquare />
                </a>
            </div>    
            <div className="work-link">    
                <p className="title">Tech Blog</p>
                <img src={techBlog} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/tech-blog/">
                <MdOutlineChromeReaderMode />
                </a>
                <a href="https://github.com/glenluersman/tech_blog">
                <FaGithubSquare />
                </a>
            </div>
            <div className="work-link">    
                <p className="title">Javascript Code Quiz</p>
                <img src={javaScript} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/javascript-code-quiz/">
                <MdOutlineChromeReaderMode />
                </a>
                <a href="https://github.com/glenluersman/javascript-code-quiz">
                <FaGithubSquare />
                </a>
            </div>
            <div className="work-link">    
                <p className="title">Weather Dashboard</p>
                <img src={weatherDashboard} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/weather-dashboard/">
                <MdOutlineChromeReaderMode />
                </a>
                <a href="https://github.com/glenluersman/weather-dashboard">
                <FaGithubSquare />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Portfolio;