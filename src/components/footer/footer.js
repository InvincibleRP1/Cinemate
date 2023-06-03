import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import "../footer/footer.css";
import {AuthContext} from '../../contexts/authContext'


export const FooterArea = () => {

  const {token} = useContext(AuthContext);
  return (
    <div className="footer-area">
      <div className="footer-items">
        <h2>Cinemate</h2>

      
        <ul className="footer-resources"
         style={{display: token ? "none" : ""}}
        >

          <NavLink
          to="/signup"
         
          className="footer-resource-names">Sign Up</NavLink>

         <NavLink 
          to="/signin"
          className="footer-resource-names">Sign in</NavLink>
        </ul>

        <ul className="social-links">
          <a 
          href="https://twitter.com/kungfupandey1"
          className="social-links-names"><FontAwesomeIcon icon={faTwitter} /></a>
          <a 
          href="https://github.com/InvincibleRP1"
          className="social-links-names"><FontAwesomeIcon icon={faGithub} /></a>
          <a 
          href="https://www.linkedin.com/in/rahul-pandey-311843168/"
          className="social-links-names"><FontAwesomeIcon icon={faLinkedin} /></a>
        </ul>

        <h3>cinemate@gmail.com</h3>

        <b className="copyright">
        
        © 2023, Cinemate, Inc. <span>All rights reserved.</span>
        </b>
        
      </div>
    </div>
  );
};
