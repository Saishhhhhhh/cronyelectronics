import React, { useState } from 'react';
import { cronyData } from '../data/cronyData';

export default function Header({ onOpenSearch, onOpenQuote }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const toggleMobileSubmenu = (menuKey) => {
    setMobileSubmenu(mobileSubmenu === menuKey ? null : menuKey);
  };

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-slid">
              <div>
                <div className="phone-data">
                  <div className="phone">
                    <i className="fa-solid fa-phone"></i>
                    <span>Call:</span>
                    <a href={`tel:${cronyData.company.phone}`}>{cronyData.company.phone}</a>
                  </div>
                  <div className="phone d-flex align-items-center">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email:</span>
                    <a className="me-3" href={`mailto:${cronyData.company.email}`}>{cronyData.company.email}</a>
                  </div>
                </div>
              </div>
              <div className="social-media-text">
                <a href="#about"><i className="fa-solid fa-certificate"></i> Est. 1993</a>
                <a href="#services"><i className="fa-solid fa-bolt"></i> 30+ Yrs Exp</a>
                <a href="#clients"><i className="fa-solid fa-building-shield"></i> 500+ Clients</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="container">
            <div className="bottom-bar-text">
              <a href="#" className="crony-brand-header">
                <img src="/cronylogo.png" alt="Crony Electronics" className="crony-brand-img" />
              </a>

              {/* Navigation Menu */}
              <nav className="navbar">
                <ul className="navbar-links">
                  <li className="navbar-dropdown">
                    <a href="#">Home</a>
                  </li>
                  <li className="navbar-dropdown">
                    <a href="#about">About</a>
                  </li>
                  <li className="navbar-dropdown menu-item-children">
                    <a href="#services">Services</a>
                    <ul className="sub-menu">
                      <li><a href="#services">AC Energy Savers</a></li>
                      <li><a href="#services">Wireless AC Motion Sensor</a></li>
                      <li><a href="#services">Solid State VRP (20ms)</a></li>
                      <li><a href="#services">Elastoclad HR Roof Coating</a></li>
                      <li><a href="#services">IR Blocking Facade Coating</a></li>
                      <li><a href="#services">Thermal Insulation Sleeves</a></li>
                      <li><a href="#services">Brilantor Natural Daylight</a></li>
                      <li><a href="#services">nora® Rubber Floorings</a></li>
                      <li><a href="#services">Industrial Robotics</a></li>
                    </ul>
                  </li>
                  <li className="navbar-dropdown">
                    <a href="#process">Process</a>
                  </li>
                  <li className="navbar-dropdown">
                    <a href="#clients">Clients</a>
                  </li>
                  <li className="navbar-dropdown">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>

              {/* Menu End Controls */}
              <div className="menu-end">
                <div className="bar-menu" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                  <i className="fa-solid fa-bars"></i>
                </div>

                <a 
                  href="#menu" 
                  id="desktop-menu" 
                  className={`menu-start ${isDesktopMenuOpen ? 'open' : ''}`}
                  onClick={(e) => { e.preventDefault(); setIsDesktopMenuOpen(!isDesktopMenuOpen); }}
                >
                  <svg id="ham-menue" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
                    <path className="line line2" d="M 20,50 H 80"></path>
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
                  </svg>
                </a>

                <div className="header-search-button search-box-outer" onClick={onOpenSearch}>
                  <a href="#search" className="search-btn" onClick={(e) => e.preventDefault()}>
                    <i className="flaticon-magnifying-glass"></i>
                  </a>
                </div>
                
                <button type="button" className="crony-header-quote-btn" onClick={onOpenQuote}>
                  <span>Request a Quote</span>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          className={`mobile-nav hmburger-menu ${isMobileNavOpen ? 'open' : ''}`} 
          id="mobile-nav" 
          style={{ display: isMobileNavOpen ? 'block' : 'none' }}
        >
          <div className="res-log">
            <a href="#" className="crony-brand-header">
              <img src="/cronylogo.png" alt="Crony Electronics" className="crony-brand-img crony-mobile-logo" />
            </a>
          </div>
          <ul>
            <li>
              <a href="#" onClick={() => setIsMobileNavOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsMobileNavOpen(false)}>About</a>
            </li>
            <li className={`menu-item-has-children ${mobileSubmenu === 'products' ? 'active' : ''}`}>
              <a href="#services-dropdown" onClick={(e) => { e.preventDefault(); toggleMobileSubmenu('products'); }}>
                Services
              </a>
              <ul className="sub-menu" style={{ display: mobileSubmenu === 'products' ? 'block' : 'none' }}>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>AC Energy Savers</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>Wireless AC Motion Sensor</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>Solid State VRP (20ms)</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>Elastoclad HR Roof Coating</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>IR Blocking Facade Coating</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>Thermal Insulation Sleeves</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>Brilantor Natural Daylight</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>nora® Rubber Floorings</a></li>
                <li><a href="#services" onClick={() => setIsMobileNavOpen(false)}>Industrial Robotics</a></li>
              </ul>
            </li>
            <li>
              <a href="#process" onClick={() => setIsMobileNavOpen(false)}>Process</a>
            </li>
            <li>
              <a href="#clients" onClick={() => setIsMobileNavOpen(false)}>Clients</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMobileNavOpen(false)}>Contact</a>
            </li>
          </ul>
          <a href="#close" id="res-cross" onClick={(e) => { e.preventDefault(); setIsMobileNavOpen(false); }}></a>
        </div>

        {/* Desktop Sidebar Drawer */}
        <div className={`mobile-nav desktop-menu ${isDesktopMenuOpen ? 'open' : ''}`}>
          <h2>{cronyData.company.name}</h2>
          <p className="des">{cronyData.company.tagline}</p>
          <figure>
            <img src="/assets/img/sustainable.png" alt="Crony Electronics" />
          </figure>
          <h3>Get in Touch</h3>
          <p className="num">
            <a href={`tel:${cronyData.company.phone}`}>{cronyData.company.phone}</a>
          </p>
          <p className="adrs">{cronyData.company.address}</p>
          <div className="social-medias">
            <a href={`mailto:${cronyData.company.email}`}>Email Us</a>
            <a href="#services" onClick={() => setIsDesktopMenuOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setIsDesktopMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </header>
    </>
  );
}
