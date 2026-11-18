'use client';

import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function VenueSection({ wedding }) {
  return (
    <section
      id="venue"
      style={{
        position: 'relative',
        padding: '70px 20px 85px',
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
        {/* Section Heading */}
        <div style={{ marginBottom: '28px' }}>
          <p
            className="font-heading"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#876136',
              marginBottom: '8px',
            }}
          >
            Sacred Destination
          </p>
          <h2
            className="font-heading gold-text-gradient"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              fontWeight: '600',
              letterSpacing: '0.06em',
            }}
          >
            {wedding.venue.sectionTitle}
          </h2>
        </div>

        {/* Venue Card */}
        <div
          className="invitation-arch-card"
          style={{
            maxWidth: '620px',
            margin: '0 auto',
            padding: '54px 30px 46px',
            background: '#FFF9F0',
            position: 'relative',
          }}
        >
          {/* Subtle temple / sacred arch watermark */}
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              border: '1.5px solid #D99A35',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              background: 'rgba(255, 245, 230, 0.9)',
              color: '#B97818',
              boxShadow: '0 4px 12px rgba(217, 154, 53, 0.15)',
            }}
          >
            <MapPin size={26} color="#B97818" />
          </div>

          <p
            className="font-heading"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.24em',
              color: '#A37E52',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            at
          </p>

          {/* SREE KRISHNA TEMPLE */}
          <h3
            className="font-heading gold-text-gradient gold-text-glow"
            style={{
              fontSize: 'clamp(1.7rem, 4.5vw, 2.3rem)',
              letterSpacing: '0.15em',
              lineHeight: 1.25,
              fontWeight: '700',
            }}
          >
            {wedding.venue.name}
          </h3>

          {/* GURUVAYUR */}
          <h4
            className="font-heading"
            style={{
              fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
              letterSpacing: '0.24em',
              color: '#654523',
              fontWeight: '600',
              marginTop: '6px',
            }}
          >
            {wedding.venue.location}
          </h4>

          {/* State / Country */}
          <p
            className="font-serif"
            style={{
              fontSize: '1.05rem',
              color: '#876136',
              marginTop: '10px',
              letterSpacing: '0.04em',
            }}
          >
            {wedding.venue.stateCountry}
          </p>

          <div className="gold-divider" style={{ margin: '24px auto', maxWidth: '280px' }}>
            <span style={{ color: '#D99A35', fontSize: '0.9rem' }}>✦</span>
          </div>

          {/* Sanctum note */}
          <p
            className="font-serif"
            style={{
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: '#654523',
              maxWidth: '460px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            &ldquo;{wedding.venue.sanctumNote}&rdquo;
          </p>

          {/* Action Buttons: Get Directions & Open Google Maps */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
            }}
          >
            <a
              href={wedding.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="royal-gold-button"
              style={{
                textDecoration: 'none',
                padding: '13px 28px',
              }}
            >
              <Navigation size={16} />
              <span>GET DIRECTIONS</span>
            </a>

            <a
              href={wedding.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="royal-outline-button"
              style={{
                textDecoration: 'none',
                padding: '12px 24px',
              }}
            >
              <ExternalLink size={15} />
              <span>Google Maps</span>
            </a>
          </div>

          {/* Transportation hint */}
          <p
            style={{
              fontSize: '0.75rem',
              color: '#8E683C',
              marginTop: '22px',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.08em',
              lineHeight: 1.5,
              maxWidth: '460px',
              margin: '22px auto 0',
            }}
          >
            {wedding.venue.directionsGuide}
          </p>
        </div>
      </div>
    </section>
  );
}
