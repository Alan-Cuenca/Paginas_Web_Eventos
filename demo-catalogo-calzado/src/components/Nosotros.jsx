import { negocio } from '../data/negocio';

export default function Nosotros() {
  return (
    <section id="nosotros" aria-labelledby="titulo-nosotros" className="bg-marca-suave">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h2 id="titulo-nosotros" className="text-3xl font-extrabold">
          Sobre nosotros
        </h2>
        <p className="mt-4 text-lg">
          En {negocio.nombre} creemos que un buen par de zapatos te acompaña todo el día: al trabajo, a la
          escuela o al paseo del fin de semana. Por eso escogemos modelos cómodos, resistentes y a un precio
          justo.
        </p>
        <p className="mt-3 text-lg">
          Somos un negocio de ejemplo: esta historia, los productos y los precios son ficticios y sirven para
          mostrarte cómo se puede ver tu propio catálogo en línea.
        </p>
      </div>
    </section>
  );
}
