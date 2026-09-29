import React, { useEffect, useRef, useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function ServicesSection({ onSelectProduct }) {
  const swiperInstanceRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryTabs = [
    { id: 'all', label: 'All Solutions (9)', targetIndex: 0 },
    { id: 'energy', label: 'Energy Savers', targetIndex: 0 },
    { id: 'power', label: 'Power Quality (VRP)', targetIndex: 1 },
    { id: 'thermal', label: 'Thermal Coatings', targetIndex: 2 },
    { id: 'smart', label: 'Smart Automation', targetIndex: 3 },
    { id: 'sleeves', label: 'Thermal Insulation', targetIndex: 4 },
    { id: 'flooring', label: 'German Rubber Flooring', targetIndex: 5 },
    { id: 'daylight', label: 'Natural Daylight System', targetIndex: 6 },
  ];

  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper && !swiperInstanceRef.current) {
        swiperInstanceRef.current = new window.Swiper(".services-slider", {
          slidesPerView: 3,
          spaceBetween: 28,
          loop: true,
          speed: 700,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          navigation: {
            nextEl: ".services-slider-next",
            prevEl: ".services-slider-prev",
          },
          breakpoints: {
            1: { slidesPerView: 1, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1100: { slidesPerView: 3, spaceBetween: 28 },
          },
          on: {
            slideChange: function () {
              const real = (this.realIndex % cronyData.products.length) + 1;
              setCurrentSlide(real);
            },
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

  const handleCategoryClick = (catId, targetIndex) => {
    setActiveCategory(catId);
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideToLoop(targetIndex, 600);
    }
  };

  return (
    <section id="services" className="gap services-carousel-section">
      <div className="container">
        {/* Modern Section Header */}
        <div className="crony-services-header">
          <div className="crony-services-header-text">
            <div className="crony-services-eyebrow">
              <span className="crony-spark-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
                </svg>
              </span>
              <span>PROVEN ENERGY SAVING SOLUTIONS</span>
            </div>
            <h2 className="crony-services-title">
              Best-In-Class Industrial Products & Engineering
            </h2>
            <p className="crony-services-subtitle">
              Pioneering digital energy management, solid-state 20ms voltage protection, and German high-performance materials engineered for India's leading industrial enterprises.
            </p>
          </div>

          {/* Navigation Controls & Live Counter */}
          <div className="crony-services-controls">
            <div className="crony-slide-counter">
              <span className="counter-curr">{String(currentSlide).padStart(2, '0')}</span>
              <span className="counter-divider">/</span>
              <span className="counter-max">{String(cronyData.products.length).padStart(2, '0')}</span>
            </div>

            <div className="crony-nav-arrows">
              <button 
                type="button" 
                className="crony-nav-btn services-slider-prev" 
                aria-label="Previous Product Solution"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button 
                type="button" 
                className="crony-nav-btn services-slider-next" 
                aria-label="Next Product Solution"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="crony-category-filter-wrap">
          <div className="crony-category-filter-bar">
            {categoryTabs.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`crony-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id, cat.targetIndex)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Industrial Services Swiper Carousel */}
        <div className="swiper services-slider">
          <div className="swiper-wrapper">
            {cronyData.products.map((prod, idx) => (
              <div key={prod.id} className="swiper-slide">
                <div 
                  className="crony-product-card"
                  onClick={() => onSelectProduct({ title: prod.title })}
                >
                  {/* Top Bar with Category & Serial Number */}
                  <div className="crony-card-topbar">
                    <span className="crony-card-cat-badge">{prod.category}</span>
                    <span className="crony-card-serial">#{String(idx + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Framed Image Showcase */}
                  <div className="crony-card-image-box">
                    <img 
                      src={prod.image} 
                      alt={prod.title} 
                      className="crony-card-img" 
                      loading="eager"
                    />
                    
                    {/* Dark gradient base on image for spec legibility */}
                    <div className="crony-card-image-overlay"></div>

                    {/* Floating Spec Ribbon on Image */}
                    <div className="crony-card-spec-ribbon">
                      <i className="fa-solid fa-bolt-lightning"></i>
                      <span>{prod.highlight}</span>
                    </div>

                    {/* Floating Squircle Icon Badge */}
                    <div className="crony-card-icon-badge">
                      <i className={prod.icon}></i>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="crony-card-body">
                    <h3 className="crony-card-title">
                      <a 
                        href="#contact" 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onSelectProduct({ title: prod.title });
                        }}
                      >
                        {prod.title}
                      </a>
                    </h3>
                    <p className="crony-card-desc">{prod.shortDesc}</p>
                  </div>

                  {/* Interactive Action Row */}
                  <div className="crony-card-footer">
                    <span className="crony-card-action-label">Request Technical Specs</span>
                    <button 
                      type="button" 
                      className="crony-card-action-btn"
                      aria-label={`Inquire about ${prod.title}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onSelectProduct({ title: prod.title });
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Benchmark & Trust Strip */}
        <div className="crony-trust-strip">
          <div className="crony-trust-item">
            <div className="crony-trust-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div className="crony-trust-info">
              <h4>Up to 30% Verified Savings</h4>
              <p>Documented energy reduction proven across corporate HVAC & industrial machinery.</p>
            </div>
          </div>

          <div className="crony-trust-item">
            <div className="crony-trust-icon">
              <i className="fa-solid fa-bolt-lightning"></i>
            </div>
            <div className="crony-trust-info">
              <h4>20ms Ultra-Fast VRP</h4>
              <p>Solid-state voltage regulation safeguarding CNCs, automation & lab robotics.</p>
            </div>
          </div>

          <div className="crony-trust-item">
            <div className="crony-trust-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="crony-trust-info">
              <h4>500+ Enterprise Installations</h4>
              <p>Trusted partner for ONGC, Indian Railways, L&T, Mahindra & Mahindra, Hindalco.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
