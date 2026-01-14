import { useEffect, useRef, useState } from 'react'
import Logo from '../atomicos/Logo.jsx'
import BotonSuper from '../atomicos/BotonSuper.jsx'
import { Lista, ItemLista } from '../atomicos/Lista.jsx'
import './BarraNavegacion.css'

// Barra superior con navegacion principal.
function BarraNavegacion({ elementos, idActivo, accionPrincipal }) {
  const [menuAbierto, establecerMenuAbierto] = useState(false)
  const [menuEsMovil, establecerMenuEsMovil] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.matchMedia('(max-width: 50rem)').matches
  })
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  function cerrarMenu() {
    establecerMenuAbierto(false)
  }

  function alternarMenu() {
    establecerMenuAbierto((anterior) => !anterior)
  }

  useEffect(() => {
    document.body.classList.toggle('menu-abierto', menuAbierto)
    return () => {
      document.body.classList.remove('menu-abierto')
    }
  }, [menuAbierto])

  useEffect(() => {
    if (!menuAbierto) {
      return undefined
    }
    function manejarTecla(evento) {
      if (evento.key === 'Escape') {
        cerrarMenu()
      }
    }
    window.addEventListener('keydown', manejarTecla)
    return () => {
      window.removeEventListener('keydown', manejarTecla)
    }
  }, [menuAbierto])

  useEffect(() => {
    if (!menuAbierto) {
      return undefined
    }
    function manejarClickExterior(evento) {
      const panel = panelRef.current
      const toggle = toggleRef.current
      if (!panel || !toggle) {
        return
      }
      if (panel.contains(evento.target) || toggle.contains(evento.target)) {
        return
      }
      cerrarMenu()
    }
    document.addEventListener('pointerdown', manejarClickExterior)
    return () => {
      document.removeEventListener('pointerdown', manejarClickExterior)
    }
  }, [menuAbierto])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }
    const media = window.matchMedia('(max-width: 50rem)')
    function manejarCambio(evento) {
      establecerMenuEsMovil(evento.matches)
      if (!evento.matches) {
        cerrarMenu()
      }
    }
    manejarCambio(media)
    if (media.addEventListener) {
      media.addEventListener('change', manejarCambio)
      return () => media.removeEventListener('change', manejarCambio)
    }
    media.addListener(manejarCambio)
    return () => media.removeListener(manejarCambio)
  }, [])

  const clasesBarra = ['barra', menuAbierto ? 'barra--abierta' : '']
    .filter(Boolean)
    .join(' ')
  const idMenu = 'menu-principal'

  // Renderiza cada item del menu.
  function renderizarElementoNavegacion(elemento) {
    // Construye clases con estado activo.
    const clasesEnlace = [
      'barra__link',
      idActivo === elemento.id ? 'barra__link--active' : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <ItemLista key={elemento.id}>
        <a
          className={clasesEnlace}
          href={`#${elemento.id}`}
          aria-current={idActivo === elemento.id ? 'page' : undefined}
          onClick={cerrarMenu}
        >
          <span>{elemento.etiqueta}</span>
          {elemento.tieneDesplegable ? (
            <span className="barra__chevron" aria-hidden="true">
              v
            </span>
          ) : null}
        </a>
      </ItemLista>
    )
  }

  return (
    <header className={clasesBarra}>
      <nav className="barra__nav" aria-label="Principal">
        {/* Logo principal */}
        <Logo enlace="#inicio" />
        <button
          className="barra__toggle"
          type="button"
          aria-label={menuAbierto ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuAbierto}
          aria-controls={idMenu}
          onClick={alternarMenu}
          ref={toggleRef}
        >
          <span className="barra__toggle-line" />
          <span className="barra__toggle-line" />
          <span className="barra__toggle-line" />
        </button>
        <div
          className="barra__panel"
          id={idMenu}
          aria-hidden={menuEsMovil && !menuAbierto}
          ref={panelRef}
        >
          {/* Lista de navegacion */}
          <Lista className="barra__lista">
            {elementos.map(renderizarElementoNavegacion)}
          </Lista>
          {/* CTA principal */}
          <BotonSuper
            enlace={accionPrincipal.enlace}
            clase="barra__cta"
            mostrarIcono={false}
            onClick={cerrarMenu}
          >
            {accionPrincipal.etiqueta}
          </BotonSuper>
        </div>
      </nav>
    </header>
  )
}

export default BarraNavegacion
