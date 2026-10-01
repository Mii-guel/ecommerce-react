import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: así el build funciona sin importar si la app
  // se publica en la raíz del dominio o en un subpath de GitHub Pages
  // (https://usuario.github.io/nombre-repo/).
  base: './',
  plugins: [react()],
})
