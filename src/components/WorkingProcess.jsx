import React, { useState } from 'react';
import ConsultationBanner from './ConsultationBanner';

const processes = [
  {
    step: 1,
    title: "Facility Energy Audit",
    desc: "Our engineering experts conduct comprehensive on-site inspections, thermographic imaging, and power quality assessments to isolate thermal leaks and energy wastage points.",
    points: [
      "Infrared thermography surveys for roofs & glass",
      "HVAC and lighting power consumption analytics",
      "Harmonic and voltage fluctuation diagnostics",
    ],
    image: "/assets/img/works/process_audit.jpg",
  },
  {
    step: 2,
    title: "Custom Engineering",
    desc: "We engineer customized solutions tailored to your operational specifications — from bespoke thermal sleeves to solid-state VRP sizing and ESD flooring layouts.",
    points: [
      "Guaranteed energy savings & ROI calculations",
      "Custom fabrication for valves, flanges, and facades",
      "Zero disruption planning for continuous factory operations",
    ],
    image: "/assets/img/works/process_custom_design.jpg",
  },
  {
    step: 3,
    title: "Turnkey Installation",
    desc: "Certified implementation teams ensure rapid, professional deployment followed by rigorous pre- and post-installation monitoring to validate your energy savings.",
    points: [
      "Turnkey installation by trained specialists",
      "Documented temperature and power reduction reports",
      "Long-term warranty and ongoing technical support",
    ],
    image: "/assets/img/works/process_installation.jpg",
  },
];

export default function WorkingProcess() {
  const [activeTab, setActiveTab] = useState(1);
  const current = processes.find(p => p.step === activeTab) || processes[0];

  return (
    <section className="gap sustainable-section" id="process">
      <div className="container">
        {/* Top Consultation Form */}
        <ConsultationBanner />

        {/* Section Heading */}
        <div className="heading">
          <span>Sustainable Working Process</span>
          <h2>Our Proven Implementation Framework</h2>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="process-tabs-wrapper" id="v-pills-tab" role="tablist">
          <button 
            className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
            type="button" 
            onClick={() => setActiveTab(1)}
          >
            <span>1</span>Facility Audit
          </button>
          <button 
            className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
            type="button" 
            onClick={() => setActiveTab(2)}
          >
            <span>2</span>Custom Design
          </button>
          <button 
            className={`nav-link mb-0 ${activeTab === 3 ? 'active' : ''}`}
            type="button" 
            onClick={() => setActiveTab(3)}
          >
            <span>3</span>Turnkey Install
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane fade show active">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="tab-img">
                  <img 
                    src={current.image} 
                    alt={current.title} 
                    style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
                  <img src="/assets/img/bolt-img.png" alt="img" className="bolt-img" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="research-analysis">
                  <h3>{current.title}</h3>
                  <p>{current.desc}</p>
                  <ul className="list-style">
                    {current.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <span>.{current.step}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
