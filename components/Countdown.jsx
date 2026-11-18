'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, CheckCircle2 } from 'lucide-react';

export default function Countdown({ wedding }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(wedding.date.isoDateTime).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [wedding.date.isoDateTime]);

  // Google Calendar Link generator
  const handleAddToCalendar = () => {
    // 2027-01-07T09:30:00+05:30
    // UTC: 20270107T040000Z
    const startDate = '20270107T040000Z';
    const endDate = '20270107T083000Z';
    const title = encodeURIComponent(wedding.date.calendarTitle || 'Wedding of Rajesh & Nithya');
    const details = encodeURIComponent(wedding.date.calendarDescription || 'Wedding ceremony at Guruvayur Temple');
    const location = encodeURIComponent(`${wedding.venue.name}, ${wedding.venue.location}`);

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="wedding-date"
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
        {/* Section Header */}
        <div style={{ marginBottom: '24px' }}>
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
            Auspicious Muhurtham
          </p>
          <h2
            className="font-heading gold-text-gradient"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
              fontWeight: '600',
              letterSpacing: '0.08em',
            }}
          >
            The Auspicious Date
          </h2>
        </div>

        {/* Calendar-Inspired Date Display (Matching PDF exact structure) */}
        <div
          className="invitation-arch-card"
          style={{
            maxWidth: '560px',
            margin: '0 auto 40px',
            padding: '48px 30px',
            background: '#FFF9F0',
          }}
        >
          {/* Month */}
          <div
            className="font-heading"
            style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)',
              letterSpacing: '0.28em',
              color: '#876136',
              fontWeight: '600',
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}
          >
            {wedding.date.month}
          </div>

          {/* Golden Horizontal Divider with Day, Date Number, and Time */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              margin: '8px 0',
              padding: '12px 0',
              borderTop: '1.5px solid rgba(217, 154, 53, 0.45)',
              borderBottom: '1.5px solid rgba(217, 154, 53, 0.45)',
            }}
          >
            {/* THURSDAY */}
            <div
              className="font-heading"
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
                letterSpacing: '0.2em',
                color: '#654523',
                fontWeight: '600',
                flex: 1,
                textAlign: 'right',
              }}
            >
              {wedding.date.dayOfWeek}
            </div>

            {/* Date Number: 07 */}
            <div
              className="font-heading gold-text-gradient gold-text-glow"
              style={{
                fontSize: 'clamp(3.8rem, 10vw, 5.2rem)',
                lineHeight: 1,
                fontWeight: '700',
                padding: '0 8px',
              }}
            >
              {wedding.date.day}
            </div>

            {/* AT 9:30 AM */}
            <div
              className="font-heading"
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
                letterSpacing: '0.18em',
                color: '#654523',
                fontWeight: '600',
                flex: 1,
                textAlign: 'left',
              }}
            >
              {wedding.date.displayTime}
            </div>
          </div>

          {/* Year: 2027 */}
          <div
            className="font-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3.8vw, 2rem)',
              letterSpacing: '0.28em',
              color: '#B97818',
              fontWeight: '700',
              marginTop: '12px',
            }}
          >
            {wedding.date.year}
          </div>

          {/* Add to Calendar Button */}
          <div style={{ marginTop: '26px' }}>
            <button
              onClick={handleAddToCalendar}
              className="royal-outline-button"
              style={{ fontSize: '0.8rem', padding: '10px 22px' }}
            >
              <Calendar size={15} />
              <span>Add to Calendar</span>
            </button>
          </div>
        </div>

        {/* Live Countdown Section */}
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p
            className="font-heading"
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#876136',
              marginBottom: '18px',
            }}
          >
            Countdown to Celebration
          </p>

          {mounted && timeLeft.isCompleted ? (
            /* Celebration Completed Message */
            <div
              style={{
                background: 'rgba(255, 245, 230, 0.95)',
                border: '1.5px solid #D99A35',
                borderRadius: '12px',
                padding: '30px 20px',
                boxShadow: '0 6px 20px rgba(185, 120, 24, 0.15)',
              }}
            >
              <CheckCircle2 size={36} color="#637D45" style={{ margin: '0 auto 10px' }} />
              <h3
                className="font-heading gold-text-gradient"
                style={{ fontSize: '1.5rem', marginBottom: '8px' }}
              >
                Happily Celebrated!
              </h3>
              <p
                className="font-serif"
                style={{ fontSize: '1.1rem', color: '#654523', fontStyle: 'italic' }}
              >
                Thank you for showering your divine blessings and love upon us.
              </p>
            </div>
          ) : (
            /* Active Live Countdown Cards */
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
              }}
            >
              {[
                { label: 'DAYS', value: mounted ? timeLeft.days : 0 },
                { label: 'HOURS', value: mounted ? timeLeft.hours : 0 },
                { label: 'MINUTES', value: mounted ? timeLeft.minutes : 0 },
                { label: 'SECONDS', value: mounted ? timeLeft.seconds : 0 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFF8ED',
                    border: '1px solid rgba(217, 154, 53, 0.45)',
                    borderRadius: '8px',
                    padding: '16px 8px',
                    boxShadow: '0 4px 14px rgba(101, 69, 35, 0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '65px',
                  }}
                >
                  <span
                    className="font-heading gold-text-gradient"
                    style={{
                      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                      fontWeight: '700',
                      lineHeight: 1.1,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span
                    className="font-heading"
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      color: '#876136',
                      marginTop: '6px',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
