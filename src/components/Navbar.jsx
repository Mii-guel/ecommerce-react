// Navbar.jsx
// Barra de navegación. Recibe por props el total de productos en el
// carrito (derivado del estado del carrito en App.jsx) y una función
// para abrir/cerrar el panel del carrito.

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="logo">
          Byte<span className="text-accent">Vault</span>
        </a>

        {/* Botón del carrito: el número se recalcula cada vez que
            cambia el estado "carrito" en el componente padre (App) */}
        <button className="btn-cart" onClick={onCartClick}>
          🛒 Carrito
          <span className="cart-badge">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
