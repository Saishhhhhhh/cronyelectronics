import React, { useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function QuoteModal({ isOpen, onClose, preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    solution: preselectedProduct ? preselectedProduct.title : cronyData.products[0].title,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '12px',
          maxWidth: '550px',
          width: '100%',
          padding: '35px',
          position: 'relative',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f1f1',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '16px',
            color: '#333'
          }}
        >
          ✕
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span style={{ color: '#009a4e', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Crony Electronics Pvt Ltd
          </span>
          <h3 style={{ fontSize: '24px', fontWeight: 800, marginTop: '5px', color: '#111' }}>
            Request an Engineering Proposal
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '6px' }}>
            Tell us about your facility requirements and get customized technical specifications & ROI calculations.
          </p>
        </div>

        {submitted ? (
          <div style={{ background: '#e8f5e9', border: '1px solid #c8e6c9', padding: '25px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', color: '#009a4e', marginBottom: '10px' }}>✓</div>
            <h4 style={{ color: '#1b5e20', margin: 0 }}>Proposal Request Submitted!</h4>
            <p style={{ color: '#2e7d32', fontSize: '14px', marginTop: '8px' }}>
              Thank you for reaching out to Crony Electronics. Our technical engineering division will review your inquiry and contact you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>
                  Enterprise / Organization *
                </label>
                <input
                  type="text"
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. L&T / ONGC / M&M"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98..."
                />
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>
                Official Email Address *
              </label>
              <input
                type="email"
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@company.com"
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>
                Solution / Product of Interest *
              </label>
              <select
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }}
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
              >
                {cronyData.products.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#333', marginBottom: '5px' }}>
                Project Specifications / Inquiries
              </label>
              <textarea
                rows="3"
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px' }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention facility area, voltage requirements, number of AC units, or application..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                width: '100%',
                background: '#009a4e',
                color: '#fff',
                padding: '14px',
                fontSize: '16px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                borderRadius: '6px'
              }}
            >
              Submit Technical Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
