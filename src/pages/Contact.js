import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('¡Mensaje enviado! Te contactaremos pronto.');
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                        Contáctanos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        ¿Tienes alguna pregunta? Estamos aquí para ayudarte
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Formulario de Contacto */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Asunto
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                >
                                    <option value="">Selecciona un asunto</option>
                                    <option value="consulta-producto">Consulta sobre producto</option>
                                    <option value="soporte-tecnico">Soporte técnico</option>
                                    <option value="garantia">Garantía y devoluciones</option>
                                    <option value="envios">Envíos y entregas</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                    placeholder="Escribe tu mensaje aquí..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Información de Contacto */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Información de contacto</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Dirección</h3>
                                        <p className="text-gray-600">Av. Corrientes 1234, CABA<br />Buenos Aires, Argentina</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Teléfono</h3>
                                        <p className="text-gray-600">+54 11 1234-5678<br />Lunes a Viernes: 9:00 - 18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">info@techstore.com<br />soporte@techstore.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                                        <p className="text-gray-600">+54 9 11 1234-5678<br />Atención inmediata</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Horarios de Atención */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Horarios de Atención</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Lunes - Viernes:</span>
                                    <span className="font-semibold text-gray-800">9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sábados:</span>
                                    <span className="font-semibold text-gray-800">10:00 - 16:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Domingos:</span>
                                    <span className="font-semibold text-gray-800">Cerrado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mapa (Placeholder) */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">¿Cómo llegar?</h2>
                    <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-16 h-16 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-gray-500 text-lg">Mapa interactivo próximamente</p>
                            <p className="text-sm text-gray-400">Av. Corrientes 1234, CABA</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas Frecuentes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">¿Cuál es el tiempo de envío?</h4>
                            <p className="text-gray-600">Los envíos dentro de CABA llegan en 24-48 horas. Para el interior del país, de 3 a 7 días hábiles.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">¿Tienen garantía los productos?</h4>
                            <p className="text-gray-600">Sí, todos nuestros productos tienen garantía oficial del fabricante, más nuestra garantía extendida de TechStore.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">¿Puedo cambiar o devolver un producto?</h4>
                            <p className="text-gray-600">Tienes 30 días para cambios y devoluciones, siempre que el producto esté en perfecto estado.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">¿Qué métodos de pago aceptan?</h4>
                            <p className="text-gray-600">Aceptamos tarjetas de crédito, débito, transferencias bancarias y MercadoPago.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;