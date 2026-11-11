import React from 'react';
import { Maximize2, Users, Sparkles, Shield, Compass } from 'lucide-react';

export default function EspaciosGallery() {
  const espacios = [
    {
      nombre: "Gran Salón Imperial",
      tipo: "Salón Principal de Gala",
      capacidad: "Hasta 450 personas",
      descripcion: "Majestuoso espacio con doble altura arquitectónica, arañas de cristal cortado y piso de mármol pulido. Diseñado acústicamente para orquestas y ensambles en vivo.",
      imagen: "/salon.jpg",
      fallback: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      detalles: ["Techo acústico a 6 metros", "Climatización silenciosa VRF", "Iluminación perimetral dimerizable"]
    },
    {
      nombre: "Jardín de Cristal & Pérgola",
      tipo: "Ceremonias al Aire Libre & Cócteles",
      capacidad: "Hasta 220 personas",
      descripcion: "Un oasis botánico techado en cristal templado para recepciones al atardecer, ceremonias simbólicas y brindis bajo la luz de las estrellas con total protección climática.",
      imagen: "/detalles.jpg",
      fallback: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      detalles: ["Fuente de agua ornamental", "Pérgola forjada con orquídeas", "Barra exterior de coctelería"]
    },
    {
      nombre: "Suite Nupcial & VIP Lounge",
      tipo: "Área Privada de Confort",
      capacidad: "Novios & Cortejo Íntimo",
      descripcion: "Espacio exclusivo climatizado con tocador profesional para estilistas, vestidor privado, baño de mármol con amenidades de lujo y servicio de catering reservado.",
      imagen: "/boda.jpg",
      fallback: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      detalles: ["Cava de espumantes & café gourmet", "Espejo infinito iluminado", "Acceso directo y discreto al salón"]
    }
  ];

  return (
    <section id="espacios" className="py-24 md:py-32 relative bg-[#F4F2F7]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D3CDD9]/70 shadow-[0_4px_16px_-6px_rgba(104,90,124,0.08)] mb-4">
              <Compass className="w-3.5 h-3.5 text-[#685A7C]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#685A7C]">
                Arquitectura & Estilo
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2B2338] tracking-tight">
              Espacios Diseñados para Trascender
            </h2>
          </div>
          <p className="text-sm text-[#7A7085] max-w-md leading-relaxed">
            Cada rincón de nuestra propiedad ha sido concebido para propiciar una experiencia sensorial de confort, acústica superior y distinción visual inigualable.
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {espacios.map((espacio, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-white border border-[#D3CDD9] p-6 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)] hover:shadow-[0_28px_56px_-16px_rgba(104,90,124,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between"
            >
              <div>
                {/* Photo with zoom effect */}
                <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6">
                  <img
                    src={espacio.imagen}
                    alt={espacio.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = espacio.fallback;
                    }}
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-xl backdrop-blur-md bg-white/80 border border-white/50 text-[11px] font-medium text-[#2B2338]">
                    {espacio.capacidad}
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#685A7C] block mb-1">
                  {espacio.tipo}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#2B2338] mb-3">
                  {espacio.nombre}
                </h3>
                <p className="text-xs text-[#7A7085] leading-relaxed mb-6">
                  {espacio.descripcion}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 border-t border-[#D3CDD9]/40 pt-4 mb-6">
                  {espacio.detalles.map((detalle, dIdx) => (
                    <li key={dIdx} className="text-xs text-[#2B2338]/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#685A7C]/60" />
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-2xl bg-[#F4F2F7] hover:bg-[#685A7C] text-[#2B2338] hover:text-white text-xs font-medium tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                Agendar Recorrido
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

