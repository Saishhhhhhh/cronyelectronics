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
                    <i className="flaticon-iphone"></i>
                    <span>Call:</span>
                    <a href={`tel:${cronyData.company.phone}`}>{cronyData.company.phone}</a>
                  </div>
                  <div className="phone d-flex align-items-center">
                    <i>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833313 12.7083C0.488135 12.7083 0.208313 12.9882 0.208313 13.3333C0.208313 13.6785 0.488135 13.9583 0.833313 13.9583H3.33331C3.67849 13.9583 3.95831 13.6785 3.95831 13.3333C3.95831 12.9882 3.67849 12.7083 3.33331 12.7083H0.833313Z" fill="black"/>
                        <path d="M0.833313 15.2083C0.488135 15.2083 0.208313 15.4882 0.208313 15.8333C0.208313 16.1785 0.488135 16.4583 0.833313 16.4583H5.83331C6.17849 16.4583 6.45831 16.1785 6.45831 15.8333C6.45831 15.4882 6.17849 15.2083 5.83331 15.2083H0.833313Z" fill="black"/>
                        <path d="M2.59071 4.24172L2.5 4.16667C2.757 3.81294 3.0305 3.55276 3.38422 3.29576C4.4795 2.5 6.04189 2.5 9.16667 2.5H10.8333C13.9581 2.5 15.5205 2.5 16.6157 3.29576C16.9695 3.55276 17.2214 3.78443 17.4784 4.13816L17.3737 4.24225L15.4505 6.16551C14.0491 7.56689 13.0416 8.5725 12.1726 9.23558C11.318 9.88758 10.6712 10.1491 9.99992 10.1491C9.3285 10.1491 8.68175 9.88758 7.82717 9.23558C6.95817 8.5725 5.95066 7.56689 4.54927 6.16551L2.92989 4.54612L2.59071 4.24172Z" fill="black"/>
                        <path d="M1.66663 9.99999C1.66663 7.80006 1.66663 6.37454 1.94431 5.34122L2.06983 5.45388L3.69916 7.08319C5.05938 8.44341 6.12537 9.50941 7.06891 10.2293C8.03468 10.9662 8.94529 11.3991 9.99988 11.3991C11.0544 11.3991 11.965 10.9662 12.9308 10.2293C13.8743 9.50941 14.9403 8.44341 16.3005 7.08321L18.0528 5.3309C18.3333 6.36504 18.3333 7.79274 18.3333 9.99999C18.3333 13.1247 18.3333 14.6872 17.5375 15.7824C17.2805 16.1362 16.9695 16.4472 16.6157 16.7042C15.5205 17.5 13.958 17.5 10.8333 17.5H9.16663C7.97633 17.5 7.01273 17.5 6.2153 17.456C6.95166 17.2833 7.49996 16.6223 7.49996 15.8333C7.49996 14.9128 6.75377 14.1667 5.83329 14.1667H4.77699C4.9188 13.9215 4.99996 13.6369 4.99996 13.3333C4.99996 12.4128 4.25377 11.6667 3.33329 11.6667H1.67263C1.66663 11.1657 1.66663 10.6129 1.66663 9.99999Z" fill="black"/>
                      </svg>
                    </i>
                    <span>Email: </span>
                    <a className="me-3" href={`mailto:${cronyData.company.email}`}>{cronyData.company.email}</a>
                  </div>
                </div>
              </div>
              <div className="social-media-text">
                <a href="#about"><i className="fa-solid fa-award"></i> Est. 1993</a>
                <a href="#services"><i className="fa-solid fa-bolt"></i> 30+ Yrs Exp</a>
                <a href="#clients"><i className="fa-solid fa-building"></i> 500+ Clients</a>
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
                  href="javascript:void(0)" 
                  id="desktop-menu" 
                  className={`menu-start ${isDesktopMenuOpen ? 'open' : ''}`}
                  onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                >
                  <svg id="ham-menue" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"></path>
                    <path className="line line2" d="M 20,50 H 80"></path>
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"></path>
                  </svg>
                </a>

                <div className="header-search-button search-box-outer" onClick={onOpenSearch}>
                  <a href="javascript:void(0)" className="search-btn">
                    <i className="flaticon-magnifying-glass"></i>
                  </a>
                </div>
                
                <button type="button" className="btn" onClick={onOpenQuote}>
                  Request a Quote
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
              <a href="javascript:void(0)" onClick={() => toggleMobileSubmenu('products')}>
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
          <a href="javascript:void(0)" id="res-cross" onClick={() => setIsMobileNavOpen(false)}></a>
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
