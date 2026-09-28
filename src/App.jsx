import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import WorkingProcess from './components/WorkingProcess';
import ProjectsSlider from './components/ProjectsSlider';
import Testimonials from './components/Testimonials';
import NewsSection from './components/NewsSection';
import ClientsSlider from './components/ClientsSlider';
import Footer from './components/Footer';
import SearchPopup from './components/SearchPopup';
import ScrollToTop from './components/ScrollToTop';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenQuoteWithProduct = (product) => {
    setSelectedProduct(product);
    setIsQuoteOpen(true);
  };

  return (
    <div className="crony-app">
      {/* Header & Navigation */}
      <Header 
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuote={() => {
          setSelectedProduct(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Hero Slider (Home 1) */}
      <HeroSlider 
        onOpenQuote={() => {
          setSelectedProduct(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* 30+ Years Experience & Company Overview */}
      <ExperienceSection />

      {/* Landmark Products & Engineering Solutions */}
      <ServicesSection onSelectProduct={handleOpenQuoteWithProduct} />

      {/* Working Process & Expert Advice Banner */}
      <WorkingProcess />

      {/* Prestigious Enterprise Clients & Fun Facts */}
      <ProjectsSlider />

      {/* Customer Reviews & Testimonials */}
      <Testimonials />

      {/* News & Technical Articles */}
      <NewsSection />

      {/* Client Logos Slider */}
      <ClientsSlider />

      {/* Footer */}
      <Footer 
        onOpenQuote={() => {
          setSelectedProduct(null);
          setIsQuoteOpen(true);
        }}
      />

      {/* Global Interactive Modals */}
      <SearchPopup 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        preselectedProduct={selectedProduct}
      />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
