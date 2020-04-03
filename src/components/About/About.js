import React from 'react';
import { Element } from 'react-scroll';

const About = () => {

   return (
      <div>
         <div id="container2">
            <div id = 'leftContainer' className="mt6 cf ph3 ph5-ns pv5">
                  <header className="">
                     <h1 className="f2 bb bw2 sega" style ={{color: "#FFCC00"}}>
                        About Me
                     </h1>
                  </header>
            </div>
            <div id = 'rightContainer' className = 'mt6 ml3 mr3 pa4'>
               <div>
                  <Element name="about">
                  </Element>
               </div>
               <article className="shadow-5 mw6 center br3 pa3 pa4-ns mv3 bg-washed-green b--black-10">
                  <div className="tc">
                     <img
                        src="michael-chen-removebg.png"
                        className="br-100 h5 w5 dib"
                        title="Mike"
                        alt="Mike"
                     />
                     <h1 className="f1">Michael Chen</h1>
                     <hr className="mw6 bb bw1 b--black-10" />
                  </div>
                  <p className="f8">
                     I am a Software Engineer with 1 year+ experience developing clean and scalable codes, and eager to learn new stacks.
                  </p>
                  <p className="f8">
                     I recently moved to Austin, TX with my family. I'm seeking for an oppurtunity to grow and contribute as an Software Engineer.
                  </p>
                  <p className="f8">
                     In the past 2 years, I have been developing codes that enabled workflow automation, enhenced productivity (by 200%), and saved my agency money($200,000). I also took on roles as program lead and instructor in my previous position.
                  </p>
                  <p className="f8">
                     I am looking forward to hearing from you! <a className="pa1 link hover-silver near-black dib h3 w2 mr3" href="mailto:mwc0617@gmail.com" title="Email">
                                                                  <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612 612" >
                                                                    <path d="M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645
                                                                        l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954
                                                                        C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356
                                                                        V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516
                                                                        l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4
                                                                        L337.431,361.585z"/>
                                                                  </svg>
                                                               </a>
                  </p>
   
            </article>
         </div>

         </div>   
      </div>
   )
}

export default About;
