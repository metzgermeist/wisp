import logoWisp from '../assets/img/ChatGPT Image 13 ene 2026, 23_21_15 (1).png'
import './Logo.css'

// Logo atomico con icono y texto.
function Logo({
  href: enlace = '#inicio',
  label: etiquetaIngles,
  etiqueta: etiquetaEspanol,
}) {
  // Define el texto accesible del logo.
  const etiqueta = etiquetaEspanol || etiquetaIngles || 'Wisp'
  return (
    <a className="logo" href={enlace} aria-label={etiqueta}>
      {/* Icono grafico del logo */}
      <span className="logo__icon" aria-hidden="true">
        <img className="logo__img" src={logoWisp} alt="" />
      </span>
      {/* Texto del logo */}
      <span className="logo__text">{etiqueta}</span>
    </a>
  )
}

export default Logo
