import React, { useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function ConsultationBanner() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="need-expert" style={{ backgroundImage: 'url(/assets/img/need-expert.jpg)' }}>
      <div>
        <h4>Need Expert Energy Advice? Get Free Consultation</h4>
        <div className="phone-number">
          <i className="flaticon-iphone"></i>
          <div>
            <span>Direct Inquiry Hotline</span>
            <a href={`tel:${cronyData.company.phone}`}>{cronyData.company.phone}</a>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div style={{ color: '#fff', background: '#005296', border: '1px solid #e87713', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h5 style={{ color: '#fff', margin: 0 }}>✓ Request Received!</h5>
            <p style={{ color: '#e0e7ff', fontSize: '14px', margin: '6px 0 0 0' }}>Our technical engineering team will reach out to you shortly.</p>
          </div>
        ) : (
          <>
            <div className="inputbox">
              <input 
                type="email" 
                name="email" 
                placeholder="Corporate Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="textareabox">
              <textarea 
                placeholder="Tell us about your facility or energy requirement (HVAC, VRP, Coatings, Flooring...)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn bk">Submit Inquiry</button>
          </>
        )}
      </form>
    </div>
  );
}
