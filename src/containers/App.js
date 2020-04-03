import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Top from '../components/Top/Top.js';
import Nav from '../components/Nav/Nav.js';
import About from '../components/About/About.js';
import Experience from '../components/Experience/Experience.js';
import Projects from '../components/Projects/Projects.js';
import Footer from '../components/Footer/Footer.js';

class App extends Component {

  render() {
    return (
      <div>
         <Nav />
         <Top />
         <About />
         <Experience />
         <Projects />
         <Footer />
      </div>
    )
  }
}

export default App;
