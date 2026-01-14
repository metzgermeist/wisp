import './BotonSuper.css'

// Boton destacado con borde animado.
function BotonSuper({
  children: contenido,
  label: etiquetaIngles,
  etiqueta: etiquetaEspanol,
  href: enlaceHref,
  enlace: enlaceProp,
  onClick: alHacerClickOriginal,
  alHacerClick,
  type: tipoOriginal = 'button',
  tipo,
  className: claseOriginal = '',
  clase,
  disabled: deshabilitadoOriginal = false,
  deshabilitado,
  showIcon: mostrarIconoIngles,
  mostrarIcono: mostrarIconoEspanol,
  ...restoDeProps
}) {
  // Define el texto principal del boton.
  const etiqueta = etiquetaEspanol || etiquetaIngles || 'Lanzar Ahora'
  // Define el enlace si se renderiza como ancla.
  const enlace = enlaceProp || enlaceHref
  // Define el tipo del boton cuando es elemento button.
  const tipoFinal = tipo || tipoOriginal
  // Define la clase final del boton.
  const claseFinalBoton = clase || claseOriginal
  // Define el estado deshabilitado en base a props compatibles.
  const deshabilitadoFinal =
    deshabilitado !== undefined ? deshabilitado : deshabilitadoOriginal
  // Define la accion de click final.
  const alHacerClickFinal = alHacerClick || alHacerClickOriginal
  // Define el contenido visible.
  const contenidoFinal = contenido || etiqueta
  // Define si se muestra el icono decorativo.
  const mostrarIcono = mostrarIconoEspanol ?? mostrarIconoIngles ?? true
  // Construye las clases del boton.
  const clasesBoton = ['boton-super', claseFinalBoton].filter(Boolean).join(' ')

  // Renderiza como enlace si hay href disponible.
  if (enlace) {
    return (
      <a className={clasesBoton} href={enlace} {...restoDeProps}>
        {/* Texto del boton */}
        <span className="boton-super__texto">{contenidoFinal}</span>
        {/* Icono opcional */}
        {mostrarIcono ? (
          <span className="boton-super__icono" aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24" className="boton-super__flecha">
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </span>
        ) : null}
      </a>
    )
  }

  // Renderiza como boton nativo si no hay enlace.
  return (
    <button
      className={clasesBoton}
      type={tipoFinal}
      onClick={alHacerClickFinal}
      disabled={deshabilitadoFinal}
      {...restoDeProps}
    >
      {/* Texto del boton */}
      <span className="boton-super__texto">{contenidoFinal}</span>
      {/* Icono opcional */}
      {mostrarIcono ? (
        <span className="boton-super__icono" aria-hidden="true">
          <svg fill="none" viewBox="0 0 24 24" className="boton-super__flecha">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </span>
      ) : null}
    </button>
  )
}

export default BotonSuper
