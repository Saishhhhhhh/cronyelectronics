import React, { useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function ExperienceSection() {
  const [isCool, setIsCool] = useState(false);

  return (
    <section className="gap crony-about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="heading text-center" style={{ maxWidth: '850px', margin: '0 auto 42px auto' }}>
          <img 
            src="/assets/img/heading-img.png" 
            alt="Crony Energy Saving Excellence" 
            style={{ margin: '0 auto 14px auto', display: 'block' }} 
          />
          <span className="crony-clean-subtitle">
            About Crony Electronics
          </span>
          <h2 className="crony-clean-title">
            30+ Years of Energy Saving Excellence
          </h2>
        </div>

        <div className="row align-items-center">
          {/* Left Column: Authentic & Structured About Details */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="crony-about-left">
              <h3 className="crony-about-heading">
                Pioneering Industrial Thermal & Energy Management Since 1993
              </h3>

              <p className="crony-about-lead">
                For over three decades, <strong>Crony Electronics Pvt Ltd</strong> has engineered proven energy-saving and asset protection solutions. First introducing dedicated AC energy systems in 1994 and microprocessor digital controllers in 1997 with Eata Electronics, we help commercial facilities and industrial plants achieve verified reductions in electricity consumption.
              </p>

              {/* 3 Core Industrial Pillars */}
              <div className="crony-pillars-list">
                <div className="crony-pillar-item">
                  <div className="pillar-icon">
                    <i className="flaticon-battery"></i>
                  </div>
                  <div className="pillar-text">
                    <h4>Microprocessor AC Optimization</h4>
                    <p>Co-developed digital controllers regulating HVAC compressors to cut power draw by 15% to 30% with zero cooling loss.</p>
                  </div>
                </div>

                <div className="crony-pillar-item">
                  <div className="pillar-icon">
                    <i className="flaticon-water-energy"></i>
                  </div>
                  <div className="pillar-text">
                    <h4>Elastoclad Heat-Reflective Roof Barrier</h4>
                    <p>Blocks up to 85% of solar infrared rays, reducing building surface temperatures by 10°C–12°C and lowering HVAC load.</p>
                  </div>
                </div>

                <div className="crony-pillar-item">
                  <div className="pillar-icon">
                    <i className="flaticon-wind-energy"></i>
                  </div>
                  <div className="pillar-text">
                    <h4>20ms Solid-State Voltage Regulation (VRP)</h4>
                    <p>One of the world's fastest solid-state stabilizers (3 to 360 kVA), safeguarding sensitive automation, CNCs, and electronics.</p>
                  </div>
                </div>
              </div>

              {/* Trusted By Client Bar */}
              <div className="crony-trust-bar">
                <span className="trust-bar-label">Trusted Across India By:</span>
                <span className="trust-bar-clients">
                  <strong>ONGC</strong> • <strong>Indian Railways</strong> • <strong>L&T</strong> • <strong>Mahindra</strong> • <strong>Hindalco</strong> • <strong>Kirloskar</strong>
                </span>
              </div>

              {/* Director Endorsement Card */}
              <div className="crony-director-card">
                <img 
                  src="/assets/img/works/director_maulik_shah.jpg" 
                  alt={cronyData.company.director} 
                  className="crony-director-avatar"
                />
                <div className="crony-director-meta">
                  <h4>{cronyData.company.director}</h4>
                  <span>Managing Director, {cronyData.company.shortName}</span>
                  <img src="/assets/img/signature.png" alt="Signature" className="crony-signature-img" />
                </div>
                <a href="#services" className="crony-explore-btn">
                  Discover Solutions <i className="flaticon-right-up"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Big PNG Image Showcase with Simple Toggle */}
          <div className="col-lg-6 col-md-12">
            <div className="crony-thermal-showcase">
              
              {/* Creative Toggle Header with Curved Arrow Guide */}
              <div className="crony-toggle-header">
                <div className="toggle-hint-guide">
                  <span className="toggle-hint-text">Toggle to see our work difference</span>
                  <svg className="toggle-curved-arrow" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 3 C 28 2, 10 8, 8 20" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="3 3"/>
                    <polyline points="4,14 8,21 16,18" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Clean, Simple Tactile Toggle Switch (No outer pill container) */}
                <div className="crony-simple-toggle">
                  <span 
                    className={`crony-toggle-label ${!isCool ? 'is-active-heat' : ''}`}
                    onClick={() => setIsCool(false)}
                  >
                    Without Crony
                  </span>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={isCool}
                    className={`crony-switch-track ${isCool ? 'track-cool' : 'track-heat'}`}
                    onClick={() => setIsCool(!isCool)}
                    title="Click to toggle comparison"
                    aria-label="Toggle thermal difference"
                  >
                    <span className="crony-switch-thumb" />
                  </button>

                  <span 
                    className={`crony-toggle-label ${isCool ? 'is-active-cool' : ''}`}
                    onClick={() => setIsCool(true)}
                  >
                    With Crony
                  </span>
                </div>
              </div>

              {/* Big Clean PNG Image Display (No border, transparent background, smooth crossfade) */}
              <div 
                className="crony-big-image-stage"
                onClick={() => setIsCool(!isCool)}
                title="Click image to switch view"
              >
                <img 
                  src="/hightemp.png" 
                  alt="High temperature solar heat strain without Crony" 
                  className={`crony-stage-png img-layer-heat ${!isCool ? 'is-active' : 'is-inactive'}`}
                />
                <img 
                  src="/lowtemp.png" 
                  alt="Low temperature cool comfort with Crony" 
                  className={`crony-stage-png img-layer-cool ${isCool ? 'is-active' : 'is-inactive'}`}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
