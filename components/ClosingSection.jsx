'use client';

import React, { useState } from 'react';
import { Share2, Heart, Check, Copy } from 'lucide-react';

export default function ClosingSection({ wedding }) {
  const [copied, setCopied] = useState(false);

  // WhatsApp Share handler
  const handleWhatsAppShare = () => {
    const text = `🌸 *Wedding Invitation* 🌸\n\nTogether with their families, *${wedding.groom.fullName}* and *${wedding.bride.fullName}* cordially invite you to join the occasion of their joyous commitment.\n\n🗓 *Date:* ${wedding.date.displayFormatted}\n⏰ *Time:* ${wedding.date.time}\n📍 *Venue:* ${wedding.venue.name}, ${wedding.venue.location}\n\nView our wedding card here:\n${typeof window !== 'undefined' ? window.location.href : 'https://weddinginvition.com/' + wedding.slug}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Copy Link handler
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <footer
      id="closing"
      style={{
        position: 'relative',
        padding: '80px 20px 120px',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, #FDF1DE 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Sacred Lotus Blossom Icon */}
        <div
          style={{
            width: '80px',
            margin: '0 auto 24px',
            opacity: 0.9,
          }}
        >
          <img
            src={wedding.media.lotusSingle}
            alt="Sacred Lotus"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Closing Quote */}
        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.25rem, 3.2vw, 1.65rem)',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: '#654523',
            maxWidth: '560px',
            margin: '0 auto 28px',
          }}
        >
          &ldquo;{wedding.closingMessage.presenceNote}&rdquo;
        </p>

        {/* With love and blessings */}
        <p
          className="font-heading"
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#876136',
            marginBottom: '14px',
          }}
        >
          {wedding.closingMessage.withLove}
        </p>

        {/* Couple Sign-off */}
        <h3
          className="font-script gold-text-gradient gold-text-glow"
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 3.6rem)',
            fontWeight: '400',
            lineHeight: 1.25,
            marginBottom: '32px',
          }}
        >
          {wedding.closingMessage.signatures}
        </h3>

        {/* Share buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={handleWhatsAppShare}
            className="royal-gold-button"
            style={{ padding: '12px 26px', fontSize: '0.84rem' }}
          >
            <Share2 size={15} />
            <span>Share via WhatsApp</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="royal-outline-button"
            style={{ padding: '11px 22px', fontSize: '0.82rem' }}
          >
            {copied ? <Check size={15} color="#637D45" /> : <Copy size={15} />}
            <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
          </button>
        </div>

        <p
          className="font-heading"
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.22em',
            color: '#B97818',
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          ॥ सर्व मङ्गल माङ्गल्ये शिवे सर्वार्थ साधिके ॥
        </p>
      </div>

      {/* Magnificent Bottom Mandala from PDF Page 1 */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(900px, 120vw)',
          opacity: 0.28,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <img
          src={wedding.media.mandalaBottom}
          alt="Traditional Gold Mandala Base"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </footer>
  );
}
