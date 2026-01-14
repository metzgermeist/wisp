ESPECIFICACION DE REQUISITOS DE SOFTWARE (ERS)
Sitio Web Corporativo - Empresa de Desarrollo de Software

1. Introduccion
1.1 Proposito del documento
Este documento define los requisitos funcionales, no funcionales, tecnicos y visuales del sitio web corporativo de la empresa de desarrollo de software fundada por sus socios.
El ERS servira como:
Base para el desarrollo frontend y backend
Referencia para validacion del alcance
Documento guia para futuras ampliaciones

1.2 Alcance del sistema
El sistema consiste en un sitio web corporativo tipo landing page, cuyo objetivo principal es:
Presentar la empresa
Mostrar soluciones propias (productos)
Ofrecer desarrollo de proyectos a medida
Ofrecer servicios de marketing digital
Facilitar el contacto con potenciales clientes
El sistema no incluye autenticacion ni funcionalidades transaccionales en esta etapa.

1.3 Definiciones y abreviaturas
ERS: Especificacion de Requisitos de Software
SPA: Single Page Application
CTA: Call To Action

2. Descripcion General
2.1 Perspectiva del producto
El sitio sera un sistema independiente, accesible desde navegadores modernos y disenado como SPA, actuando como principal canal de presentacion comercial de la empresa.

2.2 Usuarios del sistema
Usuarios esperados:
Emprendedores
Comercios
PYMEs
Startups
Profesionales independientes
Caracteristicas:
Conocimientos tecnicos variables
Buscan claridad, confianza y contacto rapido

2.3 Restricciones
Sitio tipo landing
Sin autenticacion
Sin panel administrativo
Backend limitado a API de contacto
Arquitectura preparada para escalar

3. Arquitectura del Sistema
3.1 Arquitectura general
El sistema adoptara una arquitectura cliente-servidor desacoplada:
Frontend: React + JavaScript vanilla
Backend: API REST en C# (.NET)
Comunicacion mediante HTTP/HTTPS utilizando JSON.

3.2 Tecnologias
Frontend
React
JavaScript ES6+
HTML semantico
CSS con unidades relativas
Flexbox (exclusivo)
Backend
C#
ASP.NET Core
API REST
JSON

4. Modelo de Oferta
La empresa ofrecera:
Soluciones propias (productos)
Proyectos personalizados a medida
Servicios de marketing digital
Ambos deberan presentarse claramente diferenciados.

5. Requisitos Funcionales
RF-01 - Hero / Portada
El sistema debe mostrar una seccion inicial con:
Propuesta de valor clara
Ilustracion hero tecnologica
CTA principal

RF-02 - Soluciones Propias
El sistema debe mostrar soluciones propias como productos:
Sistema de gestion para financieras
Ecommerce customizable
Sistema de gestion para barberias
App para profesores y gimnasios
Cada solucion debe incluir:
Publico objetivo
Problema que resuelve
Beneficios
CTA de contacto

RF-03 - Proyectos a Medida
El sistema debe comunicar que la empresa:
Desarrolla software personalizado
Acompana todo el proceso
Se adapta a necesidades especificas

RF-04 - Marketing Digital
El sistema debe comunicar que la empresa:
Ofrece servicios de marketing digital
Integra estrategias con objetivos de negocio
Adapta el servicio al perfil del cliente

RF-05 - Sobre la Empresa
El sistema debe incluir una seccion institucional con:
Descripcion breve
Valores
Forma de trabajo

RF-06 - Contacto
El sistema debe permitir:
Envio de consultas mediante formulario
Feedback visual del envio
Confirmacion o error

RF-07 - Acceso rapido a WhatsApp
El sistema debe incluir:
Boton flotante de WhatsApp
Siempre visible
Acceso directo al contacto

6. Requisitos No Funcionales
RNF-01 - Usabilidad
Navegacion clara
Interfaz intuitiva
Lenguaje simple

RNF-02 - Performance
Carga rapida
Optimizacion de recursos
Lazy loading

RNF-03 - Compatibilidad
Navegadores modernos
Responsive design

RNF-04 - Accesibilidad
HTML semantico
Labels correctos
Contrastes adecuados

7. Requisitos Tecnicos Frontend
React + JavaScript vanilla
No TypeScript
No CSS Grid
Flexbox exclusivo
Unidades relativas (rem, em, %, vh, vw, clamp)
Inputs controlados
HTML semantico estricto
Animaciones por scroll, hover y click
Animaciones diferenciadas:
Desktop: mas ricas
Mobile: mas simples y fluidas

8. Requisitos Tecnicos Backend
API REST en C#
Validaciones del lado servidor
Manejo correcto de errores
Endpoint principal de contacto
Preparado para agregar base de datos y autenticacion

9. Requisitos Visuales y UX
Estilo moderno y tecnologico
Ilustracion hero como recurso central
Background con gradientes, glow y profundidad
Microinteracciones sin saturar
Enfoque premium y profesional
