# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Splash screen (planned)

Se definio agregar un overlay previo al render de React para dar tiempo a cargar imagenes y animaciones.
La idea es mostrar un fondo negro con una imagen de robot y el mensaje:
"La siguiente evolucion de la tecnologia es... WISP".

Comportamiento esperado:
- El overlay vive en `index.html` y aparece antes de montar React.
- Se oculta cuando termine la carga de assets clave (ej: `hero.png`, `back.png`, `nosotros.png`),
  con un tiempo minimo visible (ej: 1.5s) para que el mensaje se lea.
- La imagen del robot se definira cuando este lista (ruta pendiente).

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
