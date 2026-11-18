'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function FloatingLocationButton({ venue }) {
  const handleScrollToVenue = (e) => {
    e.preventDefault();
    const venueEl = document.getElementById('venue');
    if (venueEl) {
      venueEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenMaps = (e) => {
    e.stopPropagation();
    if (venue?.googleMapsUrl) {
      window.open(venue.googleMapsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
      }}
      role="region"
      aria-label="Floating Venue & Location Controls"
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 248, 238, 0.95), rgba(252, 238, 219, 0.95))',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(217, 154, 53, 0.6)',
          borderRadius: '40px',
          padding: '5px 14px 5px 6px',
          boxShadow: '0 8px 30px rgba(185, 120, 24, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
        onClick={handleScrollToVenue}
        title="View Wedding Venue"
      >
        {/* MapPin Circle Button */}
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #B97818 0%, #D99A35 50%, #B97818 100%)',
            border: '1px solid rgba(255, 231, 154, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF5E6',
            boxShadow: '0 4px 12px rgba(185, 120, 24, 0.35)',
            flexShrink: 0,
          }}
        >
          <MapPin size={19} />
        </div>

        {/* Location Label */}
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <span
            className="font-heading"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#654523',
              fontWeight: '700',
              lineHeight: 1.15,
            }}
          >
            Location
          </span>
          <span
            style={{
              fontSize: '0.68rem',
              color: '#876136',
              letterSpacing: '0.04em',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Guruvayur
          </span>
        </div>

        {/* Quick Directions External Link Icon */}
        <button
          onClick={handleOpenMaps}
          style={{
            marginLeft: '4px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(217, 154, 53, 0.12)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#B97818',
            transition: 'background 0.2s ease',
          }}
          title="Open in Google Maps"
          aria-label="Open in Google Maps"
        >
          <Navigation size={14} />
        </button>
      </div>
    </div>
  );
}
