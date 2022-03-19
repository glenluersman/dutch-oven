import React from "react";
import {  FaFileDownload } from 'react-icons/fa';

function Resume() {

  return (
    <div className="res">
      <h2>Resume</h2>
      <a className="link" href="https://docs.google.com/document/d/18uAQiT1g-TAky0kdD5PizKYOwCsUiFa5nQkqmYEnepc/edit">
        <span><FaFileDownload /></span>
        <br></br>
        <p>Click here to view my resume!</p>
      </a>
    </div>
  )
}

export default Resume;