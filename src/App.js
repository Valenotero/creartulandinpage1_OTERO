import React from 'react';
import { Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Offers from './pages/Offers';
import Contact from './pages/Contact';


function App() {

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/categorias" element={<Categories />} />
                    <Route path="/ofertas" element={<Offers />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </main>
            
            <Footer />
        </div>
    );
}

export default App;