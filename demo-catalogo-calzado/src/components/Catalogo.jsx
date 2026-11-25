import { useState } from 'react';
import { categorias, productos } from '../data/productos';
import Opcion from './Opcion';
import TarjetaProducto from './TarjetaProducto';

const deCategoria = (categoria) =>
  categoria === 'todos' ? productos : productos.filter((p) => p.categoria === categoria);

const tallasDe = (lista) => [...new Set(lista.flatMap((p) => p.tallas))].sort((a, b) => a - b);

export default function Catalogo() {
  const [categoria, setCategoria] = useState('todos');
  const [talla, setTalla] = useState(null);

  const enCategoria = deCategoria(categoria);
  const visibles = talla ? enCategoria.filter((p) => p.tallas.includes(talla)) : enCategoria;

  function cambiarCategoria(nueva) {
    setCategoria(nueva);
    // Si la talla elegida no existe en la nueva categoría, se quita el filtro.
    if (talla && !tallasDe(deCategoria(nueva)).includes(talla)) setTalla(null);
  }

  return (
    <section id="catalogo" aria-labelledby="titulo-catalogo" className="mx-auto max-w-6xl px-4 py-12">
      <h2 id="titulo-catalogo" className="text-3xl font-extrabold">
        Catálogo
      </h2>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-4 md:flex-row md:items-end md:justify-between">
        <fieldset>
          <legend className="mb-2 font-semibold">Categoría</legend>
          <div className="flex flex-wrap gap-2">
            {categorias.map((c) => (
              <Opcion
                key={c.id}
                name="filtro-categoria"
                value={c.id}
                checked={categoria === c.id}
                onChange={() => cambiarCategoria(c.id)}
              >
                {c.nombre}
              </Opcion>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="filtro-talla" className="mb-2 block font-semibold">
            Talla
          </label>
          <select
            id="filtro-talla"
            value={talla ?? ''}
            onChange={(e) => setTalla(e.target.value ? Number(e.target.value) : null)}
            className="min-h-11 w-full rounded-lg border border-stone-500 bg-white px-3 text-base md:w-56"
          >
            <option value="">Todas las tallas</option>
            {tallasDe(enCategoria).map((t) => (
              <option key={t} value={t}>
                Talla {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-tinta-suave">
        {visibles.length === 1 ? '1 modelo' : `${visibles.length} modelos`}
      </p>

      {visibles.length > 0 ? (
        <ul className="mt-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((p) => (
            // La clave incluye la talla filtrada para reiniciar la selección al cambiar el filtro.
            <li key={`${p.id}-${talla}`} className="flex *:w-full">
              <TarjetaProducto producto={p} tallaFiltrada={talla} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 rounded-2xl bg-white p-6 text-center">No hay modelos con ese filtro.</p>
      )}
    </section>
  );
}
