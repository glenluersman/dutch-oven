import React from 'react';
import troop586 from "../../assets/images/troop-586.PNG";
import sweetSportsStuff from "../../assets/images/sweet-sports-stuff.PNG";
import pizzaProject from "../../assets/images/pizza-project.PNG";
import techBlog from "../../assets/images/tech-blog.PNG";
import javaScript from "../../assets/images/code-quiz.PNG";
import weatherDashboard from "../../assets/images/weather-dashboard.PNG";

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
                  Deployed URL:<br></br>https://troop586.com   
                </a>
                <br></br>
                <a href="https://github.com/glenluersman/troop-586">
                  GitHub URL:<br></br>https://github.com/glenluersman/troop-586
                </a>
            </div>
            <div className="work-link">
                <p className="title">Sweet Sports Stuff</p>   
                  <img src={sweetSportsStuff} alt="#" width="400" height="200" />
                  <br></br>
                <a href="https://arcane-reef-45830.herokuapp.com/">
                  Deployed URL:<br></br>https://arcane-reef-45830.herokuapp.com/
                </a>
                <br></br>
                <a href="https://github.com/glenluersman/sweet-sports-stuff">
                  GitHub URL:<br></br>https://github.com/glenluersman/sweet-sports-stuff
                </a>
            </div>
            <div className="work-link"> 
                <p className="title">Project Pizza</p>   
                <img src={pizzaProject} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/project-pizza/">
                  Deployed URL:<br></br>https://glenluersman.github.io/project-pizza/
                </a>
                <br></br>
                <a href="https://github.com/glenluersman/project-pizza">
                  GitHub URL:<br></br>https://github.com/glenluersman/project-pizza
                </a>
            </div>    
            <div className="work-link">    
                <p className="title">tech-blog</p>
                <img src={techBlog} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/tech-blog/">
                  Deployed URL:<br></br>https://glenluersman.github.io/tech-blog/     
                </a>
                <br></br>
                <a href="https://github.com/glenluersman/tech_blog">
                  GitHub URL:<br></br>https://github.com/glenluersman/tech_blog
                </a>
            </div>
            <div className="work-link">    
                <p className="title">Javascript Code Quiz</p>
                <img src={javaScript} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/javascript-code-quiz/">
                  Deployed URL:<br></br>https://glenluersman.github.io/javascript-code-quiz/     
                </a>
                <br></br>
                <a href="https://github.com/glenluersman/javascript-code-quiz">
                  GitHub URL:<br></br>https://github.com/glenluersman/javascript-code-quiz
                </a>
            </div>
            <div className="work-link">    
                <p className="title">Weather Dashboard</p>
                <img src={weatherDashboard} alt="#" width="400" height="200" />
                <br></br>
                <a href="https://glenluersman.github.io/weather-dashboard/">
                  Deployed URL:<br></br>https://glenluersman.github.io/weather-dashboard/     
                </a>
                <br></br>
                <a href="https://github.com/glenluersman/weather-dashboard">
                  GitHub URL:<br></br>https://github.com/glenluersman/weather-dashboard
                </a>
            </div>
        </div>
    </section>
  )
}

export default Portfolio;