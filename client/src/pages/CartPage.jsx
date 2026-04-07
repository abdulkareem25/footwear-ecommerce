import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Message from '../components/ui/Message'; // Assuming this component is also refactored or generic

const CartPage = () => {
  const history = useHistory();
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const checkoutHandler = () => {
    history.push('/login?redirect=checkout');
  };

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is empty <Link to="/shop" className="text-teal-600 hover:underline">Go Back</Link>
        </Message>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm" key={item.product}>
                    <div className="w-24 h-24 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md"/>
                    </div>
                    <div className="flex-1">
                        <Link to={`/product/${item.product}`} className="font-semibold text-lg text-gray-800 hover:text-teal-600 transition-colors">{item.name}</Link>
                        <div className="text-sm text-gray-500 mt-1">Color: {item.color} | Size: {item.size}</div>
                        <div className="font-bold text-teal-700 mt-2">{formatPrice(item.price)}</div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <select
                            className="form-select block w-20 py-1 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                            value={item.qty}
                            onChange={(e) => addToCart(item, Number(e.target.value), item.color, item.size)}
                        >
                            {[...Array(item.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                            ))}
                        </select>
                        <button
                            className="text-red-600 hover:text-red-800 transition-colors"
                            onClick={() => removeFromCart(item.product)}
                            title="Remove item"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit lg:col-span-1">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-4">
                    Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                </h3>
                <div className="flex justify-between font-bold text-lg my-4">
                    <span>Total</span>
                    <span>
                    {formatPrice(
                    cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
                    )}
                    </span>
                </div>
                <button
                    className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                >
                    Proceed To Checkout
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;