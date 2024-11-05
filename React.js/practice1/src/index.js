import React from 'react';
import ReactDOM from 'react-dom/client';
import {Footer, Navbar} from './components/layout';
import Home from './components/pages/home';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Contact from './components/pages/contact';
import NotFound from './components/pages/NotFound';
import ProductList from './admin/products';
import CreateProduct from './admin/CreateProduct';

function App(){
return(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/admin/products" element={<ProductList/>} />
    <Route path="/admin/products/create" element={<CreateProduct/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  
  <Footer />
  </BrowserRouter>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
