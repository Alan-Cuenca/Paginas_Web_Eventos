import React, { useState } from 'react';
import { Menu, X, MapPin, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand identity with official logo image */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo_Helados_Catedral.jpg" 
            alt="Helados La Catedral" 
            className="h-12 rounded-xl object-contain shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" 
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-serif font-semibold text-lg tracking-tight text-[#1F2937] group-hover:text-[#662D8F] transition-colors duration-300">
              Helados La Catedral
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
              Ambato • Tradición desde 1988
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a
            href="#historia"
            className="hover:text-gray-900 transition-colors duration-200"
          >
            Nuestra Historia
          </a>
          <a
            href="#marinero"
            className="hover:text-[#662D8F] transition-colors duration-200"
          >
            "El Marinero"
          </a>
          <a
            href="#sabores"
            className="hover:text-gray-900 transition-colors duration-200"
          >
            Nuestros Sabores
          </a>
          <a
            href="#ubicacion"
            className="hover:text-gray-900 transition-colors duration-200 flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-[#E32074]" />
            Ubicación
          </a>
        </nav>

        {/* Action Area: Location Badge + SaaS Portal Link */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100/80 border border-stone-200/60 text-xs text-gray-600">
            <span className="w-2 h-2 rounded-full bg-[#E32074]" />
            <span>Bolívar y Juan Montalvo</span>
          </div>

          <a
            href="http://localhost:5173/portal/helados-la-catedral/login"
            className="text-xs font-medium tracking-wide text-gray-500 hover:text-[#662D8F] transition-colors duration-200 flex items-center gap-1.5 py-1.5 px-3 rounded-full hover:bg-stone-100/80"
            title="Portal Institucional de Empleados"
          >
            <span>Portal de Empleados</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-2xl px-6 py-6 space-y-4 text-sm font-medium animate-fadeIn">
          <a
            href="#historia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-gray-900 py-1"
          >
            Nuestra Historia
          </a>
          <a
            href="#marinero"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#662D8F] font-semibold py-1"
          >
            "El Marinero" (Fundador)
          </a>
          <a
            href="#sabores"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-gray-900 py-1"
          >
            Nuestros Sabores
          </a>
          <a
            href="#ubicacion"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#E32074] font-medium py-1 flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5" />
            Bolívar y Montalvo, Ambato
          </a>

          <div className="pt-2 border-t border-gray-200/50">
            <a
              href="http://localhost:5173/portal/helados-la-catedral/login"
              className="text-xs font-medium text-gray-500 hover:text-[#662D8F] py-1.5 flex items-center justify-between"
            >
              <span>Portal de Empleados</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
