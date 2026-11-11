import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonios() {
  const testimonios = [
    {
      cita: "La arquitectura del salón y la iluminación crearon una atmósfera cinematográfica para nuestra boda. Cada invitado quedó impresionado con el nivel gastronómico y la atención del concierge.",
      autor: "Camila & Sebastián",
      evento: "Boda de Gala — Salón Imperial",
      fecha: "Octubre 2025"
    },
    {
      cita: "Los 15 años de mi hija superaron cualquier expectativa. La entrada con la pirotecnia fría y la pista infinita fue un momento que guardaremos en el corazón para siempre.",
      autor: "Dra. Patricia Arismendi",
      evento: "15 Años Diamante",
      fecha: "Enero 2026"
    },
    {
      cita: "Realizamos la cena anual de nuestro directorio con 300 ejecutivos internacionales. La acústica, la reserva protocolar y el servicio de sommelier fueron sencillamente impecables.",
      autor: "Ing. Alejandro De La Torre",
      evento: "Cala Corporativa Anual",
      fecha: "Noviembre 2025"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/50 border-y border-[#D3CDD9]/40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#685A7C] block mb-2">
            Testimonios & Prestigio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B2338] tracking-tight">
            Momentos que Quedan Grabados en la Memoria
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#D3CDD9]/70 p-8 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.06)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-[#685A7C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-lg text-[#2B2338] leading-relaxed italic mb-8">
                  "{item.cita}"
                </p>
              </div>

              <div className="border-t border-[#D3CDD9]/40 pt-4">
                <p className="text-xs font-semibold text-[#2B2338] uppercase tracking-wider">
                  {item.autor}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#7A7085] mt-0.5">
                  <span>{item.evento}</span>
                  <span>{item.fecha}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

