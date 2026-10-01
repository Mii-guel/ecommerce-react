// Hero.jsx
// Sección de presentación. Incluye un botón puramente interactivo
// que cambia de texto (e ícono) al hacer clic, usando su propio
// useState local — un ejemplo simple de estado para un elemento
// interactivo, tal como pide la actividad.

import { useState } from 'react';

function Hero({ onToggleOfertas, mostrandoOfertas }) {
  // Estado local: controla si el usuario ya "siguió" la tienda.
  // No afecta a ningún otro componente, es solo un ejemplo de
  // un botón que cambia de texto al hacer clic.
  const [siguiendo, setSiguiendo] = useState(false);

  return (
    <section id="inicio" className="hero">
      <p className="eyebrow">Nueva temporada — stock limitado</p>
      <h1>Inserta el cartucho. Empieza la partida.</h1>
      <p className="hero-text">
        Consolas, videojuegos físicos y digitales para todas las generaciones.
      </p>

      <div className="hero-actions">
        {/* Botón 1: alterna entre ver todo el catálogo u ofertas.
            Su texto y estilo dependen del estado "mostrandoOfertas"
            que vive en App.jsx (renderizado condicional). */}
        <button className="btn btn-primary" onClick={onToggleOfertas}>
          {mostrandoOfertas ? 'Ver catálogo completo' : 'Ver solo ofertas'}
        </button>

        {/* Botón 2: ejemplo simple de useState local, cambia de
            texto y estilo al hacer clic (sin afectar otros componentes). */}
        <button
          className={`btn btn-ghost ${siguiendo ? 'btn-following' : ''}`}
          onClick={() => setSiguiendo(!siguiendo)}
        >
          {siguiendo ? '✓ Siguiendo' : '+ Seguir tienda'}
        </button>
      </div>
    </section>
  );
}

export default Hero;
