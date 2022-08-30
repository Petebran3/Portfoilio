import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import './footer.css'
export const Footer = () => {
  return (
      
    <footer className="footer">
        <h2>Contact Me:</h2>
        <br></br>
      <h3>Phone Number:</h3>
      <p>(803)817-2553</p>
      <h3>Email:</h3>
      <a href="mailto:petebran98@gmail.com">petebran98@gmail.com</a>
      <br></br>
      <a href="https://github.com/Petebran3"
        className="youtube social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/pete-branham/"
        className="facebook social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="hhttps://twitter.com/_ALMIGHTYPEEZUS" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/pete_branham"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>


      </footer>
    
  );

}