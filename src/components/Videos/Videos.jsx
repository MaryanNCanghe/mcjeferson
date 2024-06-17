import React from 'react';
import './Videos.css';

// VideoItem Component
const VideoItem = ({ title, url }) => {
  return (
    <div className="video-item">
      <iframe
        width="100%"
        height="200"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
    </div>
  );
};

// Videos Component
const videoData = [
  { title: 'MC JEFYNHO RV - SÓ BALÃO ( Prod.Martinnz & kolossal ) Real Trap RJ', url: 'https://www.youtube.com/embed/HRe_3RW1_PU' },
  { title: 'Video 2', url: 'https://www.youtube.com/embed/HRe_3RW1_PU' },
  { title: 'Video 3', url: 'https://www.youtube.com/embed/HRe_3RW1_PU' },
  // Add more videos as needed
];

const Videos = () => {
  return (
    <div className="videos-page">
      <h1 className="videos-title">My Video Collection</h1>
      <div className="videos-section">
        {videoData.map((video, index) => (
          <VideoItem key={index} title={video.title} url={video.url} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
