import './SobreNosotros.css'

// Seccion institucional con imagen.
function SobreNosotros({ imagen }) {
  return (
    <section id="nosotros" className="sobre seccion">
      {/* Columna de texto institucional */}
      <article className="sobre__contenido" data-reveal>
        {/* Titulo */}
        <h2 className="sobre__titulo">Sobre Nosotros</h2>
        {/* Mensajes institucionales */}
        <p className="sobre__texto">
          Desarrolladores con pasion por crear soluciones innovadoras. Trabajamos
          con equipos agiles, foco en resultados y acompanamiento continuo.
        </p>
        <p className="sobre__texto">
          Integramos tecnologia, producto y marketing digital para que tu empresa
          crezca con estrategia.
        </p>
      </article>
      {/* Imagen institucional */}
      <figure className="sobre__media" data-reveal>
        <img src={imagen} alt="Equipo trabajando en proyectos" loading="lazy" />
      </figure>
    </section>
  )
}

export default SobreNosotros
