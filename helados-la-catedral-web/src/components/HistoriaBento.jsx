import React from 'react';
import { Sparkles, History, Compass, Heart, Users, MapPin } from 'lucide-react';

export default function HistoriaBento() {
  return (
    <section id="historia" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200/60 text-xs font-semibold text-[#662D8F] mb-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <History className="w-3.5 h-3.5 text-[#E32074]" />
            <span>Nuestra Historia & Raíces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1F2937] tracking-tight leading-tight mb-5">
            De un coche prestado a convertirse en el corazón heladero de Ambato.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            Una historia entrañable de esfuerzo familiar, perseverancia y recetas de paila que hoy forman parte indeleble de la memoria colectiva ambateña.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 auto-rows-[260px] md:auto-rows-[300px]">
          
          {/* Bento Cell 1: Catedral de Ambato Image with rounded-3xl */}
          <div className="lg:col-span-5 md:col-span-3 row-span-1 md:row-span-2 rounded-3xl overflow-hidden relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group">
            <img
              src="/Catedral.jpg"
              alt="Catedral de Ambato"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-xs uppercase tracking-widest text-[#F58220] font-semibold mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Patrimonio Urbano
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 leading-snug">
                Frente a la Catedral de Ambato
              </h3>
              <p className="text-xs sm:text-sm text-stone-200/90 font-light leading-relaxed">
                La emblemática esquina de Simón Bolívar y Juan Montalvo, donde el aroma a fruta macerada y el murmullo de la plaza reciben a diario a ambateños y turistas.
              </p>
            </div>
          </div>

          {/* Bento Cell 2: Don Segundo Oña "El Marinero" (Span 7 cols on lg) */}
          <div id="marinero" className="scroll-mt-28 lg:col-span-7 md:col-span-3 p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#E32074]/10 via-[#662D8F]/5 to-transparent rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#E32074]">
                  El Fundador
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-stone-100 text-gray-500">
                  Desde hace +35 años
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F2937] mb-3 leading-tight">
                Don Segundo Oña: La leyenda de <span className="text-[#662D8F]">"El Marinero"</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-xl">
                Conocido con respeto y cariño como <em>"El Marinero"</em>, Don Segundo comenzó su travesía vendiendo helados con un <strong>coche prestado</strong>, impulsado hombro a hombro por el trabajo incansable de su <strong>esposa y suegro</strong>. Con recetas celosamente cuidadas y un trato humilde, sembraron las raíces de una empresa símbolo de Ambato.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#662D8F]/10 flex items-center justify-center text-[#662D8F]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Empresa Familiar</p>
                  <p className="text-[11px] text-gray-500">Esfuerzo de tres generaciones</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F58220]" />
                <span className="text-xs font-medium text-gray-700">Legado Intacto</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 3: La Esquina Icónica (Span 4 cols on lg) */}
          <div className="lg:col-span-4 md:col-span-2 p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#E32074]/10 text-[#E32074] flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-[#1F2937] mb-2">
                Simón Bolívar y Juan Montalvo
              </h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                En esta intersección histórica de Ambato se detiene el tiempo. Familias enteras se congregan aquí cada tarde para compartir un helado tradicional.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 text-[11px] font-semibold text-[#662D8F] uppercase tracking-wider">
              Punto de Encuentro
            </div>
          </div>

          {/* Bento Cell 4: El Valor de la Tradición (Span 3 cols on lg) */}
          <div className="lg:col-span-3 md:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-[#662D8F] to-[#451863] text-white shadow-[0_20px_40px_-15px_rgba(102,45,143,0.3)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md text-[#F58220] flex items-center justify-center mb-5">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-white mb-2">
                Puro y Natural
              </h4>
              <p className="text-xs text-stone-200/90 font-light leading-relaxed">
                Elaborados diariamente con pulpas de fruta fresca sin colorantes ni saborizantes artificiales.
              </p>
            </div>
            <div className="pt-4 border-t border-white/15 text-[11px] font-medium text-[#F58220] uppercase tracking-wider">
              100% Calidad Andina
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
