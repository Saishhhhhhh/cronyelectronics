import React, { useEffect, useRef } from 'react';
import { cronyData } from '../data/cronyData';

export default function HeroSlider({ onOpenQuote }) {
  const swiperInstanceRef = useRef(null);
  const sliderRef = useRef(null);
  const slides = cronyData.heroSlides;

  useEffect(() => {
    const initSwiper = () => {
      if (!sliderRef.current || !window.Swiper) return;

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

      const paginationEl = sliderRef.current.querySelector('.swiper-pagination');
      const nextEl = sliderRef.current.querySelector('.swiper-button-next');
      const prevEl = sliderRef.current.querySelector('.swiper-button-prev');

      swiperInstanceRef.current = new window.Swiper(sliderRef.current, {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 5000,
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
        } catch (e) {}
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
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="container">
              <div className="col-lg-12">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="hero-text">
                      <h1>{slide.title}</h1>
                      <div className="text">
                        <p>{slide.description}</p>
                      </div>
                      <div className="link-box">
                        <a href={slide.link} className="btn">
                          {slide.linkText}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="hero-img">
                      <img src="/assets/img/hero-img.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="swiper-pagination"></div>
      <div className="swiper-button">
        <div className="swiper-button-next"><i className="flaticon-right-arrow"></i></div>
        <div className="swiper-button-prev"><i className="flaticon-left-arrow"></i></div>
      </div>
    </section>
  );
}
