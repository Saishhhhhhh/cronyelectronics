import React, { useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = cronyData.testimonials;
  const current = testimonials[activeSlide] || testimonials[0];

  return (
    <section className="section-customer" style={{ backgroundImage: 'url(/assets/img/customer-background.png)' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading two">
              <img src="/assets/img/heading-img-two.png" alt="Testimonials" />
              <span>Client Feedback & Proven Results</span>
              <h2>What Our Enterprise Customers Say</h2>
            </div>

            {/* Nav Avatars */}
            <div className="nav-c-slider" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '25px' }}>
              {testimonials.map((t, idx) => (
                <a
                  key={idx}
                  className={`next-slide ${activeSlide === idx ? 'nav-active' : ''}`}
                  href="javascript:void(0)"
                  onClick={() => setActiveSlide(idx)}
                  style={{
                    display: 'inline-block',
                    border: activeSlide === idx ? '3px solid #e87713' : '2px solid transparent',
                    borderRadius: '50%',
                    padding: '2px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <img
                    src={t.avatar || `/assets/img/works/client_avatar_${idx+1}.jpg`}
                    alt={t.author}
                    style={{ width: '65px', height: '65px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                </a>
              ))}
            </div>

            <div className="customer">
              <h5>Customer satisfaction and quantifiable ROI drive our business</h5>
              <ul className="star">
                <li><i className="fa-solid fa-star" style={{ color: '#e87713' }}></i></li>
                <li><i className="fa-solid fa-star" style={{ color: '#e87713' }}></i></li>
                <li><i className="fa-solid fa-star" style={{ color: '#e87713' }}></i></li>
                <li><i className="fa-solid fa-star" style={{ color: '#e87713' }}></i></li>
                <li><i className="fa-solid fa-star" style={{ color: '#e87713' }}></i></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="c-slider" style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
              <div>
                <img src="/assets/img/double-quote.png" alt="Quote" style={{ marginBottom: '20px' }} />
                <p style={{ fontSize: '18px', lineHeight: '32px', color: '#333', fontStyle: 'italic' }}>
                  "{current.quote}"
                </p>
                <ul style={{ marginTop: '25px', listStyle: 'none', padding: 0 }}>
                  <li><h3 style={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>{current.author}</h3></li>
                  <li><h5 style={{ fontSize: '15px', color: '#005296', fontWeight: 600, marginTop: '4px' }}>{current.company}</h5></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
