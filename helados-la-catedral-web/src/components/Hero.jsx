import React from 'react';
import { Sparkles, MapPin, Award, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      
      {/* Background using /Fondo.jpg with Editorial Anthropic Clean Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/Fondo.jpg"
          alt="Helados La Catedral en las calles de Ambato"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.88] contrast-[1.05]"
        />
        {/* Soft Anthropic Clean atmospheric gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/94 via-[#FAFAFA]/80 to-[#FAFAFA]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Heritage Pill Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] text-xs text-gray-700 mb-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E32074] animate-pulse" />
          <span className="font-semibold text-[#662D8F] tracking-wide uppercase text-[11px]">
            Más de 35 Años de Tradición
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-600 font-medium">Ambato, Ecuador</span>
        </div>

        {/* H1 Title matching exact prompt */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-[#1F2937] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-8">
          El sabor que forma parte de la{' '}
          <span className="italic font-normal text-[#662D8F] relative inline-block">
            historia
            <svg 
              className="absolute -bottom-2 left-0 w-full h-2.5 text-[#F58220]/70" 
              viewBox="0 0 100 12" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </span>{' '}
          de Ambato.
        </h1>

        {/* Subtitle with deep commercial and historical context */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-600 font-light leading-relaxed mb-12">
          Desde la emblemática esquina de <strong className="font-medium text-gray-900">Simón Bolívar y Juan Montalvo</strong>. La herencia viva de Don Segundo Oña, <span className="text-[#662D8F] font-semibold">"El Marinero"</span>, elaborando helados artesanales que han acompañado a generaciones de familias ambateñas.
        </p>

        {/* Action Buttons using Logo Magenta (#E32074) for Primary Action */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#sabores"
            className="px-8 py-3.5 rounded-full bg-[#E32074] hover:bg-[#c91864] text-white text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_20px_40px_-15px_rgba(227,32,116,0.35)] hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Descubrir Sabores
          </a>
          <a
            href="#historia"
            className="px-8 py-3.5 rounded-full bg-white/95 backdrop-blur-md text-[#1F2937] text-sm font-medium border border-gray-200/80 hover:border-gray-300 hover:text-[#662D8F] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-0.5"
          >
            Conocer la Historia
          </a>
        </div>

        {/* Micro-Highlight Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#662D8F] block mb-1">
              Esquina Emblemática
            </span>
            <p className="text-xs text-gray-600 font-light">
              Bolívar y Juan Montalvo, el punto de encuentro de las familias ambateñas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E32074] block mb-1">
              35+ Años Ininterrumpidos
            </span>
            <p className="text-xs text-gray-600 font-light">
              La misma pasión y receta artesanal nacida con un coche prestado.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F58220] block mb-1">
              Fruta Pura & Tradición
            </span>
            <p className="text-xs text-gray-600 font-light">
              Mora silvestre, coco natural y el auténtico taxo de los valles andinos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
