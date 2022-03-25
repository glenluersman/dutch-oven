import React from 'react';
import Project from '../Project';

function Portfolio() {
  
  return (
    <section id="portfolio" className="work">
        <div>
            <h2>Portfolio</h2>
        </div>
        <div className="container">
          <Project />
        </div>
    </section>
  )
}

export default Portfolio;