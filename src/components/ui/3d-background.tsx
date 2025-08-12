import { useEffect, useRef } from 'react';

const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (6 + Math.random() * 4) + 's';
      container.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 10000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 800);

    // Initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="cyber-bg">
      <div className="cyber-grid" />
      <div className="floating-particles" ref={containerRef} />
    </div>
  );
};

export default Background3D;