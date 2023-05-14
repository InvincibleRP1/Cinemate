import "../footer/footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const FooterArea = () => {
  return (
    <>
      <div className="footer-items">
        <h2>Cinemate</h2>

        
        <ul className="footer-resources">
          <li className="footer-resource-names">Sign Up</li>

          <li className="footer-resource-names">Sign in</li>
        </ul>

        <ul className="social-links">
          <li className="social-links-names"><FontAwesomeIcon icon={faTwitter} /></li>
          <li className="social-links-names"><FontAwesomeIcon icon={faGithub} /></li>
          <li className="social-links-names"><FontAwesomeIcon icon={faLinkedin} /></li>
        </ul>

        <b className="copyright">
        
          <span>© 2023, Cinemate, Inc. </span>All rights reserved.
        </b>
        
      </div>
    </>
  );
};
