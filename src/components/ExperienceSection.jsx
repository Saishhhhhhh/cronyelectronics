import React from 'react';
import { cronyData } from '../data/cronyData';

export default function ExperienceSection() {
  return (
    <section className="gap" id="about">
      <div className="container">
        <div className="heading">
          <img src="/assets/img/heading-img.png" alt="img" />
          <span>About Crony Electronics</span>
          <h2>30+ Years of Energy Saving Excellence</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="experience hover-img">
              <h3>We have 30+ years of experience</h3>
              <p>
                Crony Electronics Pvt Ltd has been pioneering energy-saving activities since 1993. First introducing energy-saving solutions for ACs in 1994 and microprocessor digital controllers in 1997 with Eata Electronics, we now cater to prestigious corporate giants like ONGC, Indian Railways, L&T, M&M, Kirloskar, Hindalco, and Sesa Goa across India.
              </p>
              <figure>
                <img 
                  src="/assets/img/works/about_engineering.jpg" 
                  alt="Crony Industrial Engineering & Energy Solutions" 
                  style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </figure>
              <div className="director-renewable">
                <img 
                  src="/assets/img/works/director_maulik_shah.jpg" 
                  alt={cronyData.company.director} 
                  style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <h4>{cronyData.company.director}</h4>
                  <span>Managing Director, {cronyData.company.shortName}</span>
                  <img src="/assets/img/signature.png" alt="signature" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="experience-img">
              <img 
                src="/assets/img/works/experience_engineer.jpg" 
                alt="Crony Certified Field Energy Specialist" 
                style={{ width: '100%', height: '640px', objectFit: 'cover', borderRadius: '12px' }}
              />
              <div className="count-style">
                <img src="/assets/img/solar-panel.png" alt="solar-panel" />
                <h2>500<span>+</span></h2>
                <p>Corporate Clients</p> 
              </div>
              <div className="count-style two">
                <img src="/assets/img/windmill.png" alt="windmill" />
                <h2>30<span>+</span></h2>
                <p>Years of Trust</p> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
