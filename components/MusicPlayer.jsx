'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function MusicPlayer({
  isPlaying,
  setIsPlaying,
  audioRef,
}) {
  const [isMuted, setIsMuted] = useState(false);

  // Sync mute state with audio element
  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef?.current) return;
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const togglePlay = () => {
    if (!audioRef?.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Audio playback waiting for gesture:', err));
      }
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
      }}
      role="region"
      aria-label="Wedding Music Controls"
    >
      {/* Main Music Control Capsule */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 248, 238, 0.95), rgba(252, 238, 219, 0.95))',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(217, 154, 53, 0.6)',
          borderRadius: '40px',
          padding: '6px 12px 6px 10px',
          boxShadow: '0 8px 30px rgba(185, 120, 24, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlay}
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #B97818 0%, #D99A35 50%, #B97818 100%)',
            border: '1px solid rgba(255, 231, 154, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#FFF5E6',
            boxShadow: '0 4px 12px rgba(185, 120, 24, 0.35)',
            transition: 'transform 0.2s ease',
          }}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
          aria-label={isPlaying ? 'Pause Wedding Music' : 'Play Wedding Music'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Animated Sound Equalizer Bars */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            height: '24px',
            padding: '0 4px',
          }}
          aria-hidden="true"
        >
          {[0.6, 1.2, 0.8, 1.4, 0.5].map((scale, i) => (
            <span
              key={i}
              style={{
                width: '3px',
                height: isPlaying && !isMuted ? '18px' : '6px',
                backgroundColor: '#D99A35',
                borderRadius: '2px',
                transformOrigin: 'bottom',
                transition: 'height 0.2s ease',
                animation: isPlaying && !isMuted ? `equalizer 1.2s ease-in-out infinite alternate ${i * 0.18}s` : 'none',
              }}
            />
          ))}
        </div>

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            background: isMuted ? 'rgba(217, 154, 53, 0.15)' : 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#654523',
            transition: 'all 0.2s ease',
          }}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX size={17} color="#B97818" /> : <Volume2 size={17} color="#654523" />}
        </button>
      </div>

      <style jsx>{`
        @keyframes equalizer {
          0% {
            transform: scaleY(0.25);
          }
          100% {
            transform: scaleY(1.15);
          }
        }
      `}</style>
    </div>
  );
}
