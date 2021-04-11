import React from 'react'
import Aos from "aos"

function Projects() {

  






return(
  <>
  
  <div class="projects">
    <div clssName='title-container'>
  <h1 data-aos="fade-right" className="project-title">Projects</h1>
  </div>
  <div className="project-left">
    <div className='p-left-image'>
    <img className="project-img" src="https://i.ibb.co/ZLFk69C/randompokemon.png"></img>
    </div>
    <div className ='p-left-content'>
      <h1 className="left-title">Random Pokemon</h1>
      <p> | Redux |  JavaScript | CSS | HTML | JavaScript | <br /> A school project learning Redux. I used the pokemon API to grab a random pokemon then fetched the returned URL to find /its name and type! </p>
      <div className='left-buttons'>
      <a className='left-links' href="https://github.com/CatRadin/React-Redux-App/tree/catherine-radin" 
        target="_blank">Github</a>
        <a className='left-links' href="https://random-pokemon.netlify.app/" 
        target="_blank">Demo</a>
      </div>
    </div>
  </div>

  <div className="project-right">
  <div className='p-right-image'>
    <img className="project-img" src="https://i.ibb.co/ZLFk69C/randompokemon.png"></img>
    </div>
    <div className ='p-left-content'>
      <h1 className="left-title">Random Pokemon</h1>
      <p>| Redux |  JavaScript | CSS | HTML | JavaScript <br /> 
      A school project learning Redux. I used the pokemon API to grab a random pokemon then fetched the returned URL to find /its name and type! </p>
      <div className='left-buttons'>
      <a className='left-links' href="https://github.com/CatRadin/React-Redux-App/tree/catherine-radin" 
        target="_blank">Github</a>
        <a className='left-links' href="https://random-pokemon.netlify.app/" 
        target="_blank">Demo</a>
      </div>
    </div>


  </div>
  </div>
  </>

  
)
}
export default Projects