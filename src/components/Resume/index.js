import React from "react";
import resume from "../../assets/docs/Resume.pdf";

function Resume() {

  return (
    <div className="res">
      <h2>Resume</h2>
      <iframe title="resume" src={resume}></iframe>
    </div>
  )
}

export default Resume;