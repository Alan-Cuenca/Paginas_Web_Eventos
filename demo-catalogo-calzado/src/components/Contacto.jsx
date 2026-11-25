import { negocio } from '../data/negocio';
import { enlaceWhatsApp, numeroWhatsApp } from '../utils/whatsapp';

export default function Contacto() {
  const busqueda = encodeURIComponent(negocio.mapaBusqueda);
  const datos = [
    { titulo: 'Dirección', valor: negocio.direccion },
    { titulo: 'Horario', valor: negocio.horario },
    { titulo: 'Correo', valor: negocio.correo },
  ];

  return (
    <section id="contacto" aria-labelledby="titulo-contacto" className="mx-auto max-w-6xl px-4 py-12">
      <h2 id="titulo-contacto" className="text-3xl font-extrabold">
        Contacto
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <dl className="space-y-4">
            {datos.map((d) => (
              <div key={d.titulo}>
                <dt className="font-bold">{d.titulo}</dt>
                <dd className="text-tinta-suave">{d.valor}</dd>
              </div>
            ))}
          </dl>
          {numeroWhatsApp && (
            <a
              href={enlaceWhatsApp(`Hola ${negocio.nombre}, tengo una consulta.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex min-h-13 items-center justify-center rounded-xl bg-[#0b6b3a] px-6 font-bold text-white hover:bg-[#08522c] sm:inline-flex"
            >
              Escríbenos por WhatsApp
            </a>
          )}
        </div>
        <div>
          <iframe
            title={`Mapa de ejemplo: ${negocio.mapaBusqueda}`}
            src={`https://www.google.com/maps?q=${busqueda}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-2xl border border-stone-300 md:h-96"
          />
          <p className="mt-2 text-sm text-tinta-suave">
            Ubicación de ejemplo.{' '}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${busqueda}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 font-semibold text-marca underline"
            >
              Abrir en Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
