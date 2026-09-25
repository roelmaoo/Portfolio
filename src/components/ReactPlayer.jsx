import React, { useState } from 'react';

export default function AudioPlayerButton({ videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(true);

  // Extract the 11-character video ID from a standard watch URL or share link
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  if (!videoId) {
    console.error("Invalid YouTube URL provided to AudioPlayerButton");
    return null;
  }

  // YouTube embed uses version parameters (enablejsapi=1) to interface with browser engines
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=0&controls=0&loop=0&origin=${window.location.origin}`;

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        onClick={toggleAudio}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          backgroundColor: isPlaying ? '#222' : '#fff',
          color: isPlaying ? '#fff' : '#222',
          border: '2px solid #222',
          borderRadius: '4px',
          transition: 'all 0.2s ease'
        }}
      >
        {isPlaying ? 'Pause Audio' : 'Play Audio'}
      </button>

      {/* 
        Native HTML iframe interface bypasses react-player state locking bugs.
        Rendered as a 1x1 structural element so the browser registers user interaction safely.
      */}
      {isPlaying && (
        <iframe
          src={embedUrl}
          title="Audio Engine"
          allow="autoplay; encrypted-media"
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            width: '1px',
            height: '1px',
            opacity: 0.01,
            pointerEvents: 'none',
            border: 'none'
          }}
        />
      )}
    </div>
  );
}