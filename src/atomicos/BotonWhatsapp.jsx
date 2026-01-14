import './BotonWhatsapp.css'

// Boton flotante de contacto con acceso rapido.
function BotonWhatsapp({
  href: enlaceWhatsappProp,
  enlace: enlaceWhatsappAlt,
  instagram: enlaceInstagramProp,
}) {
  const enlaceWhatsapp =
    enlaceWhatsappProp || enlaceWhatsappAlt || 'https://wa.me/5491111111111'
  const enlaceInstagram =
    enlaceInstagramProp || 'https://www.instagram.com/tuusuario'

  return (
    <div className="boton-contacto" aria-label="Contacto">
      <button className="boton-contacto__trigger" type="button" aria-label="Contacto">
        <svg viewBox="0 0 16 16" role="img" aria-hidden="true">
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
        </svg>
      </button>
      <a
        className="boton-contacto__item boton-contacto__item--whatsapp"
        href={enlaceWhatsapp}
        aria-label="WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
          <path
            d="M16 5.3c-5.9 0-10.7 4.4-10.7 9.8 0 1.7.5 3.4 1.5 4.8l-1 4.8 5-1.6c1.6.9 3.4 1.4 5.2 1.4 5.9 0 10.7-4.4 10.7-9.8S21.9 5.3 16 5.3zm5.4 13.7c-.2.5-1.1.9-1.5 1-.4.1-.8.1-1.3-.1-.3-.1-.8-.3-1.4-.6-2.4-1.1-4-3.4-4.1-3.6-.1-.2-.9-1.2-.9-2.4 0-1.2.6-1.8.9-2.1.2-.2.4-.2.6-.2h.4c.1 0 .3 0 .4.3.2.4.6 1.5.7 1.6.1.2.1.3 0 .5-.1.2-.2.3-.3.4l-.3.3c-.1.1-.2.2-.1.4.1.2.5 1 1.1 1.6.7.7 1.4 1 1.6 1.1.2.1.3 0 .4-.1l.5-.5c.2-.2.3-.2.5-.1.2.1 1.3.6 1.5.7.2.1.4.2.4.3.1.1.1.6-.1 1.1z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        className="boton-contacto__item boton-contacto__item--instagram"
        href={enlaceInstagram}
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path
            d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 2a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm4.2-2.7a1.1 1.1 0 1 1 0 2.2a1.1 1.1 0 0 1 0-2.2z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  )
}

export default BotonWhatsapp
