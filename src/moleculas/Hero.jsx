import Boton from '../atomicos/Boton.jsx'
import BotonSuper from '../atomicos/BotonSuper.jsx'
import './Hero.css'

// Seccion principal con mensaje y CTA.
function SeccionHero({ imagen }) {
  return (
    <section id="inicio" className="hero seccion">
      {/* Columna principal de texto */}
      <article className="hero__contenido" data-reveal>
        {/* Texto de apoyo */}
        <p className="hero__eyebrow">Innovamos en</p>
        {/* Titulo principal */}
        <h1 className="hero__titulo">
          Software <span className="hero__titulo--resaltado">para tu Negocio</span>
        </h1>
        {/* Descripcion principal */}
        <p className="hero__texto">
          Soluciones a medida y productos propios que impulsan tu empresa.
        </p>
        {/* Llamadas a la accion */}
        <footer className="hero__ctas">
          <BotonSuper enlace="#soluciones">Ver Soluciones</BotonSuper>
          <Boton enlace="#proyectos" variante="ghost" tamano="lg">
            Proyectos a Medida
          </Boton>
        </footer>
      </article>
    </section>
  )
}

export default SeccionHero
