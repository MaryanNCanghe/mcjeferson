import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/Gessou01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/mcjefynhoorvoficial__/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://youtube.com/@melhorgestaohits1?si=ZF7EeXvKWa_snL52" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
    
        
      </div>
      <div className="credits">
        <p>&copy; 2024 Your Company. All rights reserved.// Ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque necessitatibus, architecto laborum nobis, perferendis unde vitae voluptatem laudantium ducimus perspiciatis eveniet, itaque a placeat culpa!</p>
      </div>
    </div>
  );
}

export default Footer;
