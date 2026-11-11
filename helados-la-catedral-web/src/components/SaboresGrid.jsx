import React, { useState } from 'react';
import { Sparkles, Star, Award, Heart } from 'lucide-react';

const SABORES_CATEDRAL = [
  // --- SABORES TRADICIONALES (Etiqueta Morado #662D8F) ---
  {
    id: 'mora',
    nombre: 'Mora Tradicional',
    categoria: 'Tradicional',
    colorCategoria: '#662D8F',
    descripcion: 'El sabor insignia de Ambato. Elaborado con mora silvestre andina seleccionada a mano, logrando ese equilibrio agridulce inconfundible de nuestra receta de 1988.',
    perfil: 'Mora Silvestre Andina • 100% Fruta',
    imagen: '/Mora.jpg',
    esTradicional: true,
    objectCover: false,
    insignia: 'Insignia 1988'
  },
  {
    id: 'coco',
    nombre: 'Coco Cremoso',
    categoria: 'Tradicional',
    colorCategoria: '#662D8F',
    descripcion: 'Pulpa de coco natural finamente rallada en leche entera de hacienda. Textura aterciopelada, fresca y con el sabor casero que ha conquistado a generaciones.',
    perfil: 'Coco Rallado Natural • Cremoso',
    imagen: '/Coco.jpg',
    esTradicional: true,
    objectCover: false,
    insignia: 'Receta Clásica'
  },
  {
    id: 'taxo',
    nombre: 'Taxo Andino',
    categoria: 'Tradicional',
    colorCategoria: '#662D8F',
    descripcion: 'Fruto emblemático de los valles interandinos (pasiflora). Un perfume aromático único con un toque cítrico aterciopelado que honra nuestra identidad serrana.',
    perfil: 'Taxo de Valle • Auténtico Serrano',
    imagen: '/Taxo.webp',
    esTradicional: true,
    objectCover: false,
    insignia: 'Cosecha de Altura'
  },

  // --- NUEVOS Y ESPECIALES (Etiqueta Naranja #F58220) ---
  {
    id: 'maracuya',
    nombre: 'Maracuyá de la Costa',
    categoria: 'Nuevo y Especial',
    colorCategoria: '#F58220',
    descripcion: 'Pura pulpa de fruta de la pasión con su acidez cítrica tropical vibrante. Un sorbete intensamente refrescante que despierta el paladar.',
    perfil: 'Fruta de la Pasión • Refrescante',
    imagen: '/Maracuya.webp',
    esTradicional: false,
    objectCover: false,
    insignia: 'Cítrico Tropical'
  },
  {
    id: 'cafe',
    nombre: 'Café de Altura',
    categoria: 'Nuevo y Especial',
    colorCategoria: '#F58220',
    descripcion: 'Elaborado con infusión de granos de café arábigo tostados artesanalmente. Notas tostadas profundas equilibradas en una base láctea suave.',
    perfil: 'Grano Arábigo Tostado • Aromático',
    imagen: '/Cafe.jpg',
    esTradicional: false,
    objectCover: true,
    insignia: 'Granos Seleccionados'
  },
  {
    id: 'ron-pasas',
    nombre: 'Ron con Pasas',
    categoria: 'Nuevo y Especial',
    colorCategoria: '#F58220',
    descripcion: 'Uvas pasas maduras maceradas pacientemente en licor de caña añejo, dispersas en una suave crema de vainilla dorada de autor.',
    perfil: 'Macerado en Roble • Helado Gourmet',
    imagen: '/Ron_Pasas.png',
    esTradicional: false,
    objectCover: false,
    insignia: 'Edición Gourmet'
  },
  {
    id: 'guanabana',
    nombre: 'Guanábana Imperial',
    categoria: 'Nuevo y Especial',
    colorCategoria: '#F58220',
    descripcion: 'Carne blanca y jugosa de guanábanas maduras batidas en frío. Sabor tropical floral, ligeramente ácido y con una cremosidad inigualable.',
    perfil: 'Guanábana Fresca • Textura de Seda',
    imagen: '/Guanabana.webp',
    esTradicional: false,
    objectCover: false,
    insignia: '100% Pulpa Fresca'
  },
];

