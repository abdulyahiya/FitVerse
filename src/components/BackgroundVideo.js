import React, { useState } from 'react';
import VideoFallback from './VideoFallback';
import './BackgroundVideo.css';

const BackgroundVideo = ({ videoSrc, overlay = true, children }) => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    console.log('Video failed to load, using fallback');
    setVideoError(true);
  };

  // Use video if available, otherwise fallback to animated background
  if (videoError || !videoSrc) {
    return <VideoFallback>{children}</VideoFallback>;
  }

  return (
    <div className="background-video-container">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        onError={handleVideoError}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {overlay && <div className="video-overlay" />}
      <div className="video-content">
        {children}
      </div>
    </div>
  );

  // Uncomment this section when you have working video URLs:
  /*
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    console.log('Video failed to load, using fallback');
    setVideoError(true);
  };

  if (videoError || !videoSrc) {
    return <VideoFallback>{children}</VideoFallback>;
  }

  return (
    <div className="background-video-container">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        onError={handleVideoError}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {overlay && <div className="video-overlay" />}
      <div className="video-content">
        {children}
      </div>
    </div>
  );
  */
};

export default BackgroundVideo;
