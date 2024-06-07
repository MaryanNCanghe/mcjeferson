import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="credits">
        <p>&copy; 2024 Your Company. All rights reserved.// Ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae atque necessitatibus, architecto laborum nobis, perferendis unde vitae voluptatem laudantium ducimus perspiciatis eveniet, itaque a placeat culpa! Quis mollitia asperiores iste.// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates minus incidunt dolore illum repellendus, magnam at fuga adipisci officiis eum commodi libero non qui exercitationem amet, et enim soluta ad!</p>
      </div>
    </div>
  );
}

export default Footer;
