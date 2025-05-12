// src/components/CursorTrail.jsx
import React, { useRef, useEffect } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // safety check
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    let hasMoved = false;
    let mouseX = 0, mouseY = 0;

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasMoved = true;
    };
    window.addEventListener('pointermove', onMove);

    let lastTime = 0;
    const FPS = 30;
    const interval = 1000 / FPS;

    const render = (time) => {
      requestAnimationFrame(render);

      if (time - lastTime < interval) return;
      lastTime = time;

      ctx.clearRect(0, 0, w, h);

      if (hasMoved && particles.current.length < 200) {
        particles.current.push({ x: mouseX, y: mouseY, life: 1 });
      }

      particles.current = particles.current.filter((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5 * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229,0,137,${p.life})`;
        ctx.fill();
        p.life -= 0.02;
        return p.life > 0;
      });
    };

    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 20,
      }}
    />
  );
}

