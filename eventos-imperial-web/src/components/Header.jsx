import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
      <div
        className={`w-full max-w-6xl rounded-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border ${
          scrolled
            ? 'backdrop-blur-xl bg-white/70 border-white/60 shadow-[0_12px_32px_-10px_rgba(104,90,124,0.12)] py-3 px-6'
            : 'backdrop-blur-xl bg-white/60 border-white/50 shadow-[0_8px_24px_-10px_rgba(104,90,124,0.06)] py-4 px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-[#685A7C] flex items-center justify-center text-white shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
              <span className="font-serif text-lg font-light tracking-wider">I</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl tracking-tight font-medium text-[#2B2338] leading-none">
                Imperial
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#7A7085] mt-1 font-medium">
                Recepciones & Eventos
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#experiencias"
              className="text-sm font-medium text-[#2B2338]/80 hover:text-[#685A7C] transition-colors duration-300"
            >
              Experiencias
            </a>
            <a
              href="#paquetes"
              className="text-sm font-medium text-[#2B2338]/80 hover:text-[#685A7C] transition-colors duration-300"
            >
              Paquetes de Gala
            </a>
            <a
              href="#espacios"
              className="text-sm font-medium text-[#2B2338]/80 hover:text-[#685A7C] transition-colors duration-300"
            >
              Nuestros Salones
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-[#2B2338]/80 hover:text-[#685A7C] transition-colors duration-300"
            >
              Contacto
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-6">
            {/* SaaS Bridge: Discreet Client / Staff Portal Link */}
            <a
              href="http://localhost:5173/portal/eventos-imperial/login"
              className="text-xs font-medium tracking-wide text-[#7A7085] hover:text-[#2B2338] transition-colors duration-300 flex items-center gap-1.5 py-1 px-2.5 rounded-full hover:bg-black/[0.03]"
              title="Acceso al portal privado para clientes y equipo de coordinación"
            >
              <span>Portal de Clientes / Staff</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            {/* Primary Action Button */}
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-2xl bg-[#685A7C] hover:bg-[#554866] text-white text-xs font-medium tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_10px_20px_-8px_rgba(104,90,124,0.35)] hover:shadow-[0_14px_28px_-10px_rgba(104,90,124,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Cotizar Fecha
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-2xl text-[#2B2338] hover:bg-black/5 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-3 border-t border-[#D3CDD9]/40 flex flex-col gap-3">
            <a
              href="#experiencias"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#2B2338] py-1.5 px-2 hover:bg-black/[0.02] rounded-xl"
            >
              Experiencias
            </a>
            <a
              href="#paquetes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#2B2338] py-1.5 px-2 hover:bg-black/[0.02] rounded-xl"
            >
              Paquetes de Gala
            </a>
            <a
              href="#espacios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#2B2338] py-1.5 px-2 hover:bg-black/[0.02] rounded-xl"
            >
              Nuestros Salones
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#2B2338] py-1.5 px-2 hover:bg-black/[0.02] rounded-xl"
            >
              Contacto
            </a>

            <div className="pt-2 border-t border-[#D3CDD9]/40 flex flex-col gap-3">
              <a
                href="http://localhost:5173/portal/eventos-imperial/login"
                className="text-xs font-medium text-[#7A7085] hover:text-[#2B2338] py-1 px-2 flex items-center justify-between"
              >
                <span>Portal de Clientes / Staff</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#paquetes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 rounded-2xl bg-[#685A7C] text-white text-xs uppercase tracking-wider font-medium shadow-sm"
              >
                Cotizar Fecha
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

