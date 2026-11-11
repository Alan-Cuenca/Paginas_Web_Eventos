import React from 'react';
import { MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="ubicacion" className="scroll-mt-24 border-t border-gray-200/60 bg-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-100">
          
          {/* Brand Identity & Legacy */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo_Helados_Catedral.jpg" 
                alt="Helados La Catedral" 
                className="h-10 rounded-lg object-contain shadow-sm"
              />
              <span className="font-serif text-xl font-semibold tracking-tight text-[#1F2937]">
                Helados La Catedral
              </span>
            </div>
            <p className="text-sm text-gray-500 font-light max-w-sm leading-relaxed">
              Más de 35 años de tradición en Ambato. Un homenaje viviente a la visión de Don Segundo Oña, "El Marinero", y a la historia que une a nuestra ciudad en torno a la paila.
            </p>
          </div>

          {/* Sede Histórica */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#662D8F]">
              Punto de Encuentro
            </h4>
            <div className="space-y-2 text-xs text-gray-600 font-light leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E32074] shrink-0 mt-0.5" />
                <span>Esquina de Simón Bolívar y Juan Montalvo</span>
              </p>
              <p className="text-gray-400 pl-6">
                Frente a la Catedral • Ambato, Ecuador
              </p>
              <p className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <span>Lunes a Domingo: 09:30 — 19:30</span>
              </p>
            </div>
          </div>

          {/* Tradición & Compromiso */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#662D8F]">
              Calidad Artesanal
            </h4>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Batido diario en paila tradicional con frutas frescas de huertos andinos. Cero conservantes artificiales.
            </p>
            <div className="pt-2 text-xs text-gray-400 font-mono">
              Hecho con cariño en Ambato
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Hiper-discreet SaaS Bridge Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <div>
            © {new Date().getFullYear()} Helados La Catedral. Todos los derechos reservados.
          </div>

          {/* Hiper-discreet text link: Light gray, almost invisible until hover */}
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-gray-300">Ambato, Tungurahua</span>
            <a 
              href="http://localhost:5173/portal/helados-la-catedral/login" 
              className="text-gray-300/60 hover:text-gray-500 transition-colors duration-300 text-[11px] cursor-pointer selection:bg-transparent"
              title="Acceso Institucional"
            >
              Portal de Empleados
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
