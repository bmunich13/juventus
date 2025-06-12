


import React, { useEffect, useRef, useState } from 'react';

export  function VideoHome
({          src="https://res.cloudinary.com/dv2brrhll/video/upload/v1747729630/FDownloader.Net_AQNqB9zTKmP9dtWOFpFyJJFcmrA2Tu_5bEcYo-6_RQEp6a3uuZk6tDS99Ixi1L8Z00Bon9tRJmwtl-s4r7zARA3w_720p__HD_xwlf9x.mp4"
 }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;

    if (isVisible) {
      video.play().catch(e => console.warn('Autoplay blocked', e));
    } else {
      video.pause();
    }
  }, [isVisible, muted]);

  const toggleMute = () => setMuted(prev => !prev);

  return (
    <div
      ref={containerRef}
      className={`video-container ${isVisible ? 'in-view' : ''}`}
      style={{  position: 'relative' }}
    >
      <video
        ref={videoRef}
        src={src}
       
        controls
        muted={muted}
        preload="auto"
        playsInline
        style={{ borderRadius: '8px' }}
      />
      <button className="mute-toggle-btn" onClick={toggleMute} aria-label="Toggle mute">
        {muted ? (
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M16.5 12L19 14.5M19 9.5L16.5 12M5 9v6h4l5 5V4l-5 5H5z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M5 9v6h4l5 5V4l-5 5H5z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 9.354a4 4 0 010 5.292M17.5 7a8 8 0 010 10" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
}

