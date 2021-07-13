import './App.scss';
import React, {useState} from "react";
import Nav from './components/Nav'
import IntroText from './components/IntroText'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from "./components/Contact"

function App() {
//State -------------------------------------------------------------
const [backgroundPic, setBackgroundPic] = useState("-dark")


//On Click Toggle ---------------------------------------------------
let toggleBackground = () => {
  if (backgroundPic === "-dark") {
    setBackgroundPic("-light")
    console.log("-light")
  } else {
    setBackgroundPic("-dark") 
    console.log("-dark")
  }
}

  return (
    <div className="App">

    <div className={"header-container" + backgroundPic} >

    {/* <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div> */}
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
<IntroText />
{/* <button onClick={toggleBackground}>test</button> */}
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
