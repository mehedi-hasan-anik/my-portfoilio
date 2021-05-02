import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container">
              <div className="home-bottom-area">
                <div style={{maxWidth:'300px', width:'100%', margin:'0 auto'}}>
                    <ul>
                        <li> <a href="https://www.facebook.com/anik.ahamed.908/"><FontAwesomeIcon icon={faFacebook} /></a> </li>
                        <li> <a href="https://github.com/mehedi-hasan-anik"><FontAwesomeIcon icon={faGithub} /></a> </li>
                        <li> <a href="https://www.linkedin.com/in/anik-hasan-051072211/"><FontAwesomeIcon icon={faLinkedin} /></a> </li>
                    </ul>
                </div>
           </div>
        </div>
    );
};

export default Footer;