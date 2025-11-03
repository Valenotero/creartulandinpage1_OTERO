import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import SearchModal from './SearchModal';
import UserModal from './UserModal';

const NavBar = ({ products = [] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);


    const navItems = [
        { key: 'home', label: 'Inicio', path: '/' },
        { key: 'products', label: 'Productos', path: '/productos' },
        { key: 'categories', label: 'Categorías', path: '/categorias' },
        { key: 'offers', label: 'Ofertas', path: '/ofertas' },
        { key: 'contact', label: 'Contacto', path: '/contacto' }
    ];

    const activeClassName = 'text-purple-600 bg-purple-50';
    const inactiveClassName = 'text-gray-700 hover:text-purple-600';

    return (
        <>
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        
                        <Link to="/" className="flex items-center cursor-pointer">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    src="/Logotipotechstore.png"
                                    alt="TechStore Logo"
                                    className="h-10 w-auto"
                                />
                            </div>
                        </Link>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map(item => (
                                    <NavLink
                                        key={item.key}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive ? activeClassName : inactiveClassName}`
                                        }
                                        onClick={() => setIsMenuOpen(false)} // Cerrar menú en mobile
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center space-x-3">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setIsUserModalOpen(true)}
                                    className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </button>
                            </div>
                            <CartWidget />
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-gray-600 hover:text-purple-600 focus:outline-none"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                                {navItems.map(item => (
                                    <NavLink
                                        key={item.key}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive ? 'text-purple-600 bg-purple-100' : 'text-gray-700 hover:text-purple-600'}`
                                        }
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Modals */}
            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                products={products}
            />
            <UserModal
                isOpen={isUserModalOpen}
                onClose={() => setIsUserModalOpen(false)}
            />
        </>
    );
};

export default NavBar;