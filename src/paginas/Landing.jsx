import { useEffect, useState } from 'react'
import BarraNavegacion from '../moleculas/BarraNavegacion.jsx'
import SeccionHero from '../moleculas/Hero.jsx'
import Soluciones from '../moleculas/Soluciones.jsx'
import Proyectos from '../moleculas/Proyectos.jsx'
import SobreNosotros from '../moleculas/SobreNosotros.jsx'
import Contacto from '../moleculas/Contacto.jsx'
import BotonWhatsapp from '../atomicos/BotonWhatsapp.jsx'
import imagenHero from '../assets/img/hero.png'
import imagenNosotros from '../assets/img/nosotros.png'
import './Landing.css'

// Datos de navegacion principal.
const elementosNavegacion = [
  { id: 'soluciones', etiqueta: 'Soluciones', tieneDesplegable: false },
  { id: 'proyectos', etiqueta: 'Proyectos a Medida' },
  { id: 'nosotros', etiqueta: 'Nosotros' },
  { id: 'contacto', etiqueta: 'Contacto' },
]

// Datos de soluciones destacadas.
const solucionesPropias = [
  {
    titulo: 'Sistema para Financieras',
    descripcion: 'Gestion de prestamos y cobros.',
    etiquetaCta: 'Ver Mas',
    tono: 'blue',
    icono: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path
          d="M4 10.5h16v7.2c0 .9-.7 1.6-1.6 1.6H5.6c-.9 0-1.6-.7-1.6-1.6v-7.2zM4.8 8.2 12 4l7.2 4.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    titulo: 'Ecommerce Personalizable',
    descripcion: 'Tu tienda online a medida.',
    etiquetaCta: 'Ver Mas',
    tono: 'violet',
    icono: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path
          d="M6 9h12l-1.2 7.2c-.1.5-.6.8-1.1.8H8.3c-.5 0-1-.3-1.1-.8L6 9zM9 9l.8-3.2h4.4L15 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    titulo: 'Gestion para Barberias',
    descripcion: 'Agenda y clientes en orden.',
    etiquetaCta: 'Ver Mas',
    tono: 'coral',
    icono: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path
          d="M6.5 7.5 12 3l5.5 4.5M7 9v8.5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5V9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    titulo: 'App para Gimnasios',
    descripcion: 'Control de rutinas y alumnos.',
    etiquetaCta: 'Ver Mas',
    tono: 'blue',
    icono: (
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path
          d="M4.5 12h15M7 9.5V6.8M17 9.5V6.8M7 14.5v2.7M17 14.5v2.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const totalEstrellas = 24

function numeroAleatorio(minimo, maximo) {
  return Math.random() * (maximo - minimo) + minimo
}

const estrellas = Array.from({ length: totalEstrellas }, (_, indice) => {
  const cola = numeroAleatorio(5, 7.5).toFixed(2)
  const offset = numeroAleatorio(0, 100).toFixed(2)
  const duracion = numeroAleatorio(6, 12).toFixed(2)
  const demora = numeroAleatorio(0, 10).toFixed(2)

  return {
    id: indice,
    estilos: {
      '--star-tail-length': `${cola}em`,
      '--top-offset': `${offset}%`,
      '--fall-duration': `${duracion}s`,
      '--fall-delay': `${demora}s`,
    },
  }
})

// Pagina principal con efectos de scroll.
function PaginaLanding() {
  // Estado para marcar el enlace activo en la barra.
  const [idActivo, establecerIdActivo] = useState('')

  // Obtiene las secciones existentes segun el menu.
  function obtenerSeccionesDesdeNavegacion() {
    const secciones = []
    for (let indice = 0; indice < elementosNavegacion.length; indice += 1) {
      const seccion = document.getElementById(elementosNavegacion[indice].id)
      if (seccion) {
        secciones.push(seccion)
      }
    }
    return secciones
  }

  // Ordena intersecciones por visibilidad.
  function ordenarPorVisibilidad(a, b) {
    return b.intersectionRatio - a.intersectionRatio
  }

  // Actualiza el estado activo al hacer scroll.
  function manejarInterseccionesNavegacion(entradas) {
    const visibles = []
    for (let indice = 0; indice < entradas.length; indice += 1) {
      if (entradas[indice].isIntersecting) {
        visibles.push(entradas[indice])
      }
    }
    if (!visibles.length) {
      return
    }
    visibles.sort(ordenarPorVisibilidad)
    establecerIdActivo(visibles[0].target.id)
  }

  // Activa el observador de navegacion por scroll.
  function activarNavegacionPorScroll() {
    const secciones = obtenerSeccionesDesdeNavegacion()
    if (!secciones.length) {
      return undefined
    }

    const observador = new IntersectionObserver(manejarInterseccionesNavegacion, {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: '-20% 0% -50% 0%',
    })

    for (let indice = 0; indice < secciones.length; indice += 1) {
      observador.observe(secciones[indice])
    }

    // Limpia el observador cuando se desmonta.
    return function limpiarObservador() {
      observador.disconnect()
    }
  }

  // Agrega clases de revelado por scroll.
  function manejarRevelado(entradas, observadorActual) {
    for (let indice = 0; indice < entradas.length; indice += 1) {
      const entrada = entradas[indice]
      if (entrada.isIntersecting) {
        entrada.target.classList.add('reveal-visible')
        observadorActual.unobserve(entrada.target)
      }
    }
  }

  // Activa el observador para animaciones de entrada.
  function activarReveladoPorScroll() {
    const elementosRevelado = document.querySelectorAll('[data-reveal]')
    if (!elementosRevelado.length) {
      return undefined
    }

    const observador = new IntersectionObserver(manejarRevelado, {
      threshold: 0.2,
    })

    for (let indice = 0; indice < elementosRevelado.length; indice += 1) {
      observador.observe(elementosRevelado[indice])
    }

    // Limpia el observador cuando se desmonta.
    return function limpiarObservador() {
      observador.disconnect()
    }
  }

  // Activa un parallax suave en la imagen del hero.
  function activarParallaxHero() {
    const mediosReducidos = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pantallaGrande = window.matchMedia('(min-width: 60rem)')
    let idAnimacion = null

    // Ajusta la variable CSS del parallax.
    function actualizarDesplazamientoHero() {
      if (mediosReducidos.matches || !pantallaGrande.matches) {
        document.documentElement.style.setProperty('--hero-shift', '0')
        return
      }
      const desplazamiento = Math.max(-1.2, Math.min(0, -(window.scrollY / 300)))
      document.documentElement.style.setProperty('--hero-shift', desplazamiento.toFixed(3))
    }

    // Agrupa el repaint en RAF para suavidad.
    function ejecutarAnimacion() {
      idAnimacion = null
      actualizarDesplazamientoHero()
    }

    // Evita ejecutar demasiados handlers.
    function manejarScroll() {
      if (idAnimacion) {
        return
      }
      idAnimacion = requestAnimationFrame(ejecutarAnimacion)
    }

    actualizarDesplazamientoHero()
    window.addEventListener('scroll', manejarScroll, { passive: true })
    window.addEventListener('resize', actualizarDesplazamientoHero)

    // Limpia listeners cuando se desmonta.
    return function limpiarEventos() {
      window.removeEventListener('scroll', manejarScroll)
      window.removeEventListener('resize', actualizarDesplazamientoHero)
      if (idAnimacion) {
        cancelAnimationFrame(idAnimacion)
      }
    }
  }

  // Activa observadores y efectos de scroll.
  useEffect(activarNavegacionPorScroll, [])
  useEffect(activarReveladoPorScroll, [])
  useEffect(activarParallaxHero, [])

  return (
    <>
      {/* Navegacion principal */}
      <BarraNavegacion
        elementos={elementosNavegacion}
        idActivo={idActivo}
        accionPrincipal={{ etiqueta: 'Contactanos', enlace: '#contacto' }}
      />
      <main className="landing">
        {/* Hero principal */}
        <SeccionHero imagen={imagenHero} />
        <div className="landing__fondo-soluciones">
          <div className="landing__fondo-soluciones-contenido">
            {/* Listado de soluciones */}
            <Soluciones soluciones={solucionesPropias} />
            {/* Proyectos a medida */}
            <Proyectos />
          </div>
        </div>
        <div className="landing__fondo-estrellas">
          <div className="stars" aria-hidden="true">
            {estrellas.map((estrella) => (
              <span key={estrella.id} className="star" style={estrella.estilos} />
            ))}
          </div>
          <div className="landing__fondo-contenido">
            {/* Seccion institucional */}
            <SobreNosotros imagen={imagenNosotros} />
            {/* Contacto */}
            <Contacto />
          </div>
        </div>
      </main>
      {/* Acceso directo a WhatsApp */}
      <BotonWhatsapp />
    </>
  )
}

export default PaginaLanding
