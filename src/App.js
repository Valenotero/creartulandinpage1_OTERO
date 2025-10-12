import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Offers from './pages/Offers';
import Contact from './pages/Contact';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    // Productos para la búsqueda
    const products = [
        {
            id: 1,
            name: "iPhone 15 Pro",
            price: 1299000,
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center",
            category: "Smartphones",
            rating: 4.9
        },
        {
            id: 2,
            name: "MacBook Pro M3",
            price: 2499000,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop&crop=center",
            category: "Laptops",
            rating: 4.8
        },
        {
            id: 3,
            name: "AirPods Pro",
            price: 349000,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop&crop=center",
            category: "Audio",
            rating: 4.7
        },
        {
            id: 4,
            name: "iPad Air",
            price: 899000,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&crop=center",
            category: "Tablets",
            rating: 4.6
        },
        {
            id: 5,
            name: "Apple Watch Ultra",
            price: 1199000,
            image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=300&fit=crop&crop=center",
            category: "Wearables",
            rating: 4.8
        },
        {
            id: 6,
            name: "Samsung Galaxy S24",
            price: 1099000,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&crop=center",
            category: "Smartphones",
            rating: 4.7
        }
    ];

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'products':
                return <Products />;
            case 'categories':
                return <Categories />;
            case 'offers':
                return <Offers />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                products={products}
            />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default App;