import React, { useState } from 'react';
import { Check, Sparkles, Star, Crown, Users, Clock, GlassWater, Music, UtensilsCrossed, Calendar } from 'lucide-react';

export default function PaquetesBento() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  return (
    <section id="paquetes" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D3CDD9]/70 shadow-[0_4px_16px_-6px_rgba(104,90,124,0.08)] mb-4">
            <Crown className="w-3.5 h-3.5 text-[#685A7C]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#685A7C]">
              Colección de Celebraciones
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2B2338] tracking-tight mb-5 leading-tight">
            Nuestros Paquetes Insignia
          </h2>
          <p className="text-sm sm:text-base text-[#7A7085] max-w-xl mx-auto leading-relaxed">
            Propuestas integrales curadas con obsesión por el detalle. Cada experiencia contempla gastronomía de autor, ambientación sensorial y dirección protocolar de primer nivel.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* ========================================================
              CARD 1: PAQUETE BODA ORO (Major Bento Hero - 7 cols)
             ======================================================== */}
          <div className="lg:col-span-7 group rounded-3xl bg-white border border-[#D3CDD9] p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] hover:shadow-[0_28px_56px_-16px_rgba(104,90,124,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between">
            <div>
              {/* Image Container with Zoom-in on hover */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6">
                <img
                  src="/boda.jpg"
                  alt="Paquete Boda Oro"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2338]/60 via-transparent to-black/10" />
                
                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-white/80 border border-white/60 shadow-sm text-[#2B2338]">
                  <Sparkles className="w-3.5 h-3.5 text-[#685A7C]" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase">Colección Nupcial</span>
                </div>

                {/* Price / Exclusivity Tag Bottom Right */}
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl backdrop-blur-md bg-white/90 text-[#2B2338] text-xs font-medium">
                  Desde 150 Invitados
                </div>
              </div>

              {/* Package Content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#685A7C]">
                    Experiencia Magna
                  </span>
                  <span className="text-[#D3CDD9]">•</span>
                  <span className="text-xs text-[#7A7085]">Duración: 8 Horas de Gala</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2B2338] mb-3">
                  Paquete Boda Oro
                </h3>

                <p className="text-sm text-[#7A7085] leading-relaxed mb-6">
                  La máxima expresión del romance imperial. Incluye banquete de gala a 4 tiempos con degustación previa para la pareja, barra libre ilimitada de coctelería internacional y suite nupcial privada.
                </p>

                {/* Included Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Cena de gala de 4 tiempos & degustación</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Barra libre ilimitada premium de 7 horas</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Diseño floral escenográfico de autor</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Suite nupcial privada con cava de bienvenida</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Iluminación robótica y acústica envolvente</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Wedding Planner y concierge dedicado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button Footer */}
            <div className="pt-4 border-t border-[#D3CDD9]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[11px] uppercase tracking-wider text-[#7A7085] block">Propuesta Personalizada</span>
                <span className="font-serif text-lg font-medium text-[#2B2338]">Cotización sin compromiso</span>
              </div>
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#685A7C] hover:bg-[#554866] text-white text-xs font-medium tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_10px_20px_-8px_rgba(104,90,124,0.35)] hover:shadow-[0_14px_28px_-10px_rgba(104,90,124,0.45)] hover:-translate-y-0.5"
              >
                Solicitar Boda Oro
              </a>
            </div>
          </div>

          {/* ========================================================
              CARD 2: 15 AÑOS DIAMANTE (Bento Right Column - 5 cols)
             ======================================================== */}
          <div className="lg:col-span-5 group rounded-3xl bg-white border border-[#D3CDD9] p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] hover:shadow-[0_28px_56px_-16px_rgba(104,90,124,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between">
            <div>
              {/* Image Container with Zoom-in on hover */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6">
                <img
                  src="/quinceanera.jpg"
                  alt="15 Años Diamante"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2338]/60 via-transparent to-black/10" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-white/80 border border-white/60 shadow-sm text-[#2B2338]">
                  <Star className="w-3.5 h-3.5 text-[#685A7C]" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase">Gala Quinceañera</span>
                </div>

                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl backdrop-blur-md bg-white/90 text-[#2B2338] text-xs font-medium">
                  Desde 100 Invitados
                </div>
              </div>

              {/* Package Content */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#685A7C]">
                    Producción Juvenil VIP
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2B2338] mb-3">
                  15 Años Diamante
                </h3>

                <p className="text-sm text-[#7A7085] leading-relaxed mb-6">
                  Una noche mágica concebida como un desfile de gala. Escenografía inmersiva, pista LED Infinity, entrada triunfal con efectos especiales y barra libre de mocktails exclusivos.
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Pista LED Infinity de cristal & show de luces</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Entrada de gala con pirotecnia fría no tóxica</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Barra libre de cócteles sin alcohol (Mocktails)</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">Suite camerino VIP para cambios de vestuario</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-xs text-[#2B2338]/90 font-medium">DJ profesional en vivo & efectos sensoriales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button Footer */}
            <div className="pt-4 border-t border-[#D3CDD9]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[11px] uppercase tracking-wider text-[#7A7085] block">Fecha Soñada</span>
                <span className="font-serif text-lg font-medium text-[#2B2338]">Reserva anticipada</span>
              </div>
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#685A7C] hover:bg-[#554866] text-white text-xs font-medium tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_10px_20px_-8px_rgba(104,90,124,0.35)] hover:shadow-[0_14px_28px_-10px_rgba(104,90,124,0.45)] hover:-translate-y-0.5"
              >
                Solicitar 15 Años
              </a>
            </div>
          </div>

          {/* ========================================================
              CARD 3: RECEPCIONES CORPORATIVAS DE ALTO NIVEL (Bento 6 cols)
             ======================================================== */}
          <div className="lg:col-span-6 group rounded-3xl bg-white border border-[#D3CDD9] p-6 sm:p-7 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] hover:shadow-[0_28px_56px_-16px_rgba(104,90,124,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-full sm:w-48 h-40 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/corporativo.jpg"
                  alt="Recepciones Corporativas"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>

              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#685A7C] block mb-1">
                  Mundo Corporativo
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2B2338] mb-2">
                  Recepciones Corporativas & Cumbres
                </h3>
                <p className="text-xs text-[#7A7085] leading-relaxed mb-4">
                  Cenas de premiación, aniversarios corporativos y galas benéficas con soporte técnico integral, pantallas de alta definición y protocolo ceremonial de alta confidencialidad.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F2F7] text-[11px] text-[#2B2338] font-medium">
                    Hasta 450 Asistentes
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F2F7] text-[11px] text-[#2B2338] font-medium">
                    Streaming 4K & Audio Pro
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#D3CDD9]/40 flex items-center justify-between">
              <span className="text-xs text-[#7A7085]">Atención a Comités Ejecutivos</span>
              <a
                href="#contacto"
                className="text-xs font-medium text-[#685A7C] hover:text-[#554866] underline underline-offset-4"
              >
                Consultar Dossier Corporativo →
              </a>
            </div>
          </div>

          {/* ========================================================
              CARD 4: ESPACIOS & ARQUITECTURA IMPERIAL (Bento 6 cols)
             ======================================================== */}
          <div className="lg:col-span-6 group rounded-3xl bg-white border border-[#D3CDD9] p-6 sm:p-7 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] hover:shadow-[0_28px_56px_-16px_rgba(104,90,124,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative w-full sm:w-48 h-40 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/salon.jpg"
                  alt="Salón Imperial de Gala"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80';
                  }}
                />
              </div>

              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#685A7C] block mb-1">
                  Infraestructura
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2B2338] mb-2">
                  Salón Imperial & Jardines de Invierno
                </h3>
                <p className="text-xs text-[#7A7085] leading-relaxed mb-4">
                  Columnatas clásicas, arañas con lágrimas de cristal, climatización de flujo laminar silenciosa y estacionamiento privado con valet parking de máxima seguridad.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F2F7] text-[11px] text-[#2B2338] font-medium">
                    Valet Parking Exclusivo
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#F4F2F7] text-[11px] text-[#2B2338] font-medium">
                    Generador de Respaldo 100%
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#D3CDD9]/40 flex items-center justify-between">
              <span className="text-xs text-[#7A7085]">Visitas Guiadas con Concierge</span>
              <a
                href="#espacios"
                className="text-xs font-medium text-[#685A7C] hover:text-[#554866] underline underline-offset-4"
              >
                Conocer Instalaciones →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

