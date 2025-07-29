// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Footer from './components/Footer/Footer';
import { WarpBackground } from './components/magicui/warp-background';


 
const App = () => {
  return (
    <>
    
<Navbar />

    <WarpBackground> 

    <Routes>
<Route path='/'  element={<Home/>}/>
<Route path='/productos'  element={<Products/>}/>
</Routes>

     </WarpBackground>
      <Footer/>
</>

  );
};

export default App;
