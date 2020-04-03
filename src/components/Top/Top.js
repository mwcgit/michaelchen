import React from 'react';
import './Top.css';
import Typed from 'typed.js';

class Top extends React.Component{

  componentDidMount() {
    let options = {
      strings: ["Software Engineer", "Tech Enthusiast", "Groomer of 2 cats"],
      typeSpeed: 130,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '▌',
      autoInsertCss: true
    }
    this.typed = new Typed('#typed', options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

    //ref={(el) => { this.el = el; }}>
     //id = 'typed'
  render(){
    return(
      <div className="vh-100 tc pt6 mb5 pb6" id = "title">
        <div className="dtc v-mid pb5">
          <h1 className="sega fw3 f-subheadline-m f-headline-l white" >Michael Chen</h1>
          <span 
            className="f1-m f1-l f4 shadow-5"
            style={{ whiteSpace: 'pre', color: "#FFCC00" }}
            id = 'typed'>
          </span>
        </div>
        <div className="pv5">
          <a className="link near-black hover-silver grow-large dib h2 w2 mr3" href="https://github.com/mwcgit" title="GitHub">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
          </a>
          <a className="link hover-silver near-black grow-large dib h2 w2 mr3" href="https://www.linkedin.com/in/michaelchen617/" title="LinkedIn">
            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
              <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fillRule="nonzero"/>
            </svg>
          </a>
          <a className="link hover-silver near-black grow-large dib h2 w2 mr3" href="mailto:mwc0617@gmail.com" title="Email">
            <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 612" >
              <path d="M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645
            		l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954
            		C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356
            		V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516
            		l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4
            		L337.431,361.585z"/>
            </svg>
          </a>
            {/* <a className="link hover-silver near-black dib h2 w2 mr3" href="https://linkedin.com" title="LinkedIn">
                  <img src= {email} alt = "Email"/>
            </a> */}
        </div>

      </div>
      );
   }
}

export default Top;
