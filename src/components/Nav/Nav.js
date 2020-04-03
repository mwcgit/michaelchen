import React from 'react';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
// <a className="pointer about link dim dib mr2 mr4-l mr4-m 7 f6-m f4-l fw6 ttu tracked" href={pdf} style = {{ color: "#0266C8", backgroundColor: "rgba(255,255,255,0.7)"}}> Resume</a>

const Nav = () => {
  return (
    <div>
      <div>
        <div>
          <Element name="top" >
          </Element>
        </div>  
        <header className="fixed w-100 ph3 pv3 ph3-ns ph4-m pl5-l tr">
          <nav className="f7 f6-m f4-l fw6 ttu tracked" style = {{color: "#FFCC00"}} >
            <Link className="pointer about link dim dib mr2 mr4-l mr4-m grow-large sega" to="top" spy={true} smooth={true} duration={1000} style = {{ backgroundColor: "rgba(250,218,94,0.1)"}} > Home </Link>
            <Link className="pointer about link dim dib mr2 mr4-l mr4-m grow-large sega" to="about" spy={true} smooth={true} duration={1000} style = {{ backgroundColor: "rgba(250,218,94,0.1)"}} > About Me</Link>
            <Link className="pointer about link dim dib mr2 mr4-l mr4-m grow-large sega" to="experience" spy={true} smooth={true} duration={1000} style = {{ backgroundColor: "rgba(250,218,94,0.1)"}} >Experience</Link>
            <Link className="pointer about link dim dib mr2 mr4-l mr4-m grow-large sega" to="projects" spy={true} smooth={true} duration={1000} style = {{ backgroundColor: "rgba(250,218,94,0.1)"}} >Projects</Link>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Nav;
