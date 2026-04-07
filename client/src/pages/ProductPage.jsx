import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import Spinner from '../components/ui/Spinner';
import Message from '../components/ui/Message';

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error, getProductDetails } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    getProductDetails(id);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
    }
    if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  const addToCartHandler = () => {
    addToCart(product, qty, selectedColor, selectedSize);
    // Add toast notification here
  };

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="container mx-auto px-4 py-12">
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100 rounded-lg overflow-hidden">
                <img src={product.images && product.images[0]} alt={product.name} className="w-full h-full object-cover object-center"/>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl text-gray-800 mt-2">{formatPrice(product.price || 0)}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
            
            <div className="mt-6">
                <h3 className="text-sm text-gray-800 font-medium">Color</h3>
                <div className="flex items-center space-x-3 mt-2">
                    {product.colors?.map(color => (
                        <button key={color} className={`h-8 w-8 rounded-full border-2 transition ${selectedColor === color ? 'border-teal-600 ring-2 ring-teal-500' : 'border-gray-300'}`} style={{backgroundColor: color.toLowerCase()}} onClick={() => setSelectedColor(color)}>
                            <span className="sr-only">{color}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-sm text-gray-800 font-medium">Size</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {product.sizes?.map(size => (
                        <button key={size} className={`py-2 px-4 border rounded-md transition ${selectedSize === size ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'}`} onClick={() => setSelectedSize(size)}>{size}</button>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-sm text-gray-800 font-medium">Quantity</h3>
                <div className="flex items-center border border-gray-300 rounded-md w-fit mt-2">
                    <button className="px-3 py-2 text-lg" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                    <input type="text" className="w-12 text-center border-l border-r" value={qty} readOnly />
                    <button className="px-3 py-2 text-lg" onClick={() => setQty(qty < product.stock ? qty + 1 : product.stock)}>+</button>
                </div>
            </div>

            <button onClick={addToCartHandler} disabled={product.stock === 0} className="mt-8 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;