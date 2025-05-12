// src/components/TVNoiseIntro.jsx
import React, { useEffect, useState } from 'react';

const TVNoiseIntro = () => {
  // true の間だけノイズ画面を表示し、その後 null を返して非表示にする
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 1.5 秒後にフェードアウト & 削除
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'black url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif") center/cover no-repeat',
        zIndex: 9999,
        pointerEvents: 'none',
        animation: 'fadeOut 0.5s ease-out 1.2s forwards'
      }}
    />
  );
};

export default TVNoiseIntro;

