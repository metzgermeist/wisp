BACKLOG FRONTEND - VERSION FINAL CONSOLIDADA

Lineamientos tecnicos obligatorios (GLOBAL / TRANSVERSAL)
Estos lineamientos aplican a TODAS las historias del backlog
LT-FE-01 - Stack frontend
React
JavaScript vanilla (ES6+)
No TypeScript
No frameworks adicionales
No librerias de animacion pesadas

LT-FE-02 - HTML semantico estricto
Uso obligatorio de etiquetas semanticas:
header, nav, main, section, article, aside, footer, form, label, input, button
Prohibido:
divs innecesarios
estructuras no semanticas

LT-FE-03 - CSS con unidades relativas
Uso exclusivo de:
rem, em
%
vh, vw
clamp()
Prohibido:
px

LT-FE-04 - Layout con Flexbox
Todo el layout debe realizarse con Flexbox
Prohibido usar CSS Grid
Estructuras flexibles y adaptables

LT-FE-05 - Responsive first
Mobile-first
Desktop como mejora progresiva
Breakpoints con unidades relativas

LT-FE-06 - Interactividad y animaciones
Efectos al:
- scroll
- hover
- click
Animaciones suaves, no invasivas
Priorizando performance y legibilidad

LT-FE-07 - Arquitectura modular (Atomic Design)
Estructura obligatoria:
- src/atomicos (botones, listas, inputs)
- src/moleculas (menus, cards, bloques compuestos)
- src/paginas (composicion de la UI)
Cada componente debe tener su Archivo.jsx y su Archivo.css
Composicion por props para inyeccion de dependencias y bajo acoplamiento

EPIC 1 - Base del Sitio
US-FE-01 - Layout semantico principal
Criterios de aceptacion:
Estructura 100% semantica
Layout realizado solo con Flexbox
Scroll natural y fluido

US-FE-02 - Header y navegacion interactiva
Criterios de aceptacion:
Header fijo
Estados activos segun scroll
Animaciones suaves
Responsive con comportamiento diferenciado mobile / desktop

EPIC 2 - Hero Section
US-FE-03 - Hero visual interactivo
Criterios de aceptacion:
Ilustracion hero integrada
Efectos de entrada al scroll
Parallax leve en desktop
Animaciones reducidas y amigables en mobile

US-FE-04 - CTA con feedback visual
Criterios de aceptacion:
Hover, focus y click
Animacion clara sin distraccion
Accesibilidad garantizada

EPIC 3 - Soluciones Propias
US-FE-05 - Cards interactivas
Criterios de aceptacion:
Animacion al entrar en viewport
Hover con elevacion / glow
En mobile: animacion mas simple

US-FE-06 a US-FE-09 - Detalle de soluciones
Criterios de aceptacion comunes:
Transiciones suaves
CTA claro
Scroll animations diferenciadas por dispositivo

EPIC 4 - Proyectos a Medida
US-FE-10 - Seccion proyectos personalizados
Criterios de aceptacion:
Animacion leve al aparecer
Texto claro y directo
Sin saturar efectos

EPIC 5 - Sobre Nosotros
US-FE-11 - Seccion institucional animada
Criterios de aceptacion:
Entrada progresiva al scroll
Diseno limpio
Jerarquia clara

EPIC 6 - Contacto
US-FE-12 - Formulario con controles de inputs
Como usuario
quiero recibir feedback inmediato
para saber si estoy completando bien el formulario
Criterios de aceptacion:
Inputs controlados en React
Estados visuales:
- focus
- valid
- invalid
Validaciones frontend basicas
Preparado para validacion backend futura

US-FE-13 - Estados de envio
Criterios de aceptacion:
Loader visual
Mensajes claros de exito / error
Transiciones suaves

EPIC 7 - WhatsApp y Accesos Rapidos
US-FE-14 - Boton flotante de WhatsApp
Como usuario
quiero contactar rapidamente
para no perder tiempo
Criterios de aceptacion:
Boton flotante fijo
Siempre visible
No obstruye contenido
Animacion sutil
Link directo a WhatsApp

EPIC 8 - Animaciones por Scroll
US-FE-15 - Scroll effects desktop
Criterios de aceptacion:
Efectos mas ricos en desktop
Parallax leve
Fade / translate suaves

US-FE-16 - Scroll effects mobile
Criterios de aceptacion:
Animaciones simplificadas
Prioridad a fluidez
Evitar sobrecarga visual

EPIC 9 - Performance y Calidad
US-FE-17 - Optimizacion frontend
Criterios de aceptacion:
Lazy loading
Imagenes WebP
Animaciones GPU-friendly

US-FE-18 - Accesibilidad base
Criterios de aceptacion:
Navegacion por teclado
Labels correctos
Contrastes adecuados
