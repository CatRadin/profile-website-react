import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Nav() {

    return(
    <div className="nav-Container">
        <a href="#About">About</a>
        <a href="#projects">Projects</a>
        <a href="#Contact">Contact</a> 
        <a href="https://drive.google.com/file/d/1u3U_EP6xQQKrD3BdpxrSyNpDs-ASmBdF/view?ths=true" target="_blank">Resume</a>
        </div>
)
}
export default Nav