// CATÁLOGO: este es el único archivo que necesitas editar para cambiar los productos.
//
// Cada producto lleva:
//   id         texto único, sin espacios
//   nombre     como se mostrará en la página
//   categoria  'hombre', 'mujer' o 'nino'
//   precio     en dólares, con punto decimal (39.9)
//   tallas     lista de tallas disponibles (números)
//   colores    lista de colores; el primero se muestra por defecto
//   tipo       dibujo: 'deportivo', 'bota', 'sandalia' o 'formal'
//   foto       (opcional) foto propia dentro de public/, ej. '/fotos/modelo.webp'

export const categorias = [
  { id: 'todos', nombre: 'Todos' },
  { id: 'hombre', nombre: 'Hombre' },
  { id: 'mujer', nombre: 'Mujer' },
  { id: 'nino', nombre: 'Niño' },
];

// Colores reutilizables: nombre visible y código hexadecimal.
const negro = { nombre: 'Negro', hex: '#3f3f46' };
const blanco = { nombre: 'Blanco', hex: '#f4f4f5' };
const cafe = { nombre: 'Café', hex: '#7c4a21' };
const miel = { nombre: 'Miel', hex: '#c08436' };
const azul = { nombre: 'Azul', hex: '#1d4e89' };
const rojo = { nombre: 'Rojo', hex: '#b42318' };
const rosado = { nombre: 'Rosado', hex: '#d9668f' };
const verde = { nombre: 'Verde', hex: '#3f6b46' };
const beige = { nombre: 'Beige', hex: '#cdb494' };

export const productos = [
  {
    id: 'trote-andino',
    nombre: 'Deportivo Trote Andino',
    categoria: 'hombre',
    precio: 42.5,
    tallas: [39, 40, 41, 42, 43],
    colores: [azul, negro, verde],
    tipo: 'deportivo',
  },
  {
    id: 'formal-clasico',
    nombre: 'Zapato Formal Clásico',
    categoria: 'hombre',
    precio: 54.9,
    tallas: [39, 40, 41, 42, 44],
    colores: [negro, cafe],
    tipo: 'formal',
  },
  {
    id: 'bota-paramo',
    nombre: 'Bota Páramo',
    categoria: 'hombre',
    precio: 68,
    tallas: [40, 41, 42, 43, 44],
    colores: [miel, cafe, negro],
    tipo: 'bota',
  },
  {
    id: 'sandalia-brisa',
    nombre: 'Sandalia Brisa',
    categoria: 'mujer',
    precio: 24.9,
    tallas: [35, 36, 37, 38],
    colores: [beige, negro, rojo],
    tipo: 'sandalia',
  },
  {
    id: 'deportivo-nube',
    nombre: 'Deportivo Nube',
    categoria: 'mujer',
    precio: 39.9,
    tallas: [35, 36, 37, 38, 39],
    colores: [rosado, blanco, negro],
    tipo: 'deportivo',
  },
  {
    id: 'botin-niebla',
    nombre: 'Botín Niebla',
    categoria: 'mujer',
    precio: 58.5,
    tallas: [36, 37, 38, 39],
    colores: [cafe, negro],
    tipo: 'bota',
  },
  {
    id: 'mocasin-sereno',
    nombre: 'Mocasín Sereno',
    categoria: 'mujer',
    precio: 36,
    tallas: [35, 37, 38, 39],
    colores: [rojo, beige, negro],
    tipo: 'formal',
  },
  {
    id: 'deportivo-saltarin',
    nombre: 'Deportivo Saltarín',
    categoria: 'nino',
    precio: 27.5,
    tallas: [26, 27, 28, 29, 30, 31],
    colores: [rojo, azul, verde],
    tipo: 'deportivo',
  },
  {
    id: 'escolar-recreo',
    nombre: 'Zapato Escolar Recreo',
    categoria: 'nino',
    precio: 31.9,
    tallas: [28, 29, 30, 31, 32, 33],
    colores: [negro, cafe],
    tipo: 'formal',
  },
  {
    id: 'sandalia-chapoteo',
    nombre: 'Sandalia Chapoteo',
    categoria: 'nino',
    precio: 16.9,
    tallas: [24, 25, 26, 27, 28],
    colores: [azul, rosado, verde],
    tipo: 'sandalia',
  },
];
