# Calzado Demo — catálogo con pedidos por WhatsApp

Plantilla de catálogo hecha con Vite, React y Tailwind. La marca, los productos, los precios y los datos de contacto son ficticios. Autor: Alan Puruncajas.

## Correr en tu computadora

```bash
npm install
cp .env.example .env.local
npm run dev
```

La página abre en `http://localhost:5176`. `npm run build` genera la carpeta `dist/`.

## Personalizar para un cliente nuevo

### 1. Productos

Edita [`src/data/productos.js`](src/data/productos.js). Al inicio del archivo se explica cada campo.

- Para usar fotos reales (propias o con permiso del cliente), cópialas en `public/fotos/` y agrega `foto: '/fotos/nombre.webp'` al producto. Sin `foto` se muestra un dibujo según `tipo` y color. Con `foto`, la imagen no cambia al elegir otro color.
- Si cambias las categorías, edita la lista `categorias` del mismo archivo y usa esos mismos `id` en los productos.

### 2. Número de WhatsApp

Se lee de la variable de entorno `VITE_WHATSAPP_NUMBER`: código de país y número, sin `+` ni espacios. En Ecuador es `593` seguido del celular sin el `0` inicial.

- En tu computadora: en el archivo `.env.local`.
- En el hosting: en las variables de entorno del proyecto. Cada vez que la cambies, **vuelve a desplegar**, porque Vite la incluye al compilar.

El número de `.env.example` es de ejemplo. Si la variable está vacía, en lugar de los botones de pedido aparece un aviso.

### 3. Colores

Cambia el bloque `@theme` de [`src/index.css`](src/index.css) y revisa que el texto se siga leyendo bien sobre cada fondo. El color del navegador (`theme-color` en `index.html`) y el ícono `public/favicon.svg` se cambian aparte. El verde del botón de WhatsApp está en `TarjetaProducto.jsx` y `Contacto.jsx`.

### 4. Textos y datos del negocio

- Nombre, lema, dirección, horario, correo y mapa: [`src/data/negocio.js`](src/data/negocio.js).
- Título y descripción de la página: `index.html`.
- "Sobre nosotros": `src/components/Nosotros.jsx`.
- Ventajas e ilustración de la portada: `src/components/Inicio.jsx`.
- Aviso de demostración del pie de página: `src/App.jsx`. Quítalo cuando el sitio sea de un cliente real.
