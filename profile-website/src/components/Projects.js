
import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function Projects() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
},[])






return(
  <>
  <div class="text-container">
  <span>P</span>
  <span>r</span>
  <span>o</span>
  <span>j</span>
  <span>e</span>
  <span>c</span>
  <span>t</span>
  <span>s</span>
</div>
  <div class="projects" id="projects">
    <div clssName='title-container'>

    

  {/* <h1 data-aos="fade-right" className="project-title">Projects</h1> */}
  </div>

  <div  className="project-right HRF-right">
    <div data-aos="fade-right" className ='p-left-content'>
      <h1 className="left-title nasa-title">Human Rights First</h1>
      <img  className='pink-bar-projects' src="https://i.ibb.co/rtMV6Qx/Pink-bar.png"></img>
       <p className='languages-used'> JavaScript | React | Less | Ant Design | Node.js | PostgreSQL | Figma 
       </p>
       <p className='project-about-p'>I collaborated remotely with a team of Web Developers, UX/UI Lead Designers and Data Scientists to add new features.</p>
      
      <div className='left-buttons'>

      <a className='left-links' href="https://github.com/CatRadin/human-rights-first-asylum-fe-a" 
        target="_blank">Github</a> 
        <a className='left-links' href="https://a.humanrightsfirstasylum.dev/login" 
        target="_blank">Demo</a>
      </div>
    </div>
    <div className='p-left-image'>
    <img className="project-img HRF" src="https://i.ibb.co/m0hW3ZT/Human-Rights-First-Asylum.png"></img>
    </div>
</div>


  <div className="project-left">
    <div data-aos="fade-left" className='p-left-image'>
    <img className="project-img" src="https://i.ibb.co/ZLFk69C/randompokemon.png"></img>
    </div>
    <div className ='p-left-content'>
      <h1 className="left-title">Random Pokemon</h1>
      <img  className='pink-bar-projects' src="https://i.ibb.co/rtMV6Qx/Pink-bar.png"></img>
       <p className='languages-used'> | Redux | React | CSS | HTML | JavaScript | API | 
       </p>
       <p className='project-about-p'> I used the pokemon API to grab a random pokemon then fetched the returned URL to find it's name and type! I then displayed them for the user. </p>
      <div className='left-buttons pokemonBtn'>
      <a className='left-links' href="https://github.com/CatRadin/React-Redux-App/tree/catherine-radin" 
        target="_blank">Github</a>
        <a className='left-links' href="https://random-pokemon.netlify.app/" 
        target="_blank">Demo</a>
      </div>
    </div>
  </div>

<div className="project-right">
    <div data-aos="fade-right" className ='p-left-content'>
      <h1 className="left-title nasa-title">Nasa Photo of the Day</h1>
      <img className='pink-bar-projects' src="https://i.ibb.co/rtMV6Qx/Pink-bar.png"></img>
       <p className='languages-used'> | React | JavaScript | CSS | JavaScript | API | 
       </p>
       <p className='project-about-p'> I used the nasa API to grab their photo of the day. Along with the iformation about the image. </p>
      <div className='left-buttons'>
      <a className='left-links' href="https://github.com/CatRadin/space-picture-of-day" 
        target="_blank">Github</a>
        <a className='left-links' href="https://nasa-photo-a-day-catherine.netlify.app/" 
        target="_blank">Demo</a>
      </div>
    </div>
    <div className='p-left-image'>
    <img className="project-img nasa-img" src="https://i.ibb.co/C8HtqGk/Nasa-Photo-Of-The-Day.png"></img>
    </div>
</div>

  </div>
  </>

  
)
}
export default Projects