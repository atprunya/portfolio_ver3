import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FragmentedSection = ({ title, items }) => {
  const ref = useRef(null);

  useEffect(() => {
    const pieces = ref.current.querySelectorAll('.piece');
    gsap.set(pieces, {
      x: (i) => (i % 2 ? -50 : 50),
      y: (i) => (i < 2 ? -50 : 50),
      autoAlpha: 0
    });
    gsap.to(pieces, {
      duration: 1,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'power2.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <section ref={ref} className="section-grid">
      <h2>{title}</h2>
      {items.map((content, i) => (
        <div className="bubble piece" key={i}>
          {content}
        </div>
      ))}
    </section>
  );
};

export default FragmentedSection;

