// src/hooks/useFragmentAll.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function useFragmentAll() {
  useEffect(() => {
    // 画面上の全 section.section-grid を取得
    document.querySelectorAll('section.section-grid').forEach((section) => {
      const pieces = section.querySelectorAll('.bubble');
      if (!pieces.length) return;

      // 初期バラバラ配置＆透明化
      gsap.set(pieces, {
        x: (i) => (i % 2 ? -50 : 50),
        y: (i) => (i < 2 ? -50 : 50),
        autoAlpha: 0,
      });

      // スクロールで元位置に再構築
      gsap.to(pieces, {
        duration: 1,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    });
  }, []);
}

