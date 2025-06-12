


import React, { useEffect, useRef, useState } from 'react';

export  function VideoHome2
({          src="https://res.cloudinary.com/dv2brrhll/video/upload/v1748168421/invideo-ai-720_%D7%A4%D7%A9%D7%95%D7%98_%D7%9C%D7%A4%D7%A8%D7%A1%D7%9D_%D7%91%D7%9C%D7%99_%D7%9B%D7%90%D7%91_%D7%A8%D7%90%D7%A9_2025-05-24_1_sikf41.mp4"
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
      className={`video-container2 ${isVisible ? 'in-view' : ''}`}
      style={{  position: 'relative'}}
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

