import React, { useEffect } from 'react';
import{ capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

//   useEffect(() => {
//     document.title = capitalizeFirstLetter(currentCategory.name);
//   }, [currentCategory]);

  return (
    <header>
      <h1>Glen Luersman</h1>
      <nav>
        <ul>
          <li>
            <a className="about-me" href="#about-me">
                About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
          <li className={`${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
            <span onClick={() => {
                setCurrentCategory(category)
            }}>
                {capitalizeFirstLetter(category.name)}
            </span>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;