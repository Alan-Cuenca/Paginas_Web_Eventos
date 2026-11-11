import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PaquetesBento from './components/PaquetesBento';
import EspaciosGallery from './components/EspaciosGallery';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ConciergeFloating from './components/ConciergeFloating';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F2F7] text-[#2B2338] selection:bg-[#685A7C]/20 selection:text-[#2B2338] font-sans antialiased overflow-x-hidden">
      {/* 1. Liquid Glass Floating Header */}
      <Header />

      {/* 2. Main Landmark Section */}
      <main>
        {/* Immersive Luxury Hero Section */}
        <Hero />

        {/* Bento Box Asymmetrical Showcase of Packages */}
        <section id="experiencias">
          <PaquetesBento />
        </section>

        {/* Luxury Spaces Architecture & Details */}
        <EspaciosGallery />

        {/* Client Testimonials & Social Proof */}
        <Testimonios />

        {/* Consultation & Private Booking Request */}
        <Contacto />
      </main>

      {/* 3. Ultra-minimalist Footer with SaaS Bridge */}
      <Footer />

      {/* 4. Floating Liquid Glass Concierge Pill */}
      <ConciergeFloating />
    </div>
  );
}

export default App;
