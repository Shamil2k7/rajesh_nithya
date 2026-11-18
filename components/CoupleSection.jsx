'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export default function CoupleSection({ wedding }) {
  return (
    <section
      id="couple"
      style={{
        position: 'relative',
        padding: '90px 20px 70px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Divine Invocation at top of main site */}
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              width: '74px',
              height: '90px',
              margin: '0 auto 12px',
              position: 'relative',
              filter: 'drop-shadow(0 2px 6px rgba(217, 154, 53, 0.25))',
            }}
          >
            <img
              src={wedding.media.ganeshaImage}
              alt="Lord Ganesha"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <p
            className="font-script gold-text-gradient"
            style={{
              fontSize: '2rem',
              lineHeight: 1.2,
            }}
          >
            {wedding.religiousGreeting}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="gold-divider">
          <span style={{ color: '#D99A35', fontSize: '1.2rem' }}>✦</span>
        </div>

        {/* Section Tag */}
        <p
          className="font-heading"
          style={{
            fontSize: '0.82rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#876136',
            marginBottom: '20px',
          }}
        >
          {wedding.parentIntro}
        </p>

        {/* Couple Names Hero Container */}
        <div
          className="invitation-arch-card"
          style={{
            padding: '54px 30px 48px',
            position: 'relative',
            margin: '0 auto',
            maxWidth: '640px',
          }}
        >
          {/* Corner floral decorations */}
          <div
            style={{
              position: 'absolute',
              top: '-15px',
              left: '-25px',
              width: '100px',
              pointerEvents: 'none',
              transform: 'rotate(-15deg)',
              opacity: 0.85,
            }}
          >
            <img
              src={wedding.media.lotusSingle}
              alt="Lotus petal decoration"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '-15px',
              right: '-25px',
              width: '100px',
              pointerEvents: 'none',
              transform: 'scaleX(-1) rotate(-15deg)',
              opacity: 0.85,
            }}
          >
            <img
              src={wedding.media.lotusSingle}
              alt="Lotus petal decoration"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* Groom Full Name */}
          <div style={{ margin: '10px 0' }}>
            <span
              className="font-heading"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                color: '#A37E52',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              The Groom
            </span>
            <h1
              className="font-script gold-text-gradient gold-text-glow"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 4.2rem)',
                lineHeight: 1.15,
                fontWeight: '400',
              }}
            >
              {wedding.groom.fullName}
            </h1>
          </div>

          {/* Golden Ampersand Connector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              margin: '8px 0',
            }}
          >
            <span
              style={{
                height: '1px',
                width: '60px',
                background: 'linear-gradient(90deg, transparent, #D99A35)',
              }}
            />
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(217, 154, 53, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 245, 230, 0.8)',
              }}
            >
              <span
                className="font-script gold-text-gradient"
                style={{
                  fontSize: '2.4rem',
                  lineHeight: 1,
                  display: 'inline-block',
                }}
              >
                &
              </span>
            </div>
            <span
              style={{
                height: '1px',
                width: '60px',
                background: 'linear-gradient(90deg, #D99A35, transparent)',
              }}
            />
          </div>

          {/* Bride Full Name */}
          <div style={{ margin: '10px 0' }}>
            <h1
              className="font-script gold-text-gradient gold-text-glow"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 4.2rem)',
                lineHeight: 1.15,
                fontWeight: '400',
              }}
            >
              {wedding.bride.fullName}
            </h1>
            <span
              className="font-heading"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                color: '#A37E52',
                textTransform: 'uppercase',
                display: 'block',
                marginTop: '4px',
              }}
            >
              The Bride
            </span>
          </div>

          {/* Bottom Lotus arrangement */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '24px',
            }}
          >
            <div style={{ maxWidth: '220px', opacity: 0.9 }}>
              <img
                src={wedding.media.lotusBottom}
                alt="Sacred Lotus Bloom"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
