import React from 'react';

const CartDropdown = ({ isOpen, onClose, cartItems, setCartItems }) => {
    const updateCart = (newCart) => {
        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    const removeItem = (productId) => {
        const newCart = cartItems.filter(item => item.id !== productId);
        updateCart(newCart);
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            removeItem(productId);
            return;
        }
        const newCart = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        updateCart(newCart);
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(price);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-25 z-40"
                onClick={onClose}
            ></div>

            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-2xl z-50 max-h-96 overflow-hidden">
                <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-800">
                            Mi Carrito ({cartItems.length})
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    <div className="p-8 text-center">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H3m4 8v6a2 2 0 002 2h6a2 2 0 002-2v-6m-8 6V13" />
                        </svg>
                        <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                        <button
                            onClick={onClose}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        >
                            Seguir Comprando
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="max-h-64 overflow-y-auto p-4 space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-800 text-sm">{item.name}</h4>
                                        <p className="text-purple-600 text-sm">{formatPrice(item.price)}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                        >
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-red-500 hover:text-red-700 ml-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t bg-gray-50">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-bold text-gray-800">Total:</span>
                                <span className="text-xl font-bold text-purple-600">{formatPrice(getTotal())}</span>
                            </div>
                            <button
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                                onClick={() => {
                                    alert('¡Funcionalidad de checkout próximamente!');
                                    onClose();
                                }}
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartDropdown;