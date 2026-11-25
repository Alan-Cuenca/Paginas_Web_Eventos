import { useState } from 'react';
import { negocio } from '../data/negocio';
import { formatoPrecio } from '../utils/formato';
import { enlaceWhatsApp, numeroWhatsApp } from '../utils/whatsapp';
import Ilustracion from './Ilustracion';
import Opcion from './Opcion';

const estiloBoton =
  'flex min-h-13 w-full items-center justify-center rounded-xl bg-[#0b6b3a] px-4 text-base font-bold text-white hover:bg-[#08522c]';

export default function TarjetaProducto({ producto, tallaFiltrada }) {
  // Si hay un filtro de talla activo, la tarjeta empieza con esa talla elegida.
  const [talla, setTalla] = useState(tallaFiltrada);
  const [color, setColor] = useState(producto.colores[0]);
  const [faltaTalla, setFaltaTalla] = useState(false);

  const mensaje = [
    `Hola ${negocio.nombre}, quiero pedir:`,
    `• Producto: ${producto.nombre}`,
    `• Talla: ${talla}`,
    `• Color: ${color.nombre}`,
    `• Precio: ${formatoPrecio(producto.precio)}`,
    '¿Está disponible?',
  ].join('\n');

  const descripcion = `${producto.nombre} en color ${color.nombre.toLowerCase()}`;
  const textoBoton = (
    <>
      Pedir por WhatsApp
      <span className="sr-only">: {producto.nombre}</span>
    </>
  );

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      {producto.foto ? (
        <img src={producto.foto} alt={descripcion} loading="lazy" className="aspect-5/4 w-full object-cover" />
      ) : (
        <Ilustracion
          tipo={producto.tipo}
          color={color.hex}
          descripcion={`Ilustración: ${descripcion}`}
          className="w-full"
        />
      )}

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h3 className="text-lg font-bold">{producto.nombre}</h3>
          <p className="text-2xl font-extrabold text-marca">{formatoPrecio(producto.precio)}</p>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm text-tinta-suave">Tallas disponibles</legend>
          <div className="flex flex-wrap gap-2">
            {producto.tallas.map((t) => (
              <Opcion
                key={t}
                name={`talla-${producto.id}`}
                value={t}
                checked={talla === t}
                onChange={() => {
                  setTalla(t);
                  setFaltaTalla(false);
                }}
              >
                {t}
              </Opcion>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-sm text-tinta-suave">Colores</legend>
          <div className="flex flex-wrap gap-2">
            {producto.colores.map((c) => (
              <Opcion
                key={c.nombre}
                name={`color-${producto.id}`}
                value={c.nombre}
                checked={color.nombre === c.nombre}
                onChange={() => setColor(c)}
              >
                <span
                  aria-hidden="true"
                  className="size-4 rounded-full border border-stone-400"
                  style={{ backgroundColor: c.hex }}
                />
                {c.nombre}
              </Opcion>
            ))}
          </div>
        </fieldset>

        <div className="mt-auto space-y-2">
          <p role="alert" className="text-sm font-semibold text-red-700 empty:hidden">
            {faltaTalla ? 'Elige tu talla para hacer el pedido.' : ''}
          </p>
          {!numeroWhatsApp ? (
            <p className="rounded-xl bg-stone-100 p-3 text-center text-sm text-tinta-suave">
              Los pedidos por WhatsApp aún no están configurados.
            </p>
          ) : talla ? (
            <a href={enlaceWhatsApp(mensaje)} target="_blank" rel="noopener noreferrer" className={estiloBoton}>
              {textoBoton}
            </a>
          ) : (
            <button type="button" onClick={() => setFaltaTalla(true)} className={`${estiloBoton} cursor-pointer`}>
              {textoBoton}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
