// App.jsx
// Componente raíz de la aplicación ByteVault (eCommerce en React).
// Aquí viven los estados principales (useState) y el efecto que
// simula la carga de datos desde una fuente externa (useEffect).

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import CartPanel from './components/CartPanel';
import './App.css';

function App() {
  /* ---------------------------------------------------------
     1. ESTADOS (useState)
     --------------------------------------------------------- */

  // Catálogo completo de productos. Empieza vacío: se llena
  // al terminar la carga simulada en el useEffect de abajo.
  const [productos, setProductos] = useState([]);

  // Estados auxiliares de la carga de datos.
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  // Carrito de compras: lista de productos agregados, cada uno
  // con su cantidad.
  const [carrito, setCarrito] = useState([]);

  // Controla si el panel del carrito está abierto o cerrado.
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // Controla si se está filtrando solo por ofertas (categoría "accion"
  // se usa aquí como ejemplo de "oferta" para simplificar la demo).
  const [mostrandoOfertas, setMostrandoOfertas] = useState(false);

  /* ---------------------------------------------------------
     2. EFECTOS (useEffect)
     Simula la carga de datos de productos desde una fuente
     externa (archivo JSON en /public/products.json, servido
     como si fuera una API). Se ejecuta una sola vez al montar
     el componente (dependencias: []).
     --------------------------------------------------------- */
  useEffect(() => {
    // Simulamos una pequeña latencia de red para que el estado
    // de "cargando" sea visible (como pide la pauta).
    const temporizador = setTimeout(() => {
      fetch('products.json')
        .then((respuesta) => {
          if (!respuesta.ok) {
            throw new Error(`Error HTTP ${respuesta.status}`);
          }
          return respuesta.json();
        })
        .then((datos) => {
          setProductos(datos);   // Actualiza el estado con los datos cargados
          setCargando(false);
        })
        .catch((err) => {
          console.error('Error al cargar productos:', err);
          setError(true);
          setCargando(false);
        });
    }, 600);

    // Limpieza: cancela el temporizador si el componente se
    // desmonta antes de que termine (buena práctica con useEffect).
    return () => clearTimeout(temporizador);
  }, []);

  /* ---------------------------------------------------------
     3. LÓGICA DEL CARRITO
     --------------------------------------------------------- */

  // Agrega o quita un producto del carrito (toggle). Si ya está,
  // lo elimina; si no está, lo agrega con cantidad 1.
  function manejarToggleCarrito(producto) {
    setCarrito((carritoActual) => {
      const yaExiste = carritoActual.some((item) => item.id === producto.id);

      if (yaExiste) {
        // Eliminar del carrito
        return carritoActual.filter((item) => item.id !== producto.id);
      }
      // Agregar al carrito
      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  }

  function quitarDelCarrito(idProducto) {
    setCarrito((carritoActual) => carritoActual.filter((item) => item.id !== idProducto));
  }

  // Lista de ids en el carrito — se usa para el renderizado
  // condicional del botón "Agregar" / "En el carrito" de cada tarjeta.
  const idsEnCarrito = carrito.map((item) => item.id);

  // Cantidad total de productos en el carrito (para el badge del navbar)
  const totalEnCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  /* ---------------------------------------------------------
     4. FILTRO DE OFERTAS (renderizado condicional de la lista)
     --------------------------------------------------------- */
  const productosFiltrados = mostrandoOfertas
    ? productos.filter((p) => p.categoria === 'accion')
    : productos;

  /* ---------------------------------------------------------
     5. RENDER
     --------------------------------------------------------- */
  return (
    <>
      <Navbar
        cartCount={totalEnCarrito}
        onCartClick={() => setCarritoAbierto(true)}
      />

      <Hero
        mostrandoOfertas={mostrandoOfertas}
        onToggleOfertas={() => setMostrandoOfertas(!mostrandoOfertas)}
      />

      <main className="container">
        <h2 className="section-title">
          {mostrandoOfertas ? 'Ofertas destacadas' : 'Catálogo completo'}
        </h2>

        <ProductList
          productos={productosFiltrados}
          cargando={cargando}
          error={error}
          idsEnCarrito={idsEnCarrito}
          onToggleCarrito={manejarToggleCarrito}
        />
      </main>

      <CartPanel
        abierto={carritoAbierto}
        carrito={carrito}
        onCerrar={() => setCarritoAbierto(false)}
        onQuitar={quitarDelCarrito}
      />

      <footer className="footer">
        <p>&copy; 2026 ByteVault. Proyecto educativo — Desarrollo Frontend I.</p>
      </footer>
    </>
  );
}

export default App;
