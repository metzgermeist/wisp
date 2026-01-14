import './Lista.css'

// Lista atomica reutilizable.
function Lista({ children: contenido, className: clase = '', ...restoDeProps }) {
  // Construye las clases para la lista base.
  const clasesLista = ['lista', clase].filter(Boolean).join(' ')

  return (
    <ul className={clasesLista} {...restoDeProps}>
      {/* Elementos hijos de la lista */}
      {contenido}
    </ul>
  )
}

// Item atomico para listas.
function ItemLista({ children: contenido, className: clase = '', ...restoDeProps }) {
  // Construye las clases para el item de lista.
  const clasesItem = ['lista__item', clase].filter(Boolean).join(' ')

  return (
    <li className={clasesItem} {...restoDeProps}>
      {/* Contenido del item */}
      {contenido}
    </li>
  )
}

export { Lista, ItemLista }
