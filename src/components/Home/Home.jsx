import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import BackgroundImage from '../../assets/BG/backgrounds2.png';

const Home = () => {
  return (
    <div className="Home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="https://MaryanNCanghe.github.io/jefynho-links" target="_blank" rel="noopener noreferrer">Album</a></li>
          <li><a href="https://MaryanNCanghe.github.io/jefynho-links" target="_blank" rel="noopener noreferrer">Music</a></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/tour">Tour</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
