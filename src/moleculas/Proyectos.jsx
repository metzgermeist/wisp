import BotonSuper from '../atomicos/BotonSuper.jsx'
import './Proyectos.css'

// Seccion de proyectos personalizados.
function Proyectos() {
  return (
    <section id="proyectos" className="proyectos seccion" data-reveal>
      {/* Contenido principal de proyectos */}
      {/* Titulo de la seccion */}
      <h2 className="proyectos__titulo">Proyectos a Medida</h2>
      {/* Descripcion */}
      <p className="proyectos__texto">
        Desarrollamos software a medida segun tus necesidades. Tambien ofrecemos
        marketing digital para potenciar tu lanzamiento.
      </p>
      {/* CTA principal */}
      <BotonSuper enlace="#contacto">Contanos tu Idea</BotonSuper>
    </section>
  )
}

export default Proyectos
