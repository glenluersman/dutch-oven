import React, { useState } from 'react';
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    { name: 'portfolio' },
    { name: 'resume' }
]);
const [currentCategory, setCurrentCategory] = useState(0);  

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
