import React, { useState } from 'react';

const Offers = () => {
    const [offers] = useState([
        {
            id: 1,
            name: "iPhone 14 Pro",
            originalPrice: 1599000,
            discountPrice: 1199000,
            discount: 25,
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop&crop=center",
            category: "Smartphones",
            rating: 4.8,
            timeLeft: "2 días",
            stock: 5
        },
        {
            id: 2,
            name: "Samsung Galaxy Book",
            originalPrice: 1299000,
            discountPrice: 899000,
            discount: 30,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&crop=center",
            category: "Laptops",
            rating: 4.6,
            timeLeft: "5 horas",
            stock: 3
        },
        {
            id: 3,
            name: "AirPods Max",
            originalPrice: 899000,
            discountPrice: 649000,
            discount: 28,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop&crop=center",
            category: "Audio",
            rating: 4.9,
            timeLeft: "1 día",
            stock: 8
        },
        {
            id: 4,
            name: "iPad Pro 12.9",
            originalPrice: 1999000,
            discountPrice: 1499000,
            discount: 25,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&crop=center",
            category: "Tablets",
            rating: 4.7,
            timeLeft: "3 días",
            stock: 12
        }
    ]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(price);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        🔥 OFERTAS ESPECIALES
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                        Super Ofertas
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Aprovecha estas ofertas limitadas con descuentos increíbles
                    </p>
                </div>

                {/* Banner de Oferta Flash */}
                <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 mb-12 text-white text-center">
                    <h2 className="text-3xl font-bold mb-2">¡Flash Sale!</h2>
                    <p className="text-xl mb-4">Hasta 50% de descuento en productos seleccionados</p>
                    <div className="flex justify-center items-center space-x-4 text-2xl font-mono">
                        <div className="bg-white/20 px-3 py-2 rounded">12</div>
                        <span>:</span>
                        <div className="bg-white/20 px-3 py-2 rounded">34</div>
                        <span>:</span>
                        <div className="bg-white/20 px-3 py-2 rounded">56</div>
                    </div>
                    <p className="text-sm mt-2 opacity-90">Horas : Minutos : Segundos</p>
                </div>

                {/* Grid de Ofertas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    {offers.map(offer => (
                        <div key={offer.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative">
                            {/* Badge de Descuento */}
                            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                -{offer.discount}%
                            </div>

                            {/* Badge de Stock Limitado */}
                            {offer.stock <= 5 && (
                                <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                                    ¡Últimas {offer.stock} unidades!
                                </div>
                            )}

                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <img
                                        src={offer.image}
                                        alt={offer.name}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-gray-800">{offer.name}</h3>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="ml-1 text-sm text-gray-600">{offer.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-purple-600 mb-3 font-medium">{offer.category}</p>

                                    <div className="mb-4">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-3xl font-bold text-gray-900">{formatPrice(offer.discountPrice)}</span>
                                        </div>
                                        <span className="text-lg text-gray-500 line-through">{formatPrice(offer.originalPrice)}</span>
                                    </div>

                                    <div className="mb-4 p-3 bg-red-50 rounded-lg">
                                        <div className="flex items-center text-red-600">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm font-medium">Termina en: {offer.timeLeft}</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Comprar Ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter de Ofertas */}
                <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        ¿No quieres perderte ninguna oferta?
                    </h2>
                    <p className="text-xl mb-6 opacity-90">
                        Suscríbete y sé el primero en enterarte de nuestras ofertas flash
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="flex-1 px-6 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                        />
                        <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                            Suscribirme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;