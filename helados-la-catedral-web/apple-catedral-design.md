# Manual de Diseño & Sistema UI/UX: Helados La Catedral
*Estándar de Calidad: Apple Human Interface Guidelines (HIG) × Editorial Minimalista Anthropic Clean*

---

## 1. Filosofía de Diseño
El sitio web independiente de **Helados La Catedral** rinde homenaje a más de 35 años de tradición ambateña iniciada por su fundador Don Segundo Oña ("El Marinero"). La arquitectura visual fusiona la pureza y el aire editorial del diseño **Anthropic Clean** con los materiales translúcidos y físicas orgánicas de **Apple HIG**, integrando armónicamente la paleta cromática extraída de su logotipo oficial.

---

## 2. Paleta Cromática & Identidad de Marca
- **Fondo Base del Entorno:** Off-White `#FAFAFA` (permite que los espacios respiren con amplitud y confort visual).
- **Tarjetas y Contenedores:** Blanco Puro `#FFFFFF` (`bg-white`) exclusivamente para elevar los módulos sobre el fondo con sutileza.
- **Acentos del Logotipo Oficial (Uso medido y equilibrado):**
  - **Magenta Vibrante (`#E32074`):** Acento primario para acciones destacadas, botón principal en el Hero y detalles de vitalidad.
  - **Morado Profundo (`#662D8F`):** Identidad corporativa, etiquetas de categoría "Tradición" y distinciones de alta jerarquía.
  - **Naranja Cálido (`#F58220`):** Energía frutal, etiquetas de "Nuevos y Especiales" y destellos secundarios.
- **Texto Principal:** Gris Carbón `#1F2937` (`text-gray-800` / `text-gray-900`) para legibilidad absoluta y contraste refinado.
- **Texto Secundario:** Gris Neutro `#6B7280` (`text-gray-500`).
- **Líneas y Bordes:** Translúcidos sutiles (`border-gray-200/60` o `border-gray-100`).

---

## 3. Jerarquía Tipográfica Dual
- **UI, Botones y Metadatos:** `Inter` (sans-serif geométrica de alta legibilidad, tracking fino `-0.01em`).
- **Títulos Históricos y Narrativa Editorial:** `Playfair Display` (Serif clásica, cálida y aristocrática para encabezados y relatos de la fundación).

---

## 4. Materiales & Superficies (Apple HIG)
- **Navegación Flotante "Liquid Glass":**
  ```css
  fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50
  ```
  Permite que las imágenes y la textura del contenido pasen de manera etérea bajo la barra de navegación sin perder legibilidad.

---

## 5. Geometría Orgánica & Bento Grid
- **Radios Pronunciados Continuos:** Se aplican curvaturas squircles generosas (`rounded-3xl` y `rounded-2xl`).
- **Composición Asimétrica (Bento Box):** El relato fundacional de Don Segundo Oña ("El Marinero") y la esquina patrimonial de Simón Bolívar y Juan Montalvo se estructura en un grid asimétrico, combinando fotografías emblemáticas y micro-módulos.

---

## 6. Sombras & Físicas (iOS Spring)
- **Difusión Ambiental:** Sombras ultra amplias y sutiles:
  ```css
  shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]
  ```
- **Física de Transición:**
  ```css
  duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
  ```
- **Interacción en Catálogo de Sabores:** Zoom sutil (`group-hover:scale-105`) al interactuar con cada sabor, sin botones de compra intrusivos.

---

## 7. Contexto Histórico Oficial de la Marca
- **Fundador:** Segundo Oña, cariñosamente apodado **"El Marinero"**.
- **Orígenes:** Inició hace más de 35 años con un coche prestado empujado con amor y esfuerzo por su esposa y suegro.
- **Sede Actual:** Esquina patrimonial de **Simón Bolívar y Juan Montalvo, Ambato, Ecuador**.
- **Sabores Tradicionales:** Mora, Coco y Taxo.
- **Nuevos y Especiales:** Maracuyá, Café, Ron Pasas y Guanábana.

---

## 8. Gobernanza y Conexión al SaaS
- **Aislamiento Total:** Prohibido importar o mezclar variables de EVENTRA.
- **Enlace Puente Discreto:** Enlace en el Footer como ancla nativa:
  ```html
  <a href="http://localhost:5173/portal/helados-la-catedral/login">Portal de Empleados</a>
  ```
  Estilizado en tono gris claro hiper-discreto, sin modales ni formularios de login en este frontend.
