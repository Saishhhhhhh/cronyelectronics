import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pos = document.documentElement.scrollTop || document.body.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (calcHeight > 0) {
        const scrollValue = Math.round((pos * 100) / calcHeight);
        setScrollProgress(scrollValue);
      }
      setIsVisible(pos > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="progress"
      onClick={scrollToTop}
      style={{
        display: isVisible ? 'grid' : 'none',
        background: `conic-gradient(#009a4e ${scrollProgress}%, #fff ${scrollProgress}%)`,
        cursor: 'pointer',
      }}
    >
      <span id="progress-value">
        <i className="fa-solid fa-up-long"></i>
      </span>
    </div>
  );
}
