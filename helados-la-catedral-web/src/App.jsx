import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HistoriaBento from './components/HistoriaBento';
import SaboresGrid from './components/SaboresGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1F2937] selection:bg-[#E32074]/15 selection:text-[#E32074] flex flex-col font-sans">
      {/* 1. Liquid Glass Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with /Fondo.jpg and H1 */}
        <Hero />

        {/* 3. Apple Bento Grid with /Catedral.jpg & Don Segundo Oña "El Marinero" */}
        <HistoriaBento />

        {/* 4. Sabores Visual Grid with 7 flavors and category tags */}
        <SaboresGrid />
      </main>

      {/* 5. Minimalist Footer with discreet SaaS link */}
      <Footer />
    </div>
  );
}
