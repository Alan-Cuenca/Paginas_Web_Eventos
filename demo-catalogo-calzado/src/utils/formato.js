const dolares = new Intl.NumberFormat('es-EC', { style: 'currency', currency: 'USD' });

export const formatoPrecio = (valor) => dolares.format(valor);
