import React from 'react';

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Smartphones",
            description: "Los últimos modelos de teléfonos inteligentes",
            image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center",
            productCount: 25,
            color: "from-purple-500 to-purple-700"
        },
        {
            id: 2,
            name: "Laptops",
            description: "Computadoras portátiles para trabajo y gaming",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&crop=center",
            productCount: 18,
            color: "from-pink-500 to-pink-700"
        },
        {
            id: 3,
            name: "Audio",
            description: "Auriculares, parlantes y equipos de sonido",
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop&crop=center",
            productCount: 32,
            color: "from-indigo-500 to-indigo-700"
        },
        {
            id: 4,
            name: "Tablets",
            description: "Tablets para creatividad y productividad",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&crop=center",
            productCount: 12,
            color: "from-violet-500 to-violet-700"
        },
        {
            id: 5,
            name: "Wearables",
            description: "Smartwatches y dispositivos inteligentes",
            image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop&crop=center",
            productCount: 15,
            color: "from-amber-500 to-amber-700"
        },
        {
            id: 6,
            name: "Gaming",
            description: "Consolas, accesorios y periféricos gaming",
            image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&crop=center",
            productCount: 28,
            color: "from-emerald-500 to-emerald-700"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                        Categorías
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explora nuestras categorías y encuentra exactamente lo que necesitas
                    </p>
                </div>

                {/* Grid de Categorías */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {categories.map(category => (
                        <div key={category.id} className="group cursor-pointer">
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                                        <p className="text-sm opacity-90">{category.productCount} productos</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{category.description}</p>
                                    <button className={`w-full bg-gradient-to-r ${category.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                                        Ver Productos
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        ¿Por qué elegir nuestras categorías?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Productos Verificados</h3>
                            <p className="text-gray-600">Todos nuestros productos pasan por estrictos controles de calidad</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Envío Rápido</h3>
                            <p className="text-gray-600">Entrega en 24-48 horas en toda la región metropolitana</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
                            <p className="text-gray-600">Atención al cliente disponible las 24 horas del día</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;