import React, { useState, useContext } from 'react';
import { Link, } from 'react-router-dom';
import useAuth from '../../features/auth/hooks/useAuth';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { handleSignOut } = useAuth();

    const logoutHandler = async (e) => {
        e.preventDefault();
        await handleSignOut();
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="text-center lg:text-left">
                        <Link to="/" className="text-2xl font-bold text-teal-600">Elegance Steps</Link>
                        <p className="text-xs text-gray-500 hidden sm:block">Step into Sophistication</p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-teal-600 font-medium">Home</Link>
                        <Link to="/shop" className="text-gray-600 hover:text-teal-600 font-medium">Shop</Link>
                        <Link to="/about" className="text-gray-600 hover:text-teal-600 font-medium">About</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-teal-600 font-medium">Contact</Link>
                    </nav>

                    {/* Header Actions */}
                    <div className="flex items-center space-x-4">
                        {/* <Link to="/cart" className="relative text-gray-600 hover:text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemCount}</span>
                            )} 
                        </Link> */}
                        {/* {userInfo ? ( */}
                             <div className="relative">
                                <button onClick={logoutHandler} className="text-gray-600 hover:text-teal-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                </button>
                            </div>
                        {/* // ) : ( */}
                            <Link to="/signin" className="text-gray-600 hover:text-teal-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </Link>
                        {/* // )} */}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="lg:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;