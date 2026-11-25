// El número se lee de la variable de entorno VITE_WHATSAPP_NUMBER (ver .env.example).
// Solo se conservan los dígitos, así que "+593 90..." también funciona.
export const numeroWhatsApp = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').replace(/\D/g, '');

export function enlaceWhatsApp(mensaje) {
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}
