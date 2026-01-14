import { Lista, ItemLista } from '../atomicos/Lista.jsx'
import TarjetaSolucion from './TarjetaSolucion.jsx'
import './Soluciones.css'

// Seccion con cards de soluciones.
function Soluciones({ soluciones }) {
  // Renderiza cada solucion con su tarjeta.
  function renderizarSolucion(solucion) {
    return (
      <ItemLista key={solucion.titulo} className="soluciones__item">
        {/* Card de solucion */}
        <TarjetaSolucion {...solucion} />
      </ItemLista>
    )
  }

  return (
    <section id="soluciones" className="soluciones seccion" data-reveal>
      <header className="soluciones__encabezado" data-reveal>
        {/* Encabezado con titulo y descripcion */}
        <h2 className="soluciones__titulo">Nuestras Soluciones</h2>
        <p className="soluciones__texto">Plataformas disenadas por nosotros.</p>
      </header>
      {/* Lista de tarjetas */}
      <Lista className="soluciones__lista">
        {soluciones.map(renderizarSolucion)}
      </Lista>
    </section>
  )
}

export default Soluciones
