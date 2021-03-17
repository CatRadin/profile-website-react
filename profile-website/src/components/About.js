import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function About() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    },[])

return(
    <div className="grid-container">
    <div className="image-container">
        <img data-aos="fade-right" className="me" src='https://i.ibb.co/jv4g6zK/blackandwhiteme.png' />
        <img data-aos="fade-right" className='myName' src="https://i.ibb.co/5xLntwB/Name-Lighter.png" />
        <p data-aos="fade-right">Full Stack Developer</p>
        <img data-aos="fade-right" className="contact-stuff" src="https://i.ibb.co/DVdmnRY/Contact-Details.png" />
    </div>
    <div className="about">
        <h1 data-aos="fade-down">About <span data-aos="fade-down" className='spanMe'>Me:</span> </h1>
        <p data-aos="fade-down">Cupcake ipsum dolor sit amet I love. Bear claw carrot cake cake gingerbread pastry bear claw marshmallow. Marzipan brownie cake I love soufflé pudding lollipop topping. I love tiramisu bonbon. Topping marzipan sweet roll dessert. I love I love candy I love jujubes toffee jujubes chocolate bar bear claw. Tiramisu lemon drops caramels tootsie roll pastry sweet roll halvah donut. Brownie soufflé toffee brownie. I love pudding I love jelly tiramisu gummies marshmallow pastry cotton candy. Halvah chocolate I love jelly beans. Macaroon cake donut cheesecake dragée muffin bonbon icing. I love soufflé lollipop brownie marshmallow muffin jelly beans sweet. Danish toffee sweet danish sesame snaps jelly beans caramels.</p>
    </div>
    <div class="skills">
        <h1 data-aos="fade-up">Skills: </h1>
        <ul data-aos="fade-up">
            {/* <div className='skillz'>
                <img src={HTML} /> */}
            <li>Java</li>
            <li>Java Spring</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>JQuery</li>
            <li>Git</li>
            <li>Unit Testing</li>
            <li>Responsive Design</li>
        </ul>
    </div>
  </div>
)
}
export default About