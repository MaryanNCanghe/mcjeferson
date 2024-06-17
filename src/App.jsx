import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Album from './components/Album/Album';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Tour from './components/Tour/Tour';
import Footer from './components/Footer/Footer';
import './App.css'; 
function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/tour" element={<Tour />} />
         </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
