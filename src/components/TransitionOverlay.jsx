import React, { useEffect, useState } from 'react';

const SYMBOLS = ['⚙', '∴', '∞', '⊙', 'ψ', '¥', '⌘', 'λ', '≠', '∑'];

const TransitionOverlay = () => {
  const [showSymbol, setShowSymbol] = useState(false);
  const [symbol, setSymbol] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      setSymbol(rand);
      setShowSymbol(true);
      setTimeout(() => setShowSymbol(false), 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  if (!showSymbol) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '3rem',
      color: '#e50089',
      opacity: 0.8,
      zIndex: 999,
      pointerEvents: 'none',
      animation: 'fadeout 0.5s ease-out'
    }}>
      {symbol}
    </div>
  );
};

export default TransitionOverlay;

