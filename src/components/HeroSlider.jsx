import React, { useEffect, useRef } from 'react';
import { cronyData } from '../data/cronyData';

export default function HeroSlider({ onOpenQuote }) {
  const swiperInstanceRef = useRef(null);
  const sliderRef = useRef(null);
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

      // 3. Initialize Swiper directly on this scoped DOM container
      const paginationEl = sliderRef.current.querySelector('.swiper-pagination');
      const nextEl = sliderRef.current.querySelector('.swiper-button-next');
      const prevEl = sliderRef.current.querySelector('.swiper-button-prev');

      swiperInstanceRef.current = new window.Swiper(sliderRef.current, {
        slidesPerView: 1,
        loop: true,
        speed: 1100,
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: paginationEl,
          clickable: true,
        },
        navigation: {
          nextEl: nextEl,
          prevEl: prevEl,
        },
      });
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

  return (
    <section ref={sliderRef} className="swiper hero-one-slider">
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
            {/* Subtle Gradient Overlay */}
            <div className="hero-overlay" />

            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-10">
                  <div className="hero-text">
                    <span className="hero-subtitle">{slide.badge}</span>
                    <h1>{slide.title}</h1>
                    <div className="text">
                      <p>{slide.description}</p>
                    </div>
                    <div className="hero-cta-wrap">
                      <a href={slide.link} className="hero-btn-primary">
                        {slide.linkText} <i className="flaticon-right-up"></i>
                      </a>
                      <a href="#about" className="hero-btn-secondary">
                        About Crony
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="swiper-pagination"></div>
      <div className="swiper-button hero-nav-controls">
        <div className="swiper-button-prev" title="Previous Slide"><i className="flaticon-left-arrow"></i></div>
        <div className="swiper-button-next" title="Next Slide"><i className="flaticon-right-arrow"></i></div>
      </div>
    </section>
  );
}
