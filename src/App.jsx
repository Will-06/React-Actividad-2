// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products'; // ✅ Usa este si aquí usas ProductList internamente
import Footer from './components/Footer/Footer';
import { WarpBackground } from './components/magicui/warp-background';
import Cart from './components/Cart/Cart';

const App = () => {
  const [carrito, setCarrito] = useState([]); // ✅ Estado global del carrito

  return (
    <>
      <Navbar />
      <WarpBackground>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ✅ Pasa carrito y setCarrito como props */}
          <Route path="/productos" element={<Products carrito={carrito} setCarrito={setCarrito} />} />

          <Route path="/carrito" element={<Cart carrito={carrito} />} />
        </Routes>
      </WarpBackground>
      <Footer />
    </>
  );
};

export default App;
