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
        <a href="#">About</a>
        <a href="#">Resume</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a> 
        </div>
)
}
export default Nav