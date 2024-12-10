// Holds contact links for github linkedIn and other contact sites
import React from "react";
import '/Main/App.css';
function Footer(){
return(
   <footer className="footer-container d-flex justify-content-center align-items-center">
      <ul className="footer-links d-flex gap-4">
         <li>
            <a href="https://github.com/BrijaeWill" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i> GitHub
            </a>
         </li>
         <li>
         <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
         </li>
          <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-stack-overflow"></i> Stack Overflow
          </a>

      </ul>
   </footer>
  
  
);
}
export default Footer;