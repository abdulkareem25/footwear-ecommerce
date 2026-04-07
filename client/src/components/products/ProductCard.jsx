import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = (e) => {
    e.preventDefault(); // Prevent link navigation when clicking the button
    addToCart(product, 1, product.colors[0], product.sizes[0]);
    // Optionally, show a toast notification here
  };

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product._id}`}>
        <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h3 className="text-md font-semibold text-gray-800 mt-1 truncate">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-gray-900 mt-2">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button 
            onClick={addToCartHandler}
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;