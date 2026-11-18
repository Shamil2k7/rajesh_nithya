'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Heart } from 'lucide-react';

export default function OpeningInvitation({
  wedding,
  isOpen,
  onOpen,
}) {
  const cardRef = useRef(null);

  if (isOpen) {
    return null; // Transitioned away into main invitation
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#FFF5E6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflow: 'hidden',
      }}
    >
      {/* Background Mandala Tile Lattice */}
      <div
        className="bg-mandala-tile"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.14,
        }}
      />

      {/* Subtle radial gold aura */}
      <div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 154, 53, 0.16) 0%, rgba(255, 245, 230, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Traditional Card Container */}
      <div
        ref={cardRef}
        className="invitation-arch-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          maxHeight: '94vh',
          padding: '48px 24px 38px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
          background: '#FFF7ED',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        {/* Subtle inner mandala watermark at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '360px',
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        >
          <img
            src={wedding.media.mandalaBottom}
            alt="Traditional Mandala"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Side Lotus Flowers (Left) */}
        <div
          style={{
            position: 'absolute',
            left: '-28px',
            bottom: '15px',
            width: '140px',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))',
          }}
          className="animate-float-slow"
        >
          <img
            src={wedding.media.lotusLeft}
            alt="Sacred Lotus"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Side Lotus Flowers (Right) */}
        <div
          style={{
            position: 'absolute',
            right: '-28px',
            bottom: '15px',
            width: '140px',
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))',
          }}
          className="animate-float-slow"
        >
          <img
            src={wedding.media.lotusRight}
            alt="Sacred Lotus"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Top Center: Lord Ganesha Illustration */}
        <div style={{ position: 'relative', zIndex: 3, marginBottom: '8px' }}>
          <div
            style={{
              width: '94px',
              height: '114px',
              margin: '0 auto',
              position: 'relative',
              filter: 'drop-shadow(0 2px 8px rgba(185, 120, 24, 0.2))',
            }}
          >
            <img
              src={wedding.media.ganeshaImage}
              alt="Lord Ganesha"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          {/* Religious Greeting */}
          <h2
            className="font-script gold-text-gradient"
            style={{
              fontSize: '2.1rem',
              fontWeight: '400',
              marginTop: '4px',
              letterSpacing: '0.02em',
              lineHeight: 1.2,
            }}
          >
            {wedding.religiousGreeting}
          </h2>
        </div>

        {/* Middle: Invitation Intro & Couple Names */}
        <div style={{ position: 'relative', zIndex: 3, margin: '14px 0' }}>
          <p
            className="font-heading"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#876136',
              marginBottom: '14px',
            }}
          >
            {wedding.parentIntro}
          </p>

          <div style={{ margin: '8px 0' }}>
            <h1
              className="font-script gold-text-gradient gold-text-glow"
              style={{
                fontSize: 'clamp(2.4rem, 7vw, 3.2rem)',
                lineHeight: 1.15,
                fontWeight: '400',
              }}
            >
              {wedding.groom.fullName}
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                margin: '2px 0',
              }}
            >
              <span
                style={{
                  height: '1px',
                  width: '36px',
                  background: 'linear-gradient(90deg, transparent, #D99A35)',
                }}
              />
              <span
                className="font-script gold-text-gradient"
                style={{
                  fontSize: '2rem',
                  lineHeight: 1,
                  display: 'inline-block',
                }}
              >
                &
              </span>
              <span
                style={{
                  height: '1px',
                  width: '36px',
                  background: 'linear-gradient(90deg, #D99A35, transparent)',
                }}
              />
            </div>

            <h1
              className="font-script gold-text-gradient gold-text-glow"
              style={{
                fontSize: 'clamp(2.4rem, 7vw, 3.2rem)',
                lineHeight: 1.15,
                fontWeight: '400',
              }}
            >
              {wedding.bride.fullName}
            </h1>
          </div>

          <p
            className="font-serif"
            style={{
              fontSize: '1.02rem',
              fontStyle: 'italic',
              color: '#654523',
              marginTop: '16px',
              letterSpacing: '0.04em',
            }}
          >
            {wedding.requestPresenceText}
          </p>
        </div>

        {/* Bottom Action: Open Invitation Button */}
        <div style={{ position: 'relative', zIndex: 4, marginTop: '8px' }}>
          <button
            onClick={onOpen}
            className="royal-gold-button"
            style={{
              padding: '15px 36px',
              fontSize: '0.92rem',
              letterSpacing: '0.24em',
            }}
            aria-label="Open Wedding Invitation"
          >
            <Sparkles size={16} />
            <span>OPEN INVITATION</span>
          </button>

          <p
            style={{
              fontSize: '0.72rem',
              color: '#8E683C',
              marginTop: '10px',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Tap to enter & play music
          </p>
        </div>
      </div>
    </div>
  );
}
