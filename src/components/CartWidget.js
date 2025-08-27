import React, { useState, useEffect } from 'react';
import CartDropdown from './CartDropdown';

const CartWidget = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Cargar carrito del localStorage al inicializar
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div className="relative">
            <div
                className="cursor-pointer group"
                onClick={() => setIsCartOpen(!isCartOpen)}
            >
                <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3m4 8v6a2 2 0 002 2h6a2 2 0 002-2v-6m-8 6V13" />
                    </svg>
                    <span className="font-medium">{getTotalItems()}</span>
                </div>
                {getTotalItems() > 0 && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
            </div>

            <CartDropdown
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </div>
    );
};

export default CartWidget;