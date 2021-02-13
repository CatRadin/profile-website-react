import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function About() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    },[])

return(
    <div class="grid-container">
    <div data-aos="fade-right" class="image-container">
        <img className="me" src='https://i.ibb.co/jv4g6zK/blackandwhiteme.png' />
        <img className='myName' src="https://i.ibb.co/5xLntwB/Name-Lighter.png" />
        <p>Full Stack Developer</p>
        <img className="contact-stuff" src="https://i.ibb.co/DVdmnRY/Contact-Details.png" />
    </div>
    <div data-aos="fade-down"  class="about">
        <h1>About <span className='spanMe'>Me:</span> </h1>
        <p>Cupcake ipsum dolor sit amet I love. Bear claw carrot cake cake gingerbread pastry bear claw marshmallow. Marzipan brownie cake I love soufflé pudding lollipop topping. I love tiramisu bonbon. Topping marzipan sweet roll dessert. I love I love candy I love jujubes toffee jujubes chocolate bar bear claw. Tiramisu lemon drops caramels tootsie roll pastry sweet roll halvah donut. Brownie soufflé toffee brownie. I love pudding I love jelly tiramisu gummies marshmallow pastry cotton candy. Halvah chocolate I love jelly beans. Macaroon cake donut cheesecake dragée muffin bonbon icing. I love soufflé lollipop brownie marshmallow muffin jelly beans sweet. Danish toffee sweet danish sesame snaps jelly beans caramels.</p>
    </div>
    <div data-aos="fade-up" class="skills">
        <h1>Skills: </h1>
        <ul>
            {/* <div className='skillz'>
                <img src={HTML} /> */}
            <li>HTML</li>
            {/* </div> */}
            <li>CSS</li>
            <li>SaSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>JQuery</li>
            <li>Java</li>
            <li>Git</li>
            <li>Responsive Design</li>
        </ul>
    </div>
  </div>
)
}
export default About