import React, { useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function Footer({ onOpenQuote }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer style={{ backgroundImage: 'url(/assets/img/footer-line.png)' }} id="contact">
      <div className="container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-6">
              <div className="logo">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '18px' }}>
                  <div className="footer-logo-card">
                    <img src="/cronylogo.png" alt="Crony Electronics" className="footer-logo-img" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 800, margin: 0, letterSpacing: '0.5px' }}>CRONY ELECTRONICS</h4>
                    <span style={{ color: '#FFC80B', fontSize: '11px', fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase' }}>Private Limited • Est. 1993</span>
                  </div>
                </div>
                <p>
                  Specializing in energy-saving products and industrial engineering solutions for over 30 years. Serving India's premier public and private sector enterprises with benchmark reliability, energy optimization, and turnkey engineering.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="subscribe">
                <h3>Industrial Updates & Audits</h3>
                <p>Stay informed with our latest energy-saving breakthroughs, case studies, and engineering innovations.</p>
                {subscribed ? (
                  <div style={{ background: '#009a4e', color: '#fff', padding: '12px 20px', borderRadius: '4px', fontWeight: 600 }}>
                    ✓ Thank you for subscribing! We will keep you updated.
                  </div>
                ) : (
                  <form role="form" className="get-subscribee" onSubmit={handleSubscribe}>
                    <input 
                      type="email" 
                      name="Email_Address" 
                      placeholder="Enter corporate email here" 
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn bk">Subscribe</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main Widgets */}
        <div className="row">
          {/* Contact Details Widget */}
          <div className="col-lg-4 col-md-6">
            <div className="widget-title">
              <h3>Contact Details</h3>
              <div className="boder"></div>
              
              <div className="get-in-touch">
                <div>
                  <i>
                    <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M15.31 0H7.65726C6.30674 0.00153143 5.21234 1.09593 5.211 2.44646V20.5537C5.21234 21.9042 6.30674 22.9986 7.65726 22.9999H15.31C16.6605 22.9986 17.7549 21.9042 17.7565 20.5537V2.44646C17.7549 1.09593 16.6605 0.00153143 15.31 0ZM11.4837 20.9092C10.9062 20.9092 10.4381 20.4411 10.4381 19.8636C10.4381 19.2862 10.9062 18.8182 11.4837 18.8182C12.0611 18.8182 12.5291 19.2862 12.5291 19.8636C12.5291 20.4411 12.0611 20.9092 11.4837 20.9092ZM13.0519 3.13636H9.91554C9.62687 3.13636 9.39275 2.90225 9.39275 2.61357C9.39275 2.3249 9.62687 2.09097 9.91554 2.09097H13.0519C13.3406 2.09097 13.5745 2.3249 13.5745 2.61357C13.5745 2.90225 13.3406 3.13636 13.0519 3.13636Z" fill="black"/>
                      </g>
                    </svg>
                  </i>
                </div>
                <div>
                  <span>Contact Phone:</span> 
                  <h6><a href={`tel:${cronyData.company.phone}`}>{cronyData.company.phone}</a></h6>
                </div>
              </div>

              <div className="get-in-touch">
                <div>
                  <i>
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M1.49888 15.54C1.09073 15.54 0.759857 15.8709 0.759857 16.2791C0.759857 16.6872 1.09073 17.0181 1.49888 17.0181H4.45496C4.8631 17.0181 5.19398 16.6872 5.19398 16.2791C5.19398 15.8709 4.8631 15.54 4.45496 15.54H1.49888Z" fill="black"/>
                        <path d="M1.49888 18.4961C1.09073 18.4961 0.759857 18.827 0.759857 19.2351C0.759857 19.6433 1.09073 19.9741 1.49888 19.9741H7.41104C7.81919 19.9741 8.15006 19.6433 8.15006 19.2351C8.15006 18.827 7.81919 18.4961 7.41104 18.4961H1.49888Z" fill="black"/>
                        <path d="M3.57686 5.5292L3.4696 5.44045C3.77349 5.02219 4.09688 4.71454 4.51514 4.41066C5.81023 3.46973 7.65765 3.46973 11.3525 3.46973H13.3232C17.018 3.46973 18.8655 3.46973 20.1605 4.41066C20.5788 4.71454 20.8767 4.98848 21.1806 5.40674L21.0568 5.52982L18.7827 7.80394C17.1256 9.46098 15.9343 10.65 14.9068 11.4341C13.8963 12.205 13.1316 12.5142 12.3377 12.5142C11.5438 12.5142 10.7791 12.205 9.76863 11.4341C8.74109 10.65 7.54977 9.46098 5.89273 7.80394L3.97792 5.88913L3.57686 5.5292Z" fill="black"/>
                        <path d="M2.48424 12.3383C2.48424 9.737 2.48424 8.05142 2.81258 6.82958L2.961 6.96279L4.88757 8.88935C6.49594 10.4977 7.7564 11.7582 8.87207 12.6094C10.014 13.4807 11.0908 13.9926 12.3377 13.9926C13.5846 13.9926 14.6614 13.4807 15.8034 12.6094C16.919 11.7582 18.1795 10.4977 19.7879 8.88937L21.8598 6.81738C22.1914 8.04019 22.1914 9.72833 22.1914 12.3383C22.1914 16.0331 22.1914 17.8805 21.2505 19.1756C20.9466 19.5939 20.5788 19.9617 20.1605 20.2656C18.8655 21.2065 17.018 21.2065 13.3232 21.2065H11.3525C9.94503 21.2065 8.80564 21.2065 7.86274 21.1545C8.73343 20.9503 9.38176 20.1687 9.38176 19.2358C9.38176 18.1474 8.49944 17.2651 7.41104 17.2651H6.16204C6.32971 16.9752 6.42568 16.6387 6.42568 16.2797C6.42568 15.1913 5.54336 14.309 4.45496 14.309H2.49134C2.48424 13.7167 2.48424 13.063 2.48424 12.3383Z" fill="black"/>
                      </g>
                    </svg>
                  </i>
                </div>
                <div>
                  <span>Email Address:</span> 
                  <h6><a href={`mailto:${cronyData.company.email}`}>{cronyData.company.email}</a></h6>
                </div>
              </div>

              <div className="get-in-touch">
                <div>
                  <i>
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M12.3379 7.11523C10.6713 7.11523 9.31538 8.47115 9.31538 10.1377C9.31538 11.8043 10.6713 13.1602 12.3379 13.1602C14.0045 13.1602 15.3604 11.8043 15.3604 10.1377C15.3604 8.47115 14.0045 7.11523 12.3379 7.11523Z" fill="black"/>
                        <path d="M19.4104 3.44324C17.5213 1.55407 15.0095 0.513672 12.3379 0.513672C9.66623 0.513672 7.15444 1.55407 5.26532 3.44324C3.37611 5.33245 2.33571 7.8442 2.33571 10.5158C2.33571 15.9205 7.44603 20.4158 10.1915 22.8309C10.573 23.1665 10.9024 23.4563 11.1648 23.7014C11.4937 24.0087 11.9157 24.1623 12.3378 24.1623C12.7599 24.1623 13.182 24.0087 13.5108 23.7015C13.7733 23.4563 14.1028 23.1665 14.4842 22.8309C17.2297 20.4159 22.34 15.9205 22.34 10.5159C22.34 7.8442 21.2996 5.33245 19.4104 3.44324ZM12.3379 14.5457C9.90739 14.5457 7.93009 12.5684 7.93009 10.1379C7.93009 7.70739 9.90739 5.73009 12.3379 5.73009C14.7684 5.73009 16.7457 7.70739 16.7457 10.1379C16.7457 12.5684 14.7683 14.5457 12.3379 14.5457Z" fill="black"/>
                      </g>
                    </svg>
                  </i>
                </div>
                <div>
                  <span className="pt-2 pb-0">{cronyData.company.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Products Widget */}
          <div className="col-lg-4 col-md-6">
            <div className="widget-title">
              <h3>Core Solutions</h3>
              <div className="boder"></div>
              <ul>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">Microprocessor AC Energy Saver</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">Wireless AC Motion Sensor</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">Solid State VRP (20ms)</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">Elastoclad HR Roof Coating</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">IR Blocking Facade Glass Coating</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">Removable Thermal Sleeves</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">Brilantor Natural Daylight System</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">nora® Industrial Rubber Floorings</a></li>
                <li><i className="fa-solid fa-caret-right"></i><a href="#services">64+ Industrial Robotics Range</a></li>
              </ul>
            </div>
          </div>

          {/* Marquee Clients & Certifications */}
          <div className="col-lg-4 col-md-6">
            <div className="widget-title mb-0">
              <h3>Client Portfolio</h3>
              <div className="boder"></div>
              <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '15px' }}>
                Proudly empowering India's largest infrastructure & manufacturing enterprises:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cronyData.clients.map((c, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      background: 'rgba(255,255,255,0.08)', 
                      color: '#fff', 
                      padding: '5px 12px', 
                      borderRadius: '4px', 
                      fontSize: '13px',
                      fontWeight: 500
                    }}
                  >
                    {c.name}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: '25px' }}>
                <button 
                  type="button" 
                  onClick={onOpenQuote}
                  className="btn" 
                  style={{ background: '#009a4e', color: '#fff', width: '100%', textAlign: 'center', border: 'none' }}
                >
                  Schedule Facility Energy Audit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <h6>
              <b>&copy; {new Date().getFullYear()} {cronyData.company.name}</b>. All Rights Reserved.
            </h6>
            <ul>
              <li><a href="#about">About Company</a></li>
              <li><a href="#services">Products & Solutions</a></li>
              <li><a href="#clients">Enterprise Clients</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <img src="/assets/img/footer-icon.png" alt="Footer Icon" className="footer-icon" />
    </footer>
  );
}
