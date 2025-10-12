import React, { useState, useEffect } from 'react';

const SearchModal = ({ isOpen, onClose, products }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 0) {
            const results = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, products]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(price);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Buscar Productos</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            autoFocus
                        />
                        <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="max-h-64 overflow-y-auto">
                    {searchResults.length > 0 ? (
                        <div className="p-4 space-y-2">
                            {searchResults.map(product => (
                                <div key={product.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg" />
                                    <div className="ml-3 flex-1">
                                        <h4 className="font-medium text-gray-800">{product.name}</h4>
                                        <p className="text-sm text-purple-600">{product.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-800">{formatPrice(product.price)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : searchTerm.length > 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.485 0-4.751.952-6.427 2.511" />
                            </svg>
                            <p>No se encontraron productos para "{searchTerm}"</p>
                        </div>
                    ) : (
                        <div className="p-8 text-center text-gray-500">
                            <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <p>Comienza a escribir para buscar productos</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;