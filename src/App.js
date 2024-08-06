// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './component/store/slices/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarScroller from './component/Navbar/Navbar';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register'; // Ensure the correct path
import ProductDetail from './component/Product/ProductDetails';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarScroller />
        <Routes>
          <Route path="/" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}
