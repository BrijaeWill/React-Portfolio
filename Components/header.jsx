//Header needs to include navagation links Developers name
//need to import navigation from nav.jsx here

import React from 'react';
import Nav from './Nav'; 
import '/Main/App.css'; 

function Header() {
    const heading = "Developer";
    return (
      <header className="navbar-container d-flex align-items-center">
        {/* Developer heading */}
        <h1 className="navbar-brand">{heading}</h1>
        
        {/* Navbar links */}
        <Nav />
      </header>
    
    );
  }

export default Header;
