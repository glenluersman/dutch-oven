import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false); 
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  


  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {aboutSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <></>
        )}
        {contactSelected ? (
          <>
            <ContactForm></ContactForm>
          </>
        ) : (
          <></>
        )}
        {portfolioSelected ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) : (
          <></>
        )}
        {resumeSelected ? (
          <>
            <Resume></Resume>
          </>
        ) : (
          <></>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
