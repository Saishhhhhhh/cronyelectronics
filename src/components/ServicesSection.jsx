import React, { useEffect, useRef } from 'react';
import { cronyData } from '../data/cronyData';

export default function ServicesSection({ onSelectProduct }) {
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper && !swiperInstanceRef.current) {
        swiperInstanceRef.current = new window.Swiper(".services-slider", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          speed: 800,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: ".services-slider-next",
            prevEl: ".services-slider-prev",
          },
          breakpoints: {
            1: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1100: { slidesPerView: 3, spaceBetween: 30 },
          },
        });
      }
    };

    const timer = setTimeout(initSwiper, 150);

    return () => {
      clearTimeout(timer);
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="services" className="gap services-carousel-section">
      <div className="container">
        {/* Section Header with Title & Matching Controls */}
        <div className="services-section-header">
          <div className="heading two" style={{ margin: 0 }}>
            <img src="/assets/img/heading-img-two.png" alt="img" />
            <span>Proven Energy Saving Solutions</span>
            <h2>Best-In-Class Industrial Products & Engineering</h2>
          </div>

          {/* Navigation Controls in Header */}
          <div className="services-nav-controls">
            <button 
              type="button" 
              className="services-nav-btn services-slider-prev" 
              aria-label="Previous Product"
            >
              <i className="flaticon-left-arrow"></i>
            </button>
            <button 
              type="button" 
              className="services-nav-btn services-slider-next" 
              aria-label="Next Product"
            >
              <i className="flaticon-right-arrow"></i>
            </button>
          </div>
        </div>

        {/* Infinite Services Swiper Carousel */}
        <div className="swiper services-slider">
          <div className="swiper-wrapper">
            {cronyData.products.map((prod) => (
              <div key={prod.id} className="swiper-slide">
                <div className="services">
                  <i className={prod.icon}></i>
                  <h3>
                    <a 
                      href="#contact" 
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectProduct({ title: prod.title });
                      }}
                    >
                      {prod.title}
                    </a>
                  </h3>
                  <p>{prod.shortDesc}</p>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectProduct({ title: prod.title });
                    }}
                  >
                    <i className="flaticon-right-up"></i>
                  </a>
                  <img src={prod.image} alt={prod.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
