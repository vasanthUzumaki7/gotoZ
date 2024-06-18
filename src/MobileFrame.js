// src/components/MobileFrame.js
import React from 'react';
import './MobileFrame.css';
import mobile from './images/image.png'; // Import the PNG image
import phvideo from './images/phvideo.webm'

const MobileFrame = () => {
  return (
    <div className="frame-container">
      <div className="mobile-frame">
        <img src={mobile} alt="Mobile Frame" />
        <div className="video-container">
          <video controls>
            <source src={phvideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
