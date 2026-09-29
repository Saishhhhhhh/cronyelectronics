import React, { useEffect, useRef, useState } from 'react';
import { cronyData } from '../data/cronyData';

const productSpecs = {
  "ac-saver": {
    ref: "CR-AC-94",
    spec: "Up to 30% Energy Cut • Dual Microprocessor Logic",
  },
  "vrp": {
    ref: "CR-VRP-20MS",
    spec: "< 20ms Solid-State Correction • 3 to 360 kVA",
  },
  "elastoclad": {
    ref: "CR-ELASTO-HR",
    spec: "10°C - 12°C Surface Temp Drop • Dual Waterproofing",
  },
  "motion-sensor": {
    ref: "CR-PIR-AUTO",
    spec: "15-Min Zero Occupancy Cutoff • 100% Wire-Free",
  },
  "thermal-sleeves": {
    ref: "CR-JACKET-TH",
    spec: "Custom Tailored Reusable Jackets • Flanges & Valves",
  },
  "nora-flooring": {
    ref: "CR-NORA-GER",
    spec: "6 N/mm² Forklift Dynamic Load • ESD & Cleanroom",
  },
  "brilantor": {
    ref: "CR-DAYLIGHT-400",
    spec: "Up to 400 Lux Glare-Free Light • Zero Heat Ingress",
  },
  "ir-glass": {
    ref: "CR-IR-FACADE",
    spec: "Blocks 95% Solar IR Heat • 100% Optical Clarity",
  },
  "illuminator": {
    ref: "CR-BALLAST-07",
    spec: "First in India (2007) • HPSV, MH & HPMV Compatible",
  },
};

export default function ServicesSection({ onSelectProduct }) {
  const swiperInstanceRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryTabs = [
    { id: 'all', label: 'All Solutions (9)', targetIndex: 0 },
    { id: 'energy', label: 'HVAC Energy Savers', targetIndex: 0 },
    { id: 'power', label: 'Voltage Regulation (VRP)', targetIndex: 1 },
    { id: 'thermal', label: 'Thermal Coatings', targetIndex: 2 },
    { id: 'smart', label: 'Smart Automation', targetIndex: 3 },
    { id: 'sleeves', label: 'Thermal Insulation', targetIndex: 4 },
    { id: 'flooring', label: 'German Rubber Flooring', targetIndex: 5 },
    { id: 'daylight', label: 'Daylight Harvesting', targetIndex: 6 },
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
            1: { slidesPerView: 1, spaceBetween: 16 },
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
    <section id="services" className="gap industrial-portfolio-section">
      <div className="container">
        
        {/* Authentic Industrial Header */}
        <div className="industrial-header-row">
          <div className="industrial-header-text">
            <div className="industrial-header-meta">
              <span className="meta-accent-bar"></span>
              <span className="meta-prefix">EST. 1993 // INDUSTRIAL PORTFOLIO</span>
            </div>
            <h2 className="industrial-header-title">
              Proven Energy Saving Solutions & Engineering
            </h2>
            <p className="industrial-header-desc">
              Over 30 years of field-tested engineering protecting mission-critical equipment and delivering documented energy reductions across 500+ Indian corporate giants.
            </p>
          </div>

          {/* Minimalist Tactile Controls */}
          <div className="industrial-header-controls">
            <div className="industrial-counter-box">
              <span className="counter-active">{String(currentSlide).padStart(2, '0')}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">{String(cronyData.products.length).padStart(2, '0')}</span>
            </div>

            <div className="industrial-nav-buttons">
              <button 
                type="button" 
                className="industrial-nav-btn services-slider-prev" 
                aria-label="Previous Industrial Solution"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </button>
              <button 
                type="button" 
                className="industrial-nav-btn services-slider-next" 
                aria-label="Next Industrial Solution"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="square" strokeLinejoin="miter"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Typographic Category Tab Strip with Solid Underline */}
        <div className="industrial-tabs-wrap">
          <div className="industrial-tabs-bar">
            {categoryTabs.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`industrial-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id, cat.targetIndex)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Industrial Architecture Carousel */}
        <div className="swiper services-slider">
          <div className="swiper-wrapper">
            {cronyData.products.map((prod, idx) => {
              const specMeta = productSpecs[prod.id] || { ref: `CR-0${idx + 1}`, spec: prod.highlight };
              
              return (
                <div key={prod.id} className="swiper-slide">
                  <div 
                    className="industrial-card"
                    onClick={() => onSelectProduct({ title: prod.title })}
                  >
                    {/* Top Technical Metadata */}
                    <div className="industrial-card-meta">
                      <span className="card-cat-badge">{prod.category}</span>
                      <span className="card-ref-code">{specMeta.ref}</span>
                    </div>

                    {/* Edge-to-Edge Framed Image */}
                    <div className="industrial-card-image-box">
                      <img 
                        src={prod.image} 
                        alt={prod.title} 
                        className="industrial-card-img" 
                        loading="eager"
                      />
                    </div>

                    {/* Engineering Data-Plate */}
                    <div className="industrial-card-dataplate">
                      <div className="dataplate-label">KEY SPECIFICATION</div>
                      <div className="dataplate-val">{specMeta.spec}</div>
                    </div>

                    {/* Title & Description */}
                    <div className="industrial-card-body">
                      <h3 className="industrial-card-title">
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
                      <p className="industrial-card-desc">{prod.shortDesc}</p>
                    </div>

                    {/* Solid Tactile CTA Button */}
                    <div className="industrial-card-footer">
                      <button 
                        type="button" 
                        className="industrial-cta-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onSelectProduct({ title: prod.title });
                        }}
                      >
                        <span>Inquire Technical Data</span>
                        <span className="cta-arrow">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industrial Benchmark & Performance Plate */}
        <div className="industrial-proof-strip">
          <div className="industrial-proof-cell">
            <div className="proof-metric">Up to 30%</div>
            <div className="proof-heading">Documented Power Savings</div>
            <p className="proof-desc">Audited and verified reductions across industrial HVAC and heavy plant equipment nationwide.</p>
          </div>

          <div className="industrial-proof-cell">
            <div className="proof-metric">&lt; 20 ms</div>
            <div className="proof-heading">Solid-State VRP Safeguard</div>
            <p className="proof-desc">Microsecond voltage correction protecting mission-critical CNCs, lab automation and robotics.</p>
          </div>

          <div className="industrial-proof-cell">
            <div className="proof-metric">500+</div>
            <div className="proof-heading">Enterprise Deployments</div>
            <p className="proof-desc">Long-term partner for ONGC, Indian Railways, Larsen &amp; Toubro, Mahindra &amp; Mahindra, Hindalco.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
