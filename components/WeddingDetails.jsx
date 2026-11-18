'use client';

import React from 'react';

export default function WeddingDetails({ wedding }) {
  return (
    <section
      id="invitation-card"
      style={{
        position: 'relative',
        padding: '60px 20px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Decorative Top Accent */}
        <div style={{ marginBottom: '18px' }}>
          <p
            className="font-heading"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#B97818',
            }}
          >
            The Sacred Union
          </p>
        </div>

        {/* Master Invitation Card matching PDF Page 2 */}
        <div
          className="invitation-arch-card"
          style={{
            position: 'relative',
            padding: '70px 36px 60px',
            background: '#FFF7EC',
            overflow: 'hidden',
          }}
        >
          {/* Side Lotus Flowers (Left) */}
          <div
            style={{
              position: 'absolute',
              left: '-32px',
              bottom: '10px',
              width: '150px',
              pointerEvents: 'none',
              zIndex: 1,
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))',
            }}
            className="animate-float-slow"
          >
            <img
              src={wedding.media.lotusLeft}
              alt="Lotus left decoration"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Side Lotus Flowers (Right) */}
          <div
            style={{
              position: 'absolute',
              right: '-32px',
              bottom: '10px',
              width: '150px',
              pointerEvents: 'none',
              zIndex: 1,
              filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.06))',
            }}
            className="animate-float-slow"
          >
            <img
              src={wedding.media.lotusRight}
              alt="Lotus right decoration"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Card Content */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            {/* Sacred Lotus emblem */}
            <div
              style={{
                width: '64px',
                margin: '0 auto 16px',
                opacity: 0.85,
              }}
            >
              <img
                src={wedding.media.lotusSingle}
                alt="Lotus emblem"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>

            {/* Religious Greeting */}
            <p
              className="font-script gold-text-gradient"
              style={{
                fontSize: '1.9rem',
                marginBottom: '18px',
                lineHeight: 1.2,
              }}
            >
              {wedding.religiousGreeting}
            </p>

            <div className="gold-divider" style={{ margin: '14px auto 26px', maxWidth: '300px' }}>
              <span style={{ color: '#D99A35', fontSize: '0.9rem' }}>✦</span>
            </div>

            {/* Invitation Message */}
            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(1.18rem, 2.8vw, 1.45rem)',
                lineHeight: 1.85,
                color: '#654523',
                maxWidth: '560px',
                margin: '0 auto',
                letterSpacing: '0.02em',
                fontWeight: '500',
              }}
            >
              {wedding.invitationMessage}
            </p>

            <div className="gold-divider" style={{ margin: '26px auto 18px', maxWidth: '300px' }}>
              <span style={{ color: '#D99A35', fontSize: '0.9rem' }}>✦</span>
            </div>

            {/* Sanskrit Auspicious Blessing */}
            <p
              className="font-heading"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                color: '#B97818',
                textTransform: 'uppercase',
                marginTop: '16px',
              }}
            >
              ॥ मङ्गलम् भगवान् विष्णुः मङ्गलम् गरुडध्वजः ॥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
