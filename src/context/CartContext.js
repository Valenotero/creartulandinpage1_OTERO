import React, { useState, useEffect, createContext, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {

        if (cartItems.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cart');
        }
    }, [cartItems]);

    const addItem = (product, quantity) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
    };

    const removeItem = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const value = {
        cartItems,
        addItem,
        removeItem,
        clearCart,
        getTotalItems,
        setCartItems
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};