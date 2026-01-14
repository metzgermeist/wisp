import './CampoInput.css'

// Campo de input con etiqueta accesible.
function CampoInput({
  id,
  label: etiquetaIngles,
  etiqueta: etiquetaEspanol,
  name: nombre,
  type: tipo = 'text',
  value: valor,
  onChange: alCambiar,
  onBlur: alPerderFoco,
  placeholder: marcador,
  required: requerido = false,
  autoComplete: autocompletar,
  invalid: esInvalido = false,
}) {
  // Define la etiqueta visible del campo.
  const etiqueta = etiquetaEspanol || etiquetaIngles
  return (
    <label className="campo" htmlFor={id}>
      {/* Texto de la etiqueta */}
      <span className="campo__label">{etiqueta}</span>
      <input
        className="campo__control"
        id={id}
        name={nombre}
        type={tipo}
        value={valor}
        onChange={alCambiar}
        onBlur={alPerderFoco}
        placeholder={marcador}
        required={requerido}
        autoComplete={autocompletar}
        aria-invalid={esInvalido}
      />
    </label>
  )
}

export default CampoInput
