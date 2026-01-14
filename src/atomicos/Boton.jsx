import './Boton.css'

// Boton atomico con variantes visuales.
function Boton({
  children: contenido,
  href: enlaceHref,
  enlace: enlaceProp,
  onClick: alHacerClickOriginal,
  alHacerClick,
  type: tipoOriginal = 'button',
  tipo,
  variant: varianteOriginal,
  size: tamanoOriginal,
  variante: varianteEspanol,
  tamano: tamanoEspanol,
  className: claseOriginal = '',
  clase,
  disabled: deshabilitadoOriginal,
  deshabilitado,
  ...restoDeProps
}) {
  // Define el enlace si se renderiza como ancla.
  const enlace = enlaceProp || enlaceHref
  // Define el tipo del boton nativo.
  const tipoFinal = tipo || tipoOriginal
  // Define la variante visual a usar.
  const varianteFinal = varianteEspanol || varianteOriginal || 'primary'
  // Define el tamano visual a usar.
  const tamanoFinal = tamanoEspanol || tamanoOriginal || 'md'
  // Define la clase adicional del boton.
  const claseFinalBoton = clase || claseOriginal
  // Define el estado deshabilitado final.
  const deshabilitadoFinal =
    deshabilitado !== undefined ? deshabilitado : deshabilitadoOriginal
  // Define la accion de click final.
  const alHacerClickFinal = alHacerClick || alHacerClickOriginal
  // Construye la lista de clases.
  const clasesBoton = [
    'boton',
    `boton--${varianteFinal}`,
    `boton--${tamanoFinal}`,
    claseFinalBoton,
  ]
    .filter(Boolean)
    .join(' ')

  // Renderiza como enlace si hay href disponible.
  if (enlace) {
    return (
      <a className={clasesBoton} href={enlace} {...restoDeProps}>
        {/* Contenido del enlace */}
        {contenido}
      </a>
    )
  }

  // Renderiza como boton nativo cuando no hay enlace.
  return (
    <button
      className={clasesBoton}
      type={tipoFinal}
      onClick={alHacerClickFinal}
      disabled={deshabilitadoFinal}
      {...restoDeProps}
    >
      {/* Contenido del boton */}
      {contenido}
    </button>
  )
}

export default Boton
