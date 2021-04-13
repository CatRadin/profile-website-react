import './App.scss';
import React, {useState} from "react";
import Nav from './components/Nav'
import IntroText from './components/IntroText'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from "./components/Contact"

function App() {
let light = "-light"
let dark = "-dark"

let backgroundPic = "-dark";
const [isLight, setIsLight] = useState()



let toggleBackground = () => {
  if (backgroundPic === "-dark") {
    backgroundPic = "-light";
    console.log("-light")
  } else {
    backgroundPic = "-dark"
    console.log("-dark")
  }
}

  return (
    <div className="App">

    <div className={"header-container" + backgroundPic} >
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<div class="snow"></div>
<Nav />
{/* <button onClick={toggleBackground}>test</button> */}
<IntroText />
      </div>
      <div className='middle-container'>
      <About />
      </div>
      <div className='projects-container'>
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
