import React from 'react';
import { Provider } from 'react-redux';
import store from './component/store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarScroller from './component/Navbar/Navbar';
import ProductList from './component/Product/ProductList';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './component/Product/ProductDetails';
import { ThemeProvider } from './context/themeContext';
import { LanguageProvider } from './context/languageContext';

 // nextjs , tailwind, mui, prisma - mongoose

 // reusable components - storybook - typescript - redux thunk - jest 
 
 // react native - for android and ios

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <NavbarScroller />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  );
}
