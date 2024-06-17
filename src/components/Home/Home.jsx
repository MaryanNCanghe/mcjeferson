import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import BackgroundImage from '../../assets/BG/backgrounds2.png'; // Ensure this path is correct


const Home = () => {
  return (
   <div className="Home" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <nav className="navbar">
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="https://MaryanNCanghe.github.io/jefynho-links">Album</Link></li>
          <li><Link to="https://MaryanNCanghe.github.io/jefynho-links">Music</Link></li>
          <li><Link to="/videos">Video</Link></li>
          <li><Link to="/tour">Tour</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
