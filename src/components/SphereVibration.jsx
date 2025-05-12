// src/components/SphereVibration.jsx
import React, { useRef, useEffect } from 'react';

const SphereVibration = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // フルスクリーンにキャンバスをセット
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // ボールの初期配置
    const balls = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 4 + Math.random() * 6,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    // FPS 制限の設定
    const FPS = 30;
    const FRAME_INTERVAL = 1000 / FPS;  // ≒33.33ms
    let lastTime = performance.now();
    let animationId;

    const render = (time) => {
      animationId = requestAnimationFrame(render);

      const delta = time - lastTime;
      if (delta < FRAME_INTERVAL) {
        // 次のフレームまでスキップ
        return;
      }
      // フレームタイミングを調整
      lastTime = time - (delta % FRAME_INTERVAL);

      // 描画処理
      ctx.clearRect(0, 0, w, h);
      balls.forEach(b => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = '#e50089';
        ctx.fill();

        // 位置更新＆跳ね返り判定
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < 0 || b.x > w) b.dx *= -1;
        if (b.y < 0 || b.y > h) b.dy *= -1;
      });
    };

    // アニメーション開始
    animationId = requestAnimationFrame(render);

    // クリーンアップ
    return () => cancelAnimationFrame(animationId);
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
        zIndex: 6,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SphereVibration;

