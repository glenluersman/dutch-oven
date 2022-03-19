import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

function Footer() {

  return (
    <footer>
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/glen-luersman-7721a0144/">
            <span className="label"><FaLinkedin /></span>
          </a>
        </li>
        <li>
          <a href="https://github.com/glenluersman/">
            <span className="label"><FaGithubSquare /></span>
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/16961919/glenluersman">
            <span className="label"><FaStackOverflow /></span>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;