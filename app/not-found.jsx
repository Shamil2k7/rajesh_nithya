import React from 'react';

export const metadata = {
  title: '404 - Invitation Not Found',
  description: 'The requested wedding invitation does not exist.',
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFF5E6',
        color: '#654523',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="bg-mandala-tile"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
        }}
      />

      <div
        className="invitation-arch-card"
        style={{
          maxWidth: '520px',
          width: '100%',
          padding: '60px 30px',
          background: '#FFF9F0',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: '64px',
            margin: '0 auto 16px',
            opacity: 0.85,
          }}
        >
          <img
            src="/assets/images/lotus-single.png"
            alt="Lotus"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <h1
          className="font-heading gold-text-gradient"
          style={{
            fontSize: '3rem',
            lineHeight: 1.1,
            marginBottom: '10px',
            fontWeight: '700',
          }}
        >
          404
        </h1>

        <h2
          className="font-heading"
          style={{
            fontSize: '1.2rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#876136',
            marginBottom: '16px',
          }}
        >
          Invitation Not Found
        </h2>

        <div className="gold-divider" style={{ margin: '18px auto', maxWidth: '240px' }}>
          <span style={{ color: '#D99A35', fontSize: '0.8rem' }}>✦</span>
        </div>

        <p
          className="font-serif"
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: '#654523',
            maxWidth: '380px',
            margin: '0 auto',
            fontStyle: 'italic',
          }}
        >
          The wedding invitation you are looking for does not exist or may have been moved.
        </p>
      </div>
    </main>
  );
}
