# ByteVault — eCommerce con React

Proyecto de la Semana 8 — Desarrollo Frontend I (PFY2201).
Continuación del caso de estudio del eCommerce, migrado a React con
**useState**, **useEffect** y **renderizado condicional**.

## ¿Qué hace la app?

- Carga el catálogo de productos de forma simulada (`useEffect` +
  `fetch` a `public/products.json`, con un pequeño retraso artificial
  para que se note el estado de carga).
- Permite **agregar y quitar productos del carrito** (clic en cada
  tarjeta, o desde el panel del carrito).
- Muestra un **contador** con el total de productos en el carrito, en
  el ícono del navbar.
- **Renderizado condicional** en varios puntos:
  - Spinner mientras cargan los datos.
  - Mensaje de error si la carga falla.
  - Mensaje "Aún no has agregado productos" cuando el carrito está vacío.
  - El botón de cada producto cambia de "Agregar" a "✓ En el carrito".
  - Un botón alterna entre ver el catálogo completo o solo las ofertas.

## Estructura del proyecto

```
bytevault-react/
├─ public/
│  ├─ products.json        # Datos simulados del catálogo (useEffect los carga)
│  └─ *.svg                 # Imágenes de los productos
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ ProductList.jsx
│  │  ├─ ProductCard.jsx
│  │  └─ CartPanel.jsx
│  ├─ App.jsx               # Estados principales (useState) y useEffect
│  ├─ App.css
│  ├─ main.jsx
│  └─ index.css
├─ .github/workflows/deploy.yml   # Publica automáticamente en gh-pages
└─ vite.config.js
```

## Cómo correrlo en tu computador (opcional)

Si tienes Node.js instalado:

```bash
npm install
npm run dev
```

Y abre la URL que te indique la terminal (normalmente `http://localhost:5173`).

## Despliegue

Este proyecto se publica automáticamente en la rama `gh-pages` cada vez
que subes cambios a `main`, gracias al workflow en
`.github/workflows/deploy.yml`. No necesitas instalar Node.js ni
ejecutar ningún comando de build a mano: GitHub Actions lo hace por ti.
