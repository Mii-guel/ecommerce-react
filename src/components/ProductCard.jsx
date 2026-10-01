// ProductCard.jsx
// Tarjeta individual de producto. No maneja estado propio: recibe
// todo por props desde App.jsx (patrón "componente controlado").
// El botón "Agregar"/"En el carrito" es el ejemplo principal de
// renderizado condicional ligado al estado del carrito.

function ProductCard({ producto, enCarrito, onToggleCarrito }) {
  return (
    <article className="product-card">
      <div className="product-art">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="product-body">
        <p className="product-platform">{producto.plataforma}</p>
        <h3 className="product-name">{producto.nombre}</h3>
        <p className="product-desc">{producto.descripcion}</p>
        <div className="product-footer">
          <span className="product-price">
            ${producto.precio.toLocaleString('es-CL')}
          </span>

          {/* Renderizado condicional: el texto, color y acción del
              botón cambian según si el producto ya está en el carrito. */}
          <button
            className={`btn-add ${enCarrito ? 'btn-added' : ''}`}
            onClick={() => onToggleCarrito(producto)}
          >
            {enCarrito ? '✓ En el carrito' : 'Agregar'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
