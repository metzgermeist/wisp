import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Aplicacion from './App.jsx'

const tiempoMinimoSplash = 1600
const inicioCarga = performance.now()

const imagenesClave = [
  new URL('./assets/img/hero.png', import.meta.url).href,
  new URL('./assets/img/back.png', import.meta.url).href,
  new URL('./assets/img/nosotros.png', import.meta.url).href,
  new URL('./assets/img/robotwisp.png', import.meta.url).href,
]

function precargarImagen(src) {
  return new Promise((resolve) => {
    const imagen = new Image()
    imagen.onload = resolve
    imagen.onerror = resolve
    imagen.src = src
  })
}

function ocultarSplash() {
  const splash = document.getElementById('splash')
  if (!splash) {
    return
  }
  splash.classList.add('splash--oculto')
  document.body.classList.remove('splash-activo')
  splash.addEventListener(
    'transitionend',
    () => {
      splash.remove()
    },
    { once: true },
  )
  setTimeout(() => {
    if (document.body.contains(splash)) {
      splash.remove()
    }
  }, 1200)
}

Promise.all(imagenesClave.map(precargarImagen)).then(() => {
  const transcurrido = performance.now() - inicioCarga
  const espera = Math.max(0, tiempoMinimoSplash - transcurrido)
  setTimeout(ocultarSplash, espera)
})

// Punto de entrada de React.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Arbol principal de la aplicacion */}
    <Aplicacion />
  </StrictMode>,
)
