import { negocio } from '../data/negocio';

const enlaces = [
  { href: '#catalogo', texto: 'Catálogo' },
  { href: '#nosotros', texto: 'Nosotros' },
  { href: '#contacto', texto: 'Contacto' },
];

export default function Encabezado() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="flex min-h-11 items-center gap-2 text-lg font-bold">
          <img src="/favicon.svg" alt="" width="32" height="32" />
          {negocio.nombre}
        </a>
        <nav aria-label="Secciones">
          <ul className="flex gap-1">
            {enlaces.map((enlace) => (
              <li key={enlace.href} className="flex-1 md:flex-none">
                <a
                  href={enlace.href}
                  className="flex min-h-11 items-center justify-center rounded-lg px-3 font-medium text-tinta-suave hover:bg-marca-suave hover:text-marca-oscuro"
                >
                  {enlace.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
