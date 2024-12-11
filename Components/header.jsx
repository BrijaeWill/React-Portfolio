//Header needs to include navagation links Developers name
//need to import navigation from nav.jsx here

import React from 'react';
import Nav from './Nav'; 
import '/Main/App.css'; 

function Header({ pageTitle, includeNav = true, showHeading = true }) {
  // Only wrap in <header> if includeNav is true
  if (includeNav) {
      return (
          <header className="navbar-container d-flex align-items-center">
              {/* Conditionally render Developer heading */}
              {showHeading && <h1 className="navbar-brand">Developer</h1>}

              {/* Optional Page Title (like "About Me") */}
              {pageTitle && <h2 className="page-title">{pageTitle}</h2>}

              {/* Render Nav only if includeNav is true */}
              {includeNav && <Nav />}
          </header>
      );
  } else {
      // If includeNav is false, just render the pageTitle (if exists)
      return (
          <>
              {pageTitle && <h2 className="page-title">{pageTitle}</h2>}
          </>
      );
  }
}

export default Header;
