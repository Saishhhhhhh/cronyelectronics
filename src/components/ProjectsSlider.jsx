import React, { useEffect, useRef } from 'react';
import { cronyData } from '../data/cronyData';

export default function ProjectsSlider() {
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    const initSwiper = () => {
      if (window.Swiper && !swiperInstanceRef.current) {
        swiperInstanceRef.current = new window.Swiper(".project-slider", {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".project-slider .swiper-button-next",
            prevEl: ".project-slider .swiper-button-prev",
          },
          breakpoints: {
            1: { slidesPerView: 1 },
            556: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
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
    <section className="gap no-bottom" id="clients">
      <div className="container">
        <div className="heading two">
          <img src="/assets/img/heading-img-two.png" alt="Clients" />
          <span>Proven Track Record Nationwide</span>
          <h2>Trusted by India's Industry Leaders</h2>
        </div>

        {/* Project Slider */}
        <div className="swiper project-slider">
          <div className="swiper-wrapper">
            {cronyData.clients.map((client, idx) => (
              <div key={idx} className="swiper-slide">
                <div className={`projects ${idx % 2 === 1 ? 'mt-sm-5' : ''}`}>
                  <div className="project-img">
                    <figure>
                      <img 
                        src={client.image} 
                        alt={client.name} 
                        style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                      />
                    </figure>
                    <img src="/assets/img/bolt-img.png" alt="Bolt" className="bolt-img" />
                    <a href="#services"><i className="flaticon-right-up"></i></a>
                  </div>
                  <a href="#services">{client.name}</a>
                  <h5>{client.category}</h5>
                  <span>{client.metric}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-button">
            <div className="swiper-button-next"><i className="flaticon-right-arrow"></i></div>
            <div className="swiper-button-prev"><i className="flaticon-left-arrow"></i></div>
          </div>
        </div>

        {/* Fun Facts Row */}
        <div className="row section-fun-facts">
          <div className="col-lg-4 col-md-6">
            <div className="fun-facts">
              <i className="flaticon-wind-energy"></i>
              <div>
                <h2>30<span>+ Yrs</span></h2>
                <span>Industry Leadership</span>
              </div>
              <img src="/assets/img/bolt-fun.png" alt="Bolt" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="fun-facts">
              <i className="flaticon-link"></i>
              <div>
                <h2>500<span>+</span></h2>
                <span>Corporate Customers</span>
              </div>
              <img src="/assets/img/bolt-fun.png" alt="Bolt" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="fun-facts mb-0">
              <i className="flaticon-solar-panel-1"></i>
              <div>
                <h2>20<span>ms</span></h2>
                <span>Solid-State Voltage Regulation</span>
              </div>
              <img src="/assets/img/bolt-fun.png" alt="Bolt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
