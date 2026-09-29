import React, { useEffect, useRef, useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function HeroSlider({ onOpenQuote }) {
  const swiperInstanceRef = useRef(null);
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slides = cronyData.heroSlides;

  useEffect(() => {
    const initSwiper = () => {
      if (!sliderRef.current || !window.Swiper) return;

      // 1. Destroy any existing instance cleanly
      if (swiperInstanceRef.current) {
        try {
          swiperInstanceRef.current.destroy(true, true);
        } catch (e) {
          // ignore
        }
        swiperInstanceRef.current = null;
      }

      // 2. Explicitly purge any stale cloned duplicate slides left by Swiper's loop mode
      if (sliderRef.current) {
        const duplicates = sliderRef.current.querySelectorAll('.swiper-slide-duplicate');
        duplicates.forEach((el) => el.remove());
      }

      const swiper = new window.Swiper(sliderRef.current, {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        on: {
          slideChange: function () {
            setActiveSlideIndex(this.realIndex);
          },
        },
      });

      swiperInstanceRef.current = swiper;
    };

    const timer = setTimeout(initSwiper, 150);

    return () => {
      clearTimeout(timer);
      if (swiperInstanceRef.current) {
        try {
          swiperInstanceRef.current.destroy(true, true);
        } catch (e) {
          // ignore
        }
        swiperInstanceRef.current = null;
      }
      if (sliderRef.current) {
        const duplicates = sliderRef.current.querySelectorAll('.swiper-slide-duplicate');
        duplicates.forEach((el) => el.remove());
      }
    };
  }, []);

  const handleSlideSelect = (index) => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideToLoop(index);
      setActiveSlideIndex(index);
    }
  };

  const handlePrev = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideNext();
    }
  };

  return (
    <section className="crony-hero-viewport">
      {/* Background Slider Container */}
      <div ref={sliderRef} className="swiper hero-one-slider">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="hero-section-one swiper-slide"
            >
              {/* Ken Burns Animated Background Layer */}
              <div 
                className="hero-kenburns-bg"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />
              {/* Cinematic Multilayer Gradient Overlay */}
              <div className="hero-overlay" />
              <div className="hero-ambient-glow" />

              <div className="container">
                <div className="row align-items-center">
                  {/* Left Column: Command Center Headline & CTA */}
                  <div className="col-lg-7 col-md-12">
                    <div className="hero-text">
                      
                      {/* Live Innovation Badge */}
                      <div className="hero-status-pill">
                        <span className="hero-pulse-dot"></span>
                        <span className="hero-status-text">{slide.badge}</span>
                      </div>

                      {/* Creative Master Title */}
                      <h1 className="hero-creative-title">
                        {slide.titlePrefix}{' '}
                        <span className="hero-title-highlight">{slide.titleHighlight}</span>{' '}
                        {slide.titleSuffix}
                      </h1>

                      {/* Editorial Specification Text */}
                      <div className="text">
                        <p className="hero-creative-desc">{slide.description}</p>
                      </div>

                      {/* Action Suite */}
                      <div className="hero-cta-wrap">
                        <a href={slide.link} className="hero-btn-primary">
                          <span>{slide.linkText}</span>
                          <i className="flaticon-right-up"></i>
                        </a>
                        <button 
                          type="button" 
                          onClick={onOpenQuote} 
                          className="hero-btn-secondary"
                        >
                          <i className="fa-solid fa-file-shield"></i>
                          <span>Request Energy Audit</span>
                        </button>
                      </div>

                      {/* Client Trust Proofline */}
                      <div className="hero-trust-indicator">
                        <i className="fa-solid fa-bolt-lightning"></i>
                        <span>Validated across 500+ corporate facilities including ONGC, Indian Railways, L&T, and Mahindra.</span>
                      </div>

                    </div>
                  </div>

                  {/* Right Column: Floating Glassmorphic Telemetry HUD Card */}
                  <div className="col-lg-5 col-md-12 d-none d-lg-block">
                    <div className="hero-hud-card">
                      <div className="hud-card-header">
                        <div className="hud-tag">
                          <span className="hud-tag-dot"></span>
                          <span>{slide.telemetryHeader}</span>
                        </div>
                        <span className="hud-live-tag">VERIFIED</span>
                      </div>

                      <div className="hud-stat-box">
                        <div className="hud-stat-value">{slide.statValue}</div>
                        <div className="hud-stat-meta">
                          <div className="hud-stat-label">{slide.statLabel}</div>
                          <div className="hud-stat-sub">{slide.statSub}</div>
                        </div>
                      </div>

                      <div className="hud-divider"></div>

                      <ul className="hud-checkpoints">
                        {slide.statPoints.map((pt, pIdx) => (
                          <li key={pIdx}>
                            <i className="fa-solid fa-circle-check"></i>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="hud-card-footer">
                        <span className="hud-footer-badge">{slide.metricTag}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architectural Slide Dock (Interactive Navigator at Bottom) */}
      <div className="hero-architectural-dock-wrap">
        <div className="container">
          <div className="hero-architectural-dock">
            
            <div className="hero-dock-tabs">
              {slides.map((s, idx) => {
                const isActive = activeSlideIndex === idx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={`hero-dock-tab ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleSlideSelect(idx)}
                  >
                    <div className="dock-progress-track">
                      <div className="dock-progress-fill"></div>
                    </div>
                    <div className="dock-tab-inner">
                      <span className="dock-tab-num">0{idx + 1}</span>
                      <div className="dock-tab-info">
                        <span className="dock-tab-title">{s.dockTitle}</span>
                        <span className="dock-tab-sub">{s.dockSub}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Arrow Controls */}
            <div className="hero-dock-arrows">
              <button 
                type="button" 
                className="hero-arrow-btn" 
                onClick={handlePrev}
                title="Previous Slide"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button 
                type="button" 
                className="hero-arrow-btn" 
                onClick={handleNext}
                title="Next Slide"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
