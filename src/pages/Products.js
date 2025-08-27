import React, { useState } from 'react';

const Products = () => {
    const [products] = useState([
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
    ]);

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const categories = ['Todos', ...new Set(products.map(product => product.category))];

    const filterProducts = (category) => {
        setSelectedCategory(category);
        if (category === 'Todos') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    };

    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = existingCart.find(item => item.id === product.id);

        let newCart;
        if (existingItem) {
            newCart = existingCart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            newCart = [...existingCart, { ...product, quantity: 1 }];
        }

        localStorage.setItem('cart', JSON.stringify(newCart));

        // Mostrar notificación
        alert(`¡${product.name} agregado al carrito!`);

        // Recargar página para actualizar contador del carrito
        window.location.reload();
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(price);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                        Nuestros Productos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre la mejor tecnología con garantía y envío gratis
                    </p>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => filterProducts(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid de Productos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-purple-600 mb-3 font-medium">{product.category}</p>
                                <p className="text-2xl font-bold text-gray-900 mb-4">{formatPrice(product.price)}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;