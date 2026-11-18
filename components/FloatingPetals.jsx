'use client';

import React, { useEffect, useRef } from 'react';

export default function FloatingPetals({ count = 22, active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create petal particle objects
    // Lotus petal shape: delicate soft pink with slight gradient and darker pink tip
    const petals = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 12 + 10,
      speedY: Math.random() * 0.8 + 0.6,
      speedX: Math.random() * 0.7 - 0.35,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.2,
      opacity: Math.random() * 0.5 + 0.35,
      sway: Math.random() * 0.02 + 0.01,
      swayOffset: Math.random() * Math.PI * 2,
    }));

    function drawPetal(ctx, x, y, size, rotation, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.globalAlpha = opacity;

      // Draw graceful lotus petal curve
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.8, -size * 0.5, size * 0.7, size * 0.6, 0, size);
      ctx.bezierCurveTo(-size * 0.7, size * 0.6, -size * 0.8, -size * 0.5, 0, -size);

      // Lotus pink petal gradient
      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, '#E99A9D');
      grad.addColorStop(0.5, '#F4B8B9');
      grad.addColorStop(1, '#FFF2EA');

      ctx.fillStyle = grad;
      ctx.fill();

      // Soft petal spine / vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.lineTo(0, size * 0.7);
      ctx.strokeStyle = 'rgba(217, 154, 53, 0.2)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    }

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(time + p.swayOffset) * 0.8 + p.speedX;
        p.rotation += p.rotationSpeed;

        // Reset if off bottom
        if (p.y > height + 40) {
          p.y = -30;
          p.x = Math.random() * width;
        }
        if (p.x > width + 30) p.x = -20;
        if (p.x < -30) p.x = width + 20;

        drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.opacity);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 12,
      }}
      aria-hidden="true"
    />
  );
}
