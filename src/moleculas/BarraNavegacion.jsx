import Logo from '../atomicos/Logo.jsx'
import BotonSuper from '../atomicos/BotonSuper.jsx'
import { Lista, ItemLista } from '../atomicos/Lista.jsx'
import './BarraNavegacion.css'

// Barra superior con navegacion principal.
function BarraNavegacion({ elementos, idActivo, accionPrincipal }) {
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
    <header className="barra">
      <nav className="barra__nav" aria-label="Principal">
        {/* Logo principal */}
        <Logo enlace="#inicio" />
        {/* Lista de navegacion */}
        <Lista className="barra__lista">
          {elementos.map(renderizarElementoNavegacion)}
        </Lista>
        {/* CTA principal */}
        <BotonSuper
          enlace={accionPrincipal.enlace}
          clase="barra__cta"
          mostrarIcono={false}
        >
          {accionPrincipal.etiqueta}
        </BotonSuper>
      </nav>
    </header>
  )
}

export default BarraNavegacion
