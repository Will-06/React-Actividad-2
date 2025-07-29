import React from 'react'
import { useState , useEffect } from 'react'
import Card from '../Card/Card';
import './ProductList.css'

function ProductList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProductos(data);
        })
        .catch((error) => {
          console.error('Error al cargar productos:', error);
        });
    }, []);
  return (
    <div className="product-list">
      <h2 className="text-3xl font-bold text-white bg-gray-100/20 dark:bg-gray-800/20 backdrop-blur-md px-4 py-2 rounded-md mb-6">
  Lista de Productos
</h2>
      {productos.length === 0 ? (
        
        <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
      
        
      ) : (
        <div className="product-container">
    {productos.map((p) => (
  <Card
    key={p.id}
    nombre={p.title}
    precio={p.price}
    imagen={p.image} 
  />
))}

        </div>
      )}
    </div>
  )
}

export default ProductList