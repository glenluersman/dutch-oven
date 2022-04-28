import React from 'react';

function Nav(props) {
  const {
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    aboutSelected,
    setAboutSelected,
    resumeSelected,
    setResumeSelected

  } = props;

  return (
    <header>
        <a className="name" href="/">
        <h1>Hello. I'm Glen Luersman.</h1>
        </a>
      <nav>
        <ul className="navLink">
          <li className={`${aboutSelected && 'navActive'}`} onClick={
              () => {
                setAboutSelected(true)
                setContactSelected(false)
                setPortfolioSelected(false)
                setResumeSelected(false)
              }}>
                About Me
          </li>
          <li className={`${portfolioSelected && 'navActive'}`} onClick={() => {
              setContactSelected(false)
              setPortfolioSelected(true)
              setResumeSelected(false)
              setAboutSelected(false)
            }}>
            Portfolio
          </li>
          <li className={`${contactSelected && 'navActive'}`} onClick={() => {
              setContactSelected(true)
              setPortfolioSelected(false)
              setResumeSelected(false)
              setAboutSelected(false)
            }}>
            Contact
          </li>
          <li className={`${resumeSelected && 'navActive'}`} onClick={() => {
              setContactSelected(false)
              setPortfolioSelected(false)
              setResumeSelected(true)
              setAboutSelected(false)
            }}>
            Resume
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;