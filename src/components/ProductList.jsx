// ProductList.jsx
// Muestra la grilla de productos. Gestiona tres renderizados
// condicionales según el estado de carga que viene desde App.jsx:
// cargando -> spinner | error -> mensaje | éxito -> grilla de tarjetas.

import ProductCard from './ProductCard';

function ProductList({ productos, cargando, error, idsEnCarrito, onToggleCarrito }) {

  // --- Renderizado condicional: estado de carga ---
  if (cargando) {
    return (
      <div className="estado-carga">
        <div className="spinner" />
        <p>Cargando catálogo…</p>
      </div>
    );
  }

  // --- Renderizado condicional: estado de error ---
  if (error) {
    return (
      <div className="estado-error">
        No pudimos cargar el catálogo de productos. Intenta recargar la página.
      </div>
    );
  }

  // --- Renderizado condicional: sin resultados (ej. filtro de ofertas) ---
  if (productos.length === 0) {
    return <p className="sin-resultados">No hay productos para mostrar.</p>;
  }

  // --- Caso normal: catálogo cargado con productos ---
  return (
    <div className="product-grid">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          enCarrito={idsEnCarrito.includes(producto.id)}
          onToggleCarrito={onToggleCarrito}
        />
      ))}
    </div>
  );
}

export default ProductList;
