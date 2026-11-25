import { negocio } from '../data/negocio';
import Ilustracion from './Ilustracion';

const ventajas = [
  { titulo: 'Pide por WhatsApp', texto: 'El mensaje sale listo con tu modelo, talla y color.' },
  { titulo: 'Para toda la familia', texto: 'Modelos para hombre, mujer y niño.' },
  { titulo: 'Atención cercana', texto: 'Te ayudamos a escoger la talla correcta.' },
];

export default function Inicio() {
  return (
    <section id="inicio" className="bg-marca text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h1 className="text-4xl leading-tight font-extrabold text-balance md:text-5xl">{negocio.lema}</h1>
          <p className="mt-4 max-w-md text-lg text-white/90">{negocio.descripcion}</p>
          <a
            href="#catalogo"
            className="mt-6 flex min-h-13 items-center justify-center rounded-xl bg-acento px-6 text-lg font-bold text-tinta hover:brightness-105 focus-visible:outline-white sm:inline-flex"
          >
            Ver el catálogo
          </a>
        </div>
        <Ilustracion
          tipo="deportivo"
          color="#f2b441"
          descripcion="Ilustración de un zapato deportivo amarillo"
          className="mx-auto w-full max-w-md rounded-3xl shadow-xl"
        />
      </div>
      <ul className="mx-auto grid max-w-6xl gap-3 px-4 pb-10 sm:grid-cols-3">
        {ventajas.map((v) => (
          <li key={v.titulo} className="rounded-2xl bg-marca-oscuro p-4">
            <h2 className="font-bold">{v.titulo}</h2>
            <p className="mt-1 text-sm text-white/90">{v.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
