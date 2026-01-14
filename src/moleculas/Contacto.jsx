import { useState } from 'react'
import CampoInput from '../atomicos/CampoInput.jsx'
import CampoTextarea from '../atomicos/CampoTextarea.jsx'
import BotonSuper from '../atomicos/BotonSuper.jsx'
import { Lista, ItemLista } from '../atomicos/Lista.jsx'
import './Contacto.css'

// Estado inicial del formulario.
const estadoInicial = {
  nombre: '',
  email: '',
  mensaje: '',
}

// Seccion de contacto con formulario controlado.
function Contacto() {
  // Estado del formulario y feedback de envio.
  const [datosFormulario, establecerDatosFormulario] = useState(estadoInicial)
  const [camposTocados, establecerCamposTocados] = useState({})
  const [estadoEnvio, establecerEstadoEnvio] = useState('idle')

  // Reglas de validacion basica.
  const errores = {
    nombre: datosFormulario.nombre.trim().length < 2,
    email: !/^\S+@\S+\.\S+$/.test(datosFormulario.email),
    mensaje: datosFormulario.mensaje.trim().length < 10,
  }

  // Determina si hay errores activos.
  const tieneErrores = Object.values(errores).some(Boolean)

  // Actualiza el estado al escribir en cualquier campo.
  function manejarCambio(evento) {
    const { name: nombreCampo, value: valorCampo } = evento.target
    establecerDatosFormulario(function actualizarDatos(anterior) {
      return { ...anterior, [nombreCampo]: valorCampo }
    })
    if (estadoEnvio !== 'idle') {
      establecerEstadoEnvio('idle')
    }
  }

  // Marca un campo como tocado para mostrar validacion.
  function marcarCampoTocado(nombreCampo) {
    establecerCamposTocados(function actualizarTocados(anterior) {
      return { ...anterior, [nombreCampo]: true }
    })
  }

  // Marca el campo nombre como tocado.
  function manejarBlurNombre() {
    marcarCampoTocado('nombre')
  }

  // Marca el campo email como tocado.
  function manejarBlurEmail() {
    marcarCampoTocado('email')
  }

  // Marca el campo mensaje como tocado.
  function manejarBlurMensaje() {
    marcarCampoTocado('mensaje')
  }

  // Simula finalizacion del envio.
  function finalizarEnvio() {
    establecerEstadoEnvio('success')
    establecerDatosFormulario(estadoInicial)
    establecerCamposTocados({})
  }

  // Maneja el envio del formulario.
  function manejarEnvio(evento) {
    evento.preventDefault()
    establecerCamposTocados({ nombre: true, email: true, mensaje: true })
    if (tieneErrores) {
      establecerEstadoEnvio('error')
      return
    }
    establecerEstadoEnvio('loading')
    setTimeout(finalizarEnvio, 900)
  }

  // Bandera de carga para bloquear el envio.
  const enviando = estadoEnvio === 'loading'

  return (
    <section id="contacto" className="contacto seccion">
      {/* Encabezado de la seccion */}
      <header className="contacto__encabezado" data-reveal>
        <h2 className="contacto__titulo">Hablemos de tu Proyecto</h2>
      </header>
      <form
        className="contacto__formulario"
        onSubmit={manejarEnvio}
        noValidate
        data-reveal
      >
        {/* Campos de nombre y email */}
        <fieldset className="contacto__grupo">
          <CampoInput
            id="nombre"
            name="nombre"
            etiqueta="Nombre"
            placeholder="Tu nombre"
            value={datosFormulario.nombre}
            onChange={manejarCambio}
            onBlur={manejarBlurNombre}
            invalid={camposTocados.nombre && errores.nombre}
            required
            autoComplete="name"
          />
          <CampoInput
            id="email"
            name="email"
            etiqueta="Email"
            type="email"
            placeholder="tu@email.com"
            value={datosFormulario.email}
            onChange={manejarCambio}
            onBlur={manejarBlurEmail}
            invalid={camposTocados.email && errores.email}
            required
            autoComplete="email"
          />
        </fieldset>
        {/* Campo de mensaje */}
        <CampoTextarea
          id="mensaje"
          name="mensaje"
          etiqueta="Mensaje"
          placeholder="Contanos que necesitas"
          value={datosFormulario.mensaje}
          onChange={manejarCambio}
          onBlur={manejarBlurMensaje}
          invalid={camposTocados.mensaje && errores.mensaje}
          required
          rows={5}
        />
        {/* Acciones del formulario */}
        <footer className="contacto__acciones">
          <BotonSuper tipo="submit" deshabilitado={enviando} mostrarIcono={false}>
            {enviando ? 'Enviando...' : 'Enviar'}
          </BotonSuper>
          <p
            className={`contacto__estado contacto__estado--${estadoEnvio}`}
            role="status"
          >
            {estadoEnvio === 'success' && 'Mensaje enviado. Te respondemos pronto.'}
            {estadoEnvio === 'error' && 'Revisa los campos antes de enviar.'}
          </p>
        </footer>
      </form>
      {/* Canales de contacto */}
      <aside className="contacto__canales" data-reveal>
        <Lista className="contacto__lista">
          <ItemLista>
            <a className="contacto__canal-link" href="mailto:info@tuempresa.com">
              <span className="contacto__icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4.5 6.8h15v10.4h-15V6.8zm0 0 7.5 6.2 7.5-6.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>info@tuempresa.com</span>
            </a>
          </ItemLista>
          <ItemLista>
            <a
              className="contacto__canal-link"
              href="https://wa.me/5491111111111"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contacto__icono" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M7 5.5h4l1 3-2 1a10 10 0 0 0 4.5 4.5l1-2 3 1v4c-5.8 0-10.5-4.7-10.5-10.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>WhatsApp</span>
            </a>
          </ItemLista>
        </Lista>
      </aside>
    </section>
  )
}

export default Contacto
