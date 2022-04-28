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
            <p>Creative full stack web developer with a passion for learning and working outside comfort zone. Recently earned a certificate in full stack web development from The Ohio State University, enhancing my skills in responsive web design, JavaScript, React.js, Node.js, MongoDB and MySQL. Successfully developed an e-commerce website with 3 other collaborators that sells hot sauces of varying intensity. Passionate about creating life-enhancing user experiences and collaborating with others to develop meaningful mobile and web applications. Looking for an opportunity to join a passionate team in order to contribute and help grow the company to it’s full potential.
            </p>
        </div>
    </section>
  )
}

export default About;