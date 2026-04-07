import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { OrderContext } from '../context/OrderContext';
import Message from '../components/ui/Message';
import Spinner from '../components/ui/Spinner';

const CheckoutPage = () => {
    const history = useHistory();
    const { cartItems, cartTotal, clearCart } = useContext(CartContext);
    const { userInfo } = useContext(AuthContext);
    const { order, loading, error, createOrder } = useContext(OrderContext);

    const [shippingAddress, setShippingAddress] = useState({
        street: '',
        city: 'Mumbai',
        postalCode: '',
        state: 'Maharashtra',
        country: 'India'
    });
    const [paymentMethod, setPaymentMethod] = useState('Stripe'); // Default payment method

    useEffect(() => {
        if (order) {
            history.push(`/profile`);
            clearCart();
        }
    }, [order, history, clearCart]);

    const handleShippingChange = (e) => {
        setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
    };

    const placeOrderHandler = (e) => {
        e.preventDefault();
        createOrder({
            orderItems: cartItems,
            shippingAddress,
            paymentMethod,
            itemsPrice: cartTotal,
            shippingPrice: 0, // Example value
            totalPrice: cartTotal // Example value
        });
    };

    const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <form onSubmit={placeOrderHandler}>
                        {/* Shipping Information */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address</label>
                                    <input type="text" name="street" id="street" required value={shippingAddress.street} onChange={handleShippingChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" name="city" id="city" required value={shippingAddress.city} onChange={handleShippingChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100" readOnly />
                                    </div>
                                    <div>
                                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">PIN Code</label>
                                        <input type="text" name="postalCode" id="postalCode" required value={shippingAddress.postalCode} onChange={handleShippingChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                            <div className="space-y-2">
                                <label className="flex items-center p-3 border rounded-lg">
                                    <input type="radio" name="paymentMethod" value="Stripe" checked={paymentMethod === 'Stripe'} onChange={(e) => setPaymentMethod(e.target.value)} className="form-radio text-teal-600" />
                                    <span className="ml-3 text-gray-700">Credit/Debit Card (Stripe)</span>
                                </label>
                                <label className="flex items-center p-3 border rounded-lg">
                                    <input type="radio" name="paymentMethod" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} className="form-radio text-teal-600" />
                                    <span className="ml-3 text-gray-700">Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4 border-b pb-4">Order Summary</h2>
                    <div className="space-y-3 mb-4">
                        {cartItems.map(item => (
                            <div key={item.product} className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">{item.name} x {item.qty}</span>
                                <span className="font-medium">{formatPrice(item.price * item.qty)}</span>
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-4 space-y-2">
                         <div className="flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>{formatPrice(cartTotal)}</span>
                        </div>
                    </div>
                    {error && <Message variant="danger" className="mt-4">{error}</Message>}
                    <button onClick={placeOrderHandler} disabled={loading} className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-400">
                        {loading ? <Spinner /> : 'Place Order'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;