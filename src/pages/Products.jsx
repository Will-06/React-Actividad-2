// pages/Products.jsx
import React from 'react';
import ProductList from '../components/ProductList/ProductList';

const Products = ({ carrito, setCarrito }) => {
  return <ProductList carrito={carrito} setCarrito={setCarrito} />;
};

export default Products;
