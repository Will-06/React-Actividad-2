// src/Cart/Cart.js
import React from 'react';


function Cart({ carrito }) {
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
