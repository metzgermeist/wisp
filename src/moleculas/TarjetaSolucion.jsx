import './TarjetaSolucion.css'

// Card con efecto 3D y accesos rapidos.
function TarjetaSolucion({
  titulo,
  descripcion,
  icono,
  etiquetaCta = 'Ver Mas',
  enlaceCta = '#contacto',
  enlaceInstagram = 'https://www.instagram.com',
  enlaceWhatsapp = 'https://wa.me/5491111111111',
  tono = 'blue',
}) {
  // Determina si el enlace es externo para abrir en nueva pestana.
  const esWhatsappExterno = !enlaceWhatsapp.startsWith('#')

  return (
    <article className="card3d-parent" data-reveal>
      {/* Contenedor principal con el tono seleccionado */}
      <section className={`card3d card3d--${tono}`}>
        <div className="card3d__inner">
          {/* Capas circulares con icono */}
          <header className="card3d__logo" aria-hidden="true">
            <span className="card3d__circle card3d__circle--1" />
            <span className="card3d__circle card3d__circle--2" />
            <span className="card3d__circle card3d__circle--3" />
            <span className="card3d__circle card3d__circle--4" />
            <span className="card3d__circle card3d__circle--5">
              <span className="card3d__icon">{icono}</span>
            </span>
          </header>
          {/* Capa de vidrio */}
          <span className="card3d__glass" aria-hidden="true" />
          {/* Contenido principal */}
          <section className="card3d__content">
            <span className="card3d__title">{titulo}</span>
            <span className="card3d__text">{descripcion}</span>
          </section>
          {/* Acciones inferiores */}
          <footer className="card3d__bottom">
            {/* Accesos rapidos a redes */}
            <nav className="card3d__social" aria-label="Redes">
              <a
                className="card3d__social-button card3d__social-button--1"
                href={enlaceInstagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 30 30" className="card3d__svg" aria-hidden="true">
                  <path d="M9.998 3C6.139 3 3 6.142 3 10.002v10c0 3.86 3.142 7 7.002 7h10c3.86 0 7-3.142 7-7v-10c0-3.86-3.142-6.998-7.002-6.998H9.998zM22 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-7 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                </svg>
              </a>
              <a
                className="card3d__social-button card3d__social-button--2"
                href={enlaceWhatsapp}
                target={esWhatsappExterno ? '_blank' : undefined}
                rel={esWhatsappExterno ? 'noreferrer' : undefined}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 32 32" className="card3d__svg" aria-hidden="true">
                  <path d="M16 5.3c-5.9 0-10.7 4.4-10.7 9.8 0 1.7.5 3.4 1.5 4.8l-1 4.8 5-1.6c1.6.9 3.4 1.4 5.2 1.4 5.9 0 10.7-4.4 10.7-9.8S21.9 5.3 16 5.3zm5.4 13.7c-.2.5-1.1.9-1.5 1-.4.1-.8.1-1.3-.1-.3-.1-.8-.3-1.4-.6-2.4-1.1-4-3.4-4.1-3.6-.1-.2-.9-1.2-.9-2.4 0-1.2.6-1.8.9-2.1.2-.2.4-.2.6-.2h.4c.1 0 .3 0 .4.3.2.4.6 1.5.7 1.6.1.2.1.3 0 .5-.1.2-.2.3-.3.4l-.3.3c-.1.1-.2.2-.1.4.1.2.5 1 1.1 1.6.7.7 1.4 1 1.6 1.1.2.1.3 0 .4-.1l.5-.5c.2-.2.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.4.2.4.3.1.1.1.6-.1 1.1z" />
                </svg>
              </a>
            </nav>
            {/* CTA principal de la tarjeta */}
            <a className="card3d__more" href={enlaceCta}>
              <span className="card3d__more-button">{etiquetaCta}</span>
              <svg className="card3d__more-icon" viewBox="0 0 24 24">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </footer>
        </div>
      </section>
    </article>
  )
}

export default TarjetaSolucion
