import React, { useEffect, useRef } from 'react';
import { cronyData } from '../data/cronyData';

export default function ClientsSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper && !swiperRef.current) {
        swiperRef.current = new window.Swiper(".clients-slider", {
          slidesPerView: 5,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
            10: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          },
        });
      }
    };

    const timer = setTimeout(initSwiper, 150);

    return () => {
      clearTimeout(timer);
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, []);

  return (
    <div className="container gap no-top">
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#888', fontWeight: 700 }}>
          Powering India's Leading Industrial Enterprises
        </span>
      </div>
      <div className="swiper clients-slider">
        <div className="swiper-wrapper">
          {cronyData.clients.map((client, idx) => (
            <div key={idx} className="partner swiper-slide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div 
                style={{ 
                  background: '#f8f9fa', 
                  border: '1px solid #eaeaea', 
                  padding: '16px 20px', 
                  borderRadius: '8px', 
                  textAlign: 'center',
                  width: '100%',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#222'
                }}
              >
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
