# Páginas Web de Eventos y Experiencias — EVENTRA Multi-Tenant Ecosystem

Repositorio centralizado con las aplicaciones web públicas y landing pages temáticas conectadas al ecosistema SaaS **EVENTRA**.

---

## 🏛️ Proyectos Incluidos

### 1. [Eventos Imperial Web (`eventos-imperial-web`)](./eventos-imperial-web/)
* **Identidad de Marca:** Recepciones de lujo, bodas de alta costura, gala y eventos corporativos de gran escala.
* **Estilo Visual:** *Liquid Glass*, tonos perla, malva y dorado champán, tipografía editorial con serifas clásicas y modales de conserjería flotante.
* **Puerto de Desarrollo:** `http://localhost:5175`
* **Integración SaaS:** Enlace directo de autoservicio hacia el portal de cliente EVENTRA (`/portal/eventos-imperial`).

### 2. [Helados La Catedral Web (`helados-la-catedral-web`)](./helados-la-catedral-web/)
* **Identidad de Marca:** Tradición colonial, calidez artesanal, heladería histórica y catering para eventos sociales y festivales.
* **Estilo Visual:** Tonos crema, beige y terracota, cuadrícula Bento interactiva de historia y catálogo dinámico de sabores artesanales.
* **Puerto de Desarrollo:** `http://localhost:5174`
* **Integración SaaS:** Enlace directo de autoservicio hacia el portal de cliente EVENTRA (`/portal/helados-la-catedral`).

---

## 🚀 Puesta en Marcha

Ambos proyectos están desarrollados con **React**, **Vite** y utilidades CSS modernas.

### Levantar Eventos Imperial Web
```bash
cd eventos-imperial-web
npm install
npm run dev
```
La aplicación iniciará en `http://localhost:5175`.

### Levantar Helados La Catedral Web
```bash
cd helados-la-catedral-web
npm install
npm run dev
```
La aplicación iniciará en `http://localhost:5174`.

### Compilación para Producción
```bash
npm --prefix eventos-imperial-web run build
npm --prefix helados-la-catedral-web run build
```

---

*© 2026 EVENTRA SaaS Platform — Ecosistema Multi-Tenant.*
