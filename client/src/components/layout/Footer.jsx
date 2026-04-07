import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Elegance Steps</h4>
                        <p className="text-gray-600">Premium women's footwear crafted in Mumbai for the modern, confident woman.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="#" className="text-gray-600 hover:text-teal-600">Shop All</Link></li>
                            <li><Link to="#" className="text-gray-600 hover:text-teal-600">About Us</Link></li>
                            <li><Link to="#" className="text-gray-600 hover:text-teal-600">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Customer Care</h4>
                        <ul className="space-y-2">
                            <li><Link to="#" className="text-gray-600 hover:text-teal-600">Shipping Info</Link></li>
                            <li><Link to="#" className="text-gray-600 hover:text-teal-600">Returns & Exchanges</Link></li>
                            <li><Link to="#" className="text-gray-600 hover:text-teal-600">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h4>
                        <p className="text-gray-600 mb-4">Subscribe for exclusive offers and new arrivals.</p>
                        <form>
                            <div className="flex">
                                <input type="email" placeholder="Your email" className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-teal-500"/>
                                <button className="bg-teal-600 text-white px-4 py-2 rounded-r-md hover:bg-teal-700">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Elegance Steps. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;