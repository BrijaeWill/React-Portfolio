//Navagation bar
import React from "react";
const Nav =()=>{
    return(
        <nav class="navbar navbar-light bg-light">
        <div class="justify-content p-5">
        <p class="navbar-brand container mt-2 h1 ">Developer</p>
        </div>
        <div class="container d-flex flex-wrap justify-content p-5">
        <a class="nav-link" href="#about"><i class="bi bi-person-circle"></i> About Me</a>
        <a class="nav-link" href="#portfolio"><i class="bi bi-briefcase"></i> Portfolio</a>
                <a class="nav-link" href="#contact"><i class="bi bi-envelope"></i> Contact</a>
                <a class="nav-link" href="#resume"><i class="bi bi-file-earmark-text"></i> Resume</a>
        </div>

        
        
        </nav>
    );
};

//Variable for linkstyle

//Nav bar code here

export default Nav