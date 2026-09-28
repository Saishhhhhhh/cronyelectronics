import React, { useEffect, useState } from 'react';

export default function SearchPopup({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('search-active');
    } else {
      document.body.classList.remove('search-active');
    }
    return () => {
      document.body.classList.remove('search-active');
    };
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    // Scroll to services
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div className="search-popup" style={{ display: isOpen ? 'block' : 'none' }}>
      <button type="button" className="close-search" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <form onSubmit={handleSearch}>
        <p>Search Crony Electronics Products & Solutions</p>
        <div className="form-group">
          <input
            type="search"
            name="search-field"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search e.g. VRP, AC Saver, Elastoclad, nora flooring, robotics..."
            required
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
