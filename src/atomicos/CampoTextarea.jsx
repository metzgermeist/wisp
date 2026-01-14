import './CampoTextarea.css'

// Campo de texto largo con etiqueta accesible.
function CampoTextarea({
  id,
  label: etiquetaIngles,
  etiqueta: etiquetaEspanol,
  name: nombre,
  value: valor,
  onChange: alCambiar,
  onBlur: alPerderFoco,
  placeholder: marcador,
  required: requerido = false,
  invalid: esInvalido = false,
  rows: filas = 4,
}) {
  // Define la etiqueta visible del campo.
  const etiqueta = etiquetaEspanol || etiquetaIngles
  return (
    <label className="campo campo--textarea" htmlFor={id}>
      {/* Texto de la etiqueta */}
      <span className="campo__label">{etiqueta}</span>
      <textarea
        className="campo__control campo__control--textarea"
        id={id}
        name={nombre}
        value={valor}
        onChange={alCambiar}
        onBlur={alPerderFoco}
        placeholder={marcador}
        required={requerido}
        rows={filas}
        aria-invalid={esInvalido}
      />
    </label>
  )
}

export default CampoTextarea
