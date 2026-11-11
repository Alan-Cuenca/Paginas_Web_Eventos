import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D3CDD9]/60 bg-white/40 pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#D3CDD9]/40">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-2xl bg-[#685A7C] flex items-center justify-center text-white shadow-sm">
                  <span className="font-serif text-base font-light tracking-wider">I</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-serif text-lg tracking-tight font-medium text-[#2B2338]">
                    Imperial
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.24em] text-[#7A7085] font-medium">
                    Recepciones & Eventos
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#7A7085] max-w-sm leading-relaxed mb-6">
                Espacios arquitectónicos de ensueño y servicio ceremonial de alta costura para los momentos más trascendentes de su vida social y corporativa.
              </p>
            </div>

            <div className="space-y-2 text-xs text-[#7A7085]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#685A7C]" />
                <span>Avenida de las Palmas 1420, Distrito Imperial</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#685A7C]" />
                <span>+51 (1) 480-9200 / Concierge: +51 987 654 321</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#685A7C]" />
                <span>reservas@eventosimperial.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2B2338] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-[#7A7085]">
              <li>
                <a href="#experiencias" className="hover:text-[#685A7C] transition-colors">
                  Bodas de Ensueño
                </a>
              </li>
              <li>
                <a href="#paquetes" className="hover:text-[#685A7C] transition-colors">
                  Fiestas de 15 Años Diamante
                </a>
              </li>
              <li>
                <a href="#paquetes" className="hover:text-[#685A7C] transition-colors">
                  Recepciones Corporativas
                </a>
              </li>
              <li>
                <a href="#espacios" className="hover:text-[#685A7C] transition-colors">
                  Salón Imperial Gran Gala
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#685A7C] transition-colors">
                  Citas & Degustaciones Privadas
                </a>
              </li>
            </ul>
          </div>

          {/* Protocol & Attention Column (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2B2338] mb-4">
              Horario de Atención Privada
            </h4>
            <p className="text-xs text-[#7A7085] leading-relaxed mb-4">
              Las visitas y entrevistas con nuestros Wedding Planners y directores de banquete se coordinan con previa cita para garantizar total privacidad en las instalaciones.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-[#D3CDD9]/60 shadow-[0_4px_16px_-6px_rgba(104,90,124,0.06)]">
              <span className="text-[11px] font-medium text-[#2B2338] block">Martes a Domingo: 10:00 - 19:30</span>
              <span className="text-[11px] text-[#7A7085] block mt-1">Lunes: Dedicado a mantención y montaje escenográfico</span>
            </div>
          </div>

        </div>

        {/* Bottom Ultra-Minimalist Bar with Discreet SaaS Portal Link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7085]">
          <p>
            © {currentYear} Recepciones & Eventos Imperial S.A.C. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[#D3CDD9]">•</span>
            {/* The Discreet Bridge to EVENTRA SaaS */}
            <a
              href="http://localhost:5173/portal/eventos-imperial/login"
              className="text-[#7A7085] hover:text-[#2B2338] underline underline-offset-4 decoration-[#D3CDD9] hover:decoration-[#685A7C] transition-all flex items-center gap-1"
              title="Acceso exclusivo al sistema de gestión para clientes con contrato y personal de servicio"
            >
              <span>Portal de Clientes / Staff</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

