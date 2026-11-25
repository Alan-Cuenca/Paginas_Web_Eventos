import Catalogo from './components/Catalogo';
import Contacto from './components/Contacto';
import Encabezado from './components/Encabezado';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import { negocio } from './data/negocio';

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Inicio />
        <Catalogo />
        <Nosotros />
        <Contacto />
      </main>
      <footer className="bg-tinta px-4 py-8 text-center text-sm text-stone-300">
        <p>
          © {new Date().getFullYear()} {negocio.nombre}
        </p>
        <p className="mt-1">Sitio de demostración: la marca, los productos y los precios son ficticios.</p>
      </footer>
    </>
  );
}
