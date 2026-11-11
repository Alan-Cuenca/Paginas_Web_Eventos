import React from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows (Mauve & Pearl) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#685A7C]/8 via-[#D3CDD9]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#685A7C]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Editorial Sub-badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#D3CDD9]/60 shadow-[0_4px_20px_-5px_rgba(104,90,124,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#685A7C] animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#685A7C]">
              Alta Costura en Celebraciones & Galas Privadas
            </span>
          </div>
        </div>

        {/* Monumental Serif H1 Title */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#2B2338] leading-[1.08] mb-8">
            Recepciones Inolvidables y Bodas de Ensueño
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-normal text-[#7A7085] leading-relaxed mb-12">
            Diseñamos atmósferas de distinción absoluta para bodas memorables, quinceañeras de ensueño y recepciones corporativas de élite en salones concebidos bajo el más riguroso estándar de exclusividad.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Primary Action Button (Ciruela) */}
            <a
              href="#paquetes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-3xl bg-[#685A7C] hover:bg-[#554866] text-white text-sm font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_20px_40px_-15px_rgba(104,90,124,0.35)] hover:shadow-[0_25px_50px_-15px_rgba(104,90,124,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explorar Paquetes</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Action Button */}
            <a
              href="#espacios"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-3xl bg-white hover:bg-[#F4F2F7] text-[#2B2338] border border-[#D3CDD9] text-sm font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_10px_30px_-15px_rgba(104,90,124,0.08)] hover:-translate-y-0.5"
            >
              Recorrer Salones
            </a>
          </div>
        </div>

        {/* Hero Visual Composition - Editorial Luxury Bento Showcase */}
        <div className="mt-16 md:mt-20">
          <div className="relative rounded-3xl p-3 md:p-4 bg-white border border-[#D3CDD9]/70 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] overflow-hidden">
            <div className="relative h-[340px] sm:h-[420px] md:h-[500px] w-full rounded-2xl overflow-hidden group">
              <img
                src="/boda.jpg"
                alt="Boda de Ensueño en Recepciones Imperial"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2338]/70 via-[#2B2338]/20 to-transparent" />

              {/* Floating Glass Pill Badge (Top Left) */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-2xl backdrop-blur-xl bg-white/75 border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#685A7C]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#2B2338]">
                  Salón Imperial Gran Gala
                </span>
              </div>

              {/* Bottom Hero Caption */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#D3CDD9] font-medium mb-1">
                    Colección 2026 / 2027
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
                    La sinfonía perfecta entre arquitectura clásica y servicio sin precedentes.
                  </h2>
                </div>

                <div className="hidden sm:flex items-center gap-6 backdrop-blur-xl bg-white/15 px-5 py-3 rounded-2xl border border-white/20">
                  <div className="text-left">
                    <p className="font-serif text-xl font-medium leading-none text-white">450</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/80 mt-1">Capacidad Máxima</p>
                  </div>
                  <div className="w-px h-7 bg-white/30" />
                  <div className="text-left">
                    <p className="font-serif text-xl font-medium leading-none text-white">100%</p>
                    <p className="text-[10px] uppercase tracking-wider text-white/80 mt-1">Personalizado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Pillars Banner (Clean Editorial Anthropic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-3xl bg-white border border-[#D3CDD9]/60 p-6 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4F2F7] flex items-center justify-center shrink-0 text-[#685A7C]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-[#2B2338] mb-1">Bodas de Ensueño</h3>
              <p className="text-xs text-[#7A7085] leading-relaxed">
                Ceremonia y banquete con diseño floral exclusivo, suite nupcial y coordinación protocolar personalizada.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#D3CDD9]/60 p-6 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4F2F7] flex items-center justify-center shrink-0 text-[#685A7C]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-[#2B2338] mb-1">15 Años Diamante</h3>
              <p className="text-xs text-[#7A7085] leading-relaxed">
                Producción audiovisual inmersiva, entrada de gala triunfal, vals coreografiado y cóctel juvenil sin alcohol.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#D3CDD9]/60 p-6 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4F2F7] flex items-center justify-center shrink-0 text-[#685A7C]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-[#2B2338] mb-1">Recepciones Corporativas</h3>
              <p className="text-xs text-[#7A7085] leading-relaxed">
                Cenas de gala, aniversarios de firmas y congresos de alto nivel con acústica premium y privacidad total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