export default function SaboresGrid() {
  const [filtro, setFiltro] = useState('todos');

  const saboresFiltrados = SABORES_CATEDRAL.filter((sabor) => {
    if (filtro === 'tradicionales') return sabor.esTradicional;
    if (filtro === 'especiales') return !sabor.esTradicional;
    return true;
  });

  return (
    <section id="sabores" className="scroll-mt-24 py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gray-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] text-xs font-semibold text-[#E32074] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nuestra Carta Artesanal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1F2937] tracking-tight leading-tight mb-4">
              Sabores que coinciden con su origen.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
              Cada helado se elabora con la fruta real de nuestra tierra. Ingredientes nobles y puros que puedes apreciar en cada bocado.
            </p>
          </div>

          {/* Minimalist Categorization Controls */}
          <div className="inline-flex p-1.5 rounded-full bg-stone-200/70 border border-stone-200 text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setFiltro('todos')}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filtro === 'todos'
                  ? 'bg-white text-gray-900 shadow-sm font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Todos ({SABORES_CATEDRAL.length})
            </button>
            <button
              onClick={() => setFiltro('tradicionales')}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                filtro === 'tradicionales'
                  ? 'bg-[#662D8F] text-white shadow-sm font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-white/80" />
              Tradicionales (3)
            </button>
            <button
              onClick={() => setFiltro('especiales')}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                filtro === 'especiales'
                  ? 'bg-[#F58220] text-white shadow-sm font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-white/80" />
              Nuevos y Especiales (4)
            </button>
          </div>
        </div>

        {/* Visual Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saboresFiltrados.map((sabor) => (
            <article
              key={sabor.id}
              className="group rounded-3xl bg-white border border-gray-100/90 overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col"
            >
              {/* Product Showcase Container (Apple HIG Clean Exhibition Style) */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-[#F9F9FB] to-[#F1F1F4] flex items-center justify-center p-6 group-hover:from-[#F4F4F7] group-hover:to-[#ECECEF] transition-colors duration-500">
                <img
                  src={sabor.imagen}
                  alt={sabor.nombre}
                  className={`transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 ${
                    sabor.objectCover 
                      ? 'w-full h-full object-cover rounded-2xl' 
                      : 'max-h-full max-w-full object-contain drop-shadow-[0_12px_20px_rgba(0,0,0,0.08)]'
                  }`}
                  loading="lazy"
                />

                {/* Category Badge (Morado #662D8F for Tradicionales, Naranja #F58220 for Especiales) */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm border ${
                    sabor.esTradicional
                      ? 'bg-[#662D8F]/95 text-white border-white/20'
                      : 'bg-[#F58220]/95 text-white border-white/20'
                  }`}>
                    {sabor.esTradicional ? (
                      <Star className="w-3 h-3 fill-current text-[#F58220]" />
                    ) : (
                      <Sparkles className="w-3 h-3 text-white" />
                    )}
                    {sabor.categoria}
                  </span>

                  {sabor.insignia && (
                    <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/95 backdrop-blur-md text-gray-800 border border-gray-200/50 shadow-xs">
                      {sabor.insignia}
                    </span>
                  )}
                </div>
              </div>

              {/* Sabor Card Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1F2937] mb-2 group-hover:text-[#662D8F] transition-colors duration-300">
                    {sabor.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {sabor.descripcion}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full shadow-xs" 
                      style={{ backgroundColor: sabor.colorCategoria }}
                    />
                    {sabor.perfil}
                  </span>
                  <span className="text-gray-400 text-[11px] uppercase tracking-wider">
                    Paila Artesanal
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Ambient contemplative note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
            Disfrútalos recién batidos en la esquina de Simón Bolívar y Juan Montalvo • Ambato
          </p>
        </div>

      </div>
    </section>
  );
}
