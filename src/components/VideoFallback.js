import React from 'react';
import { FitnessCenter as GymIcon, DirectionsRun as RunIcon, Restaurant as DietIcon } from '@mui/icons-material';
import './VideoFallback.css';

const VideoFallback = ({ children }) => {
  return (
    <div className="video-fallback">
      <div className="fallback-background">
        <div className="fallback-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="fallback-icons">
          <div className="icon-container icon-1">
            <GymIcon />
          </div>
          <div className="icon-container icon-2">
            <RunIcon />
          </div>
          <div className="icon-container icon-3">
            <DietIcon />
          </div>
        </div>
        <div className="fallback-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
      <div className="fallback-content">
        {children}
      </div>
    </div>
  );
};

export default VideoFallback;
