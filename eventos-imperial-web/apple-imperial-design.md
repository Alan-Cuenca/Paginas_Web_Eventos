# Manual de Diseño & Estilo: Recepciones & Eventos Imperial
> *Inspiración: Apple Human Interface Guidelines (HIG) + Editorial Minimalista Anthropic Clean*

Este manual define los principios visuales, cromáticos, tipográficos y de interacción para la presencia digital de **Recepciones & Eventos Imperial**. Todo componente, vista y elemento interactivo debe ceñirse con máxima fidelidad a estos estándares.

---

## 1. Filosofía de Diseño: "Anthropic Clean + Luxury"

El diseño se fundamenta en un minimalismo editorial de alta gama. Rechaza el exceso ornamental y confía en el espacio negativo masivo, proporciones arquitectónicas áureas y una paleta sobria denominada **"Lavanda Imperial"**.

- **Atmósfera:** Serena, exclusiva, atemporal, regia y refinada.
- **Enfoque Comercial:** Bodas de Ensueño, Fiestas de 15 Años (Quinceañeras) de Gala y Recepciones Corporativas de Alto Nivel.
- **Jerarquía:** El contenido respira; la fotografía de alta calidad y la tipografía monumental son las protagonistas.

---

## 2. Paleta Cromática: "Lavanda Imperial"

| Rol de Color | Código Hex | Descripción de Uso | Token / Clase sugerida |
| :--- | :--- | :--- | :--- |
| **Fondo Base (Perla Imperial)** | `#F4F2F7` | Fondo principal de la aplicación. Otorga calidez y pureza perlada. | `bg-[#F4F2F7]` |
| **Superficie de Tarjetas (Blanco Puro)** | `#FFFFFF` | Contenedores de contenido, tarjetas Bento y modales. | `bg-white` |
| **Bordes Sutiles (Malva Suave)** | `#D3CDD9` | Delimitadores casi etéreos para tarjetas y divisiones. | `border-[#D3CDD9]` |
| **Acentos Reales (Ciruela Grisáceo)** | `#685A7C` | Botones de acción principal (CTA), insignias exclusivas e indicadores activos. | `bg-[#685A7C]`, `text-[#685A7C]` |
| **Ciruela Hover / Deep** | `#554866` | Estado activo/hover para interacción de acentos reales. | `hover:bg-[#554866]` |
| **Texto Principal (Índigo Oscuro)** | `#2B2338` | Títulos, párrafos destacados y texto de alto contraste. **Prohibido el uso de negro puro (`#000000`).** | `text-[#2B2338]` |
| **Texto Secundario (Malva Ceniza)** | `#7A7085` | Subtítulos, metadatos, detalles de soporte y navegación secundaria. | `text-[#7A7085]` |

---

## 3. Tipografía

La composición tipográfica combina la sofisticación clásica de las publicaciones editoriales europeas con la precisión técnica moderna.

- **Títulos y H1/H2/H3 (Serif Monumental):**
  - Familias: `Cormorant Garamond`, `Playfair Display`, serif.
  - Tracking sutil o normal (`tracking-tight` en títulos muy grandes), interlineado generoso (`leading-[1.1]`).
  - Transmite solemnidad, herencia y romanticismo de alta costura.
- **UI, Botones, Navegación y Párrafos (Sans-Serif de Precisión):**
  - Familias: `Inter`, system-ui, -apple-system, sans-serif.
  - Tracking ligero en versalitas/etiquetas (`tracking-wider` en mayúsculas pequeñas), pesos de fuente de 400 (regular) y 500 (medium).

---

## 4. Materiales & Efectos (Apple HIG)

- **Liquid Glass Header (Navegación Flotante):**
  - Contenedor suspendido en la parte superior con márgenes laterales y bordes redondeados (`rounded-full` o `rounded-2xl`).
  - Acabado: `backdrop-blur-xl bg-white/60 border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]`.
  - Comportamiento flotante que no invade el contenido sino que lo tamiza con elegancia translúcida.

---

## 5. Geometría y Físicas

- **Radios Amplios (Curvaturas Orgánicas):**
  - Las tarjetas principales y bento boxes deben usar `rounded-3xl` (24px a 32px), creando superficies táctiles agradables y ergonómicas.
- **Sombras Difuminadas Tintadas de Malva:**
  - `shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)]`
  - Sombras nunca grises ni duras: siempre dispersas y sutilmente entintadas en el tono ciruela/malva para fundirse armoniosamente con el fondo Perla.
- **Físicas Tipo Resorte (Spring Animations):**
  - Transiciones suaves y naturales: `duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`.
  - Efectos hover en tarjetas: escalado sutil de imágenes internas (`group-hover:scale-105`), elevación ligera de tarjeta y transición cromática imperceptible.

---

## 6. Arquitectura de Componentes & Enlaces

- **Header:** Barra de navegación Liquid Glass flotante con isotipo imperial, enlaces a secciones clave y acceso discreto al ecosistema.
- **Hero:** Portada inmersiva con espacio negativo masivo (`py-28` a `py-36`), encabezado serif con la promesa de marca: *"Recepciones Inolvidables y Bodas de Ensueño"*, y botón de llamada a la acción Ciruela (`#685A7C`).
- **PaquetesBento:** Cuadrícula Bento asimétrica destacando los paquetes estelares:
  - *Paquete Boda Oro*: Celebración cumbre, banquete de gala, iluminación arquitectónica.
  - *15 Años Diamante*: Entrada triunfal, ambientación inmersiva, producción de ensueño.
  - *Recepciones Corporativas Gala*: Protocolo ejecutivo, acústica premium y networking exclusivo.
- **Puente al SaaS EVENTRA:**
  - Enlace de texto hiper-discreto, sobrio y elegante: `"Portal de Clientes / Staff"`.
  - Destino estricto: `<a href="http://localhost:5173/portal/eventos-imperial/login">`.
  - Sin formularios ni modales de autenticación internos en esta landing pública.
- **Footer:** Cierre ultra-minimalista, con derechos reservados, enlaces de cortesía y acceso alterno al portal de clientes.

