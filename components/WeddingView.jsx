'use client';

import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

import OpeningInvitation from './OpeningInvitation';
import CoupleSection from './CoupleSection';
import WeddingDetails from './WeddingDetails';
import Countdown from './Countdown';
import VenueSection from './VenueSection';
import ClosingSection from './ClosingSection';
import MusicPlayer from './MusicPlayer';
import FloatingLocationButton from './FloatingLocationButton';
import FloatingPetals from './FloatingPetals';

export default function WeddingView({ wedding }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Handle Open Invitation Action
  const handleOpenInvitation = () => {
    setIsOpen(true);

    // Start Audio
    if (audioRef.current) {
      audioRef.current.volume = 0.85;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Audio playback error / user gesture needed:', err);
          });
      }
    }

    // Auspicious celebratory golden & rose petals burst
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D99A35', '#E99A9D', '#FCEEDB', '#B97818', '#637D45'],
        ticks: 250,
        gravity: 0.8,
        shapes: ['circle'],
        scalar: 1.2,
      });
    } catch (e) {
      // Fallback if canvas is not ready
    }

    // Scroll smoothly to top
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#FFF5E6',
        color: '#654523',
        overflowX: 'hidden',
      }}
    >
      {/* Background Mandala Tile Lattice (Persistent) */}
      <div
        className="bg-mandala-tile"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          opacity: 0.12,
        }}
      />

      {/* Floating Lotus Petals Animation (Subtle & Elegant) */}
      <FloatingPetals count={20} active={true} />

      {/* Hidden Audio Element with multiple fallback sources */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={wedding.media.music.srcWebe || wedding.media.music.srcWeba} type="audio/webm" />
        <source src={wedding.media.music.srcMp3} type="audio/mpeg" />
        <source src="/assets/audio/wedding-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Full-Screen Opening Ceremony Card (shown before opening) */}
      <OpeningInvitation
        wedding={wedding}
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Main Wedding Invitation Website Content (revealed on open) */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* Navigation Bar / Quick Anchor Links */}
        <nav
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 40,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 245, 230, 0.92)',
            borderBottom: '1px solid rgba(217, 154, 53, 0.3)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="font-script gold-text-gradient"
            style={{ fontSize: '1.6rem', lineHeight: 1 }}
          >
            {wedding.groom.firstName} & {wedding.bride.firstName}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            <a
              href="#couple"
              style={{ color: '#654523', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              Couple
            </a>
            <a
              href="#wedding-date"
              style={{ color: '#654523', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              Date
            </a>
            <a
              href="#venue"
              style={{ color: '#654523', textDecoration: 'none', transition: 'color 0.2s' }}
            >
              Venue
            </a>
          </div>
        </nav>

        {/* Section 2: Couple Introduction */}
        <CoupleSection wedding={wedding} />

        {/* Section 3: Wedding Invitation Card Details */}
        <WeddingDetails wedding={wedding} />

        {/* Section 4: Wedding Date, Time & Live Countdown */}
        <Countdown wedding={wedding} />

        {/* Section 5: Wedding Venue & Directions */}
        <VenueSection wedding={wedding} />

        {/* Section 6: Final Invitation & Blessings */}
        <ClosingSection wedding={wedding} />
      </div>

      {/* Floating Location Button (Bottom-Left) */}
      {isOpen && (
        <FloatingLocationButton venue={wedding.venue} />
      )}

      {/* Floating Music Control Widget (Bottom-Right) */}
      {isOpen && (
        <MusicPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
      )}
    </main>
  );
}
