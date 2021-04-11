
import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function Projects() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
},[])






return(
  <>
  
  <div class="projects">
    <div clssName='title-container'>
  <h1 data-aos="fade-right" className="project-title">Projects</h1>
  </div>
  <div data-aos="fade-left" className="project-left">
    <div className='p-left-image'>
    <img className="project-img" src="https://i.ibb.co/ZLFk69C/randompokemon.png"></img>
    </div>
    <div className ='p-left-content'>
      <h1 className="left-title">Random Pokemon</h1>
       <p className='languages-used'> | Redux |  React | CSS | HTML | JavaScript | API | 
       </p>
       <p className='project-about-p'> I used the pokemon API to grab a random pokemon then fetched the returned URL to find it's name and type! I then displayed them for the user. </p>
      <div className='left-buttons'>
      <a className='left-links' href="https://github.com/CatRadin/React-Redux-App/tree/catherine-radin" 
        target="_blank">Github</a>
        <a className='left-links' href="https://random-pokemon.netlify.app/" 
        target="_blank">Demo</a>
      </div>
    </div>
  </div>
<div className='divider'>|</div>
<div className='divider'>|</div>
<div className='divider'>|</div>
<div className='divider'>|</div>

<div data-aos="fade-right" className="project-right">
    <div className ='p-left-content'>
      <h1 className="left-title nasa-title">Nasa Photo of the Day</h1>
       <p className='languages-used'> | React |  JavaScript | CSS | JavaScript | API | 
       </p>
       <p className='project-about-p'> I used the pokemon API to grab a random pokemon then fetched the returned URL to find it's name and type! I then displayed them for the user. </p>
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