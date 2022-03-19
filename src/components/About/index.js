import React from 'react';
import profilePicture from "../../assets/images/profile-picture.jpg"

function About() {

  return (
    <section id="about-me" className="about">
        <div className="imgdiv">
            <img src={profilePicture} alt="placeholder" />
        </div>
        <div>
            <h2>About Me</h2>
            <p>I’m a Creative Fullstack Web Developer in training with a passion for learning and working outside of my comfort zone. I’m currently taking a Fullstack Web Developer Bootcamp through The Ohio State University. I’m looking for an opportunity to join a passionate team in order to contribute and help grow a company to its full potential.</p>
        </div>
    </section>
  )
}

export default About;