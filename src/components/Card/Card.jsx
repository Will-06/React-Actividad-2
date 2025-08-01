import React from 'react';

import { AuroraText } from '../magicui/aurora-text';

const Card = ({ nombre, precio, imagen ,onAddToCart }) => {
  return (
    <div className="backdrop-blur-md bg-gray-200/30 dark:bg-gray-800/30 border border-gray-300/40 dark:border-gray-500/30 shadow-lg rounded-xl p-6 max-w-md mx-auto">
      <img
        src={imagen}
        alt={nombre}
        className="object-cover w-full h-64 rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{nombre}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Precio: ${precio}</p>
    
      <button className="px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-gray-900 dark:text-white font-semibold shadow-md border border-white/30 hover:bg-white/30 transition">
  <AuroraText><button onClick={onAddToCart}>Agregar al carrito</button></AuroraText>
</button>


     
    </div>
  );
};

export default Card;

