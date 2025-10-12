import React, { useState, useEffect } from 'react';

const UserModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: ''
    });

    useEffect(() => {
        // Verificar si hay un usuario logueado al cargar el componente
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulamos login (en la vida real sería una API)
        const userData = {
            id: Date.now(),
            name: 'Usuario Demo',
            email: formData.email
        };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setIsLoggedIn(true);
        setFormData({ email: '', password: '', name: '', confirmPassword: '' });
        onClose();
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        // Simulamos registro
        const userData = {
            id: Date.now(),
            name: formData.name,
            email: formData.email
        };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setIsLoggedIn(true);
        setFormData({ email: '', password: '', name: '', confirmPassword: '' });
        onClose();
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setIsLoggedIn(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
                {!isLoggedIn ? (
                    <>
                        <div className="p-6 border-b">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex space-x-2 mb-6">
                                <button
                                    onClick={() => setIsLogin(true)}
                                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${isLogin ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => setIsLogin(false)}
                                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${!isLogin ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    Registro
                                </button>
                            </div>
                        </div>

                        <div className="p-6">
                            <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-4">
                                {!isLogin && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                        placeholder="Tu contraseña"
                                    />
                                </div>

                                {!isLogin && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirmar contraseña
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                            placeholder="Confirma tu contraseña"
                                        />
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                                >
                                    {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    // Usuario logueado - Mostrar perfil
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-800">Mi Perfil</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white font-bold">
                                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                </span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800">{user?.name}</h4>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                📦 Mis Pedidos
                            </button>
                            <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                💳 Métodos de Pago
                            </button>
                            <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                📍 Mis Direcciones
                            </button>
                            <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                ⚙️ Configuración
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                            >
                                🚪 Cerrar Sesión
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserModal;