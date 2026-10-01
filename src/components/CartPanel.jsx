// CartPanel.jsx
// Panel lateral con el resumen del carrito. Recibe la lista de
// productos agregados y una función para eliminarlos.
// Ejemplo principal de "mostrar un mensaje cuando el carrito
// esté vacío" (renderizado condicional).

function CartPanel({ abierto, carrito, onCerrar, onQuitar }) {
  if (!abierto) return null; // No se renderiza nada si está cerrado

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="cart-overlay" onClick={onCerrar}>
      <aside className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Tu carrito</h2>
          <button className="btn-close" onClick={onCerrar}>✕</button>
        </div>

        <div className="cart-body">
          {/* Renderizado condicional: carrito vacío vs con productos */}
          {carrito.length === 0 ? (
            <p className="cart-empty">Aún no has agregado productos.</p>
          ) : (
            carrito.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <p className="cart-item-name">{item.nombre}</p>
                  <p className="cart-item-qty">
                    {item.cantidad} × ${item.precio.toLocaleString('es-CL')}
                  </p>
                </div>
                <button className="btn-remove" onClick={() => onQuitar(item.id)}>
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <span>Total</span>
          <strong>${total.toLocaleString('es-CL')}</strong>
        </div>
      </aside>
    </div>
  );
}

export default CartPanel;
