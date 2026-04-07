import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { OrderContext } from '../context/OrderContext';
import Spinner from '../components/ui/Spinner';
import Message from '../components/ui/Message';

const ProfilePage = () => {
    const { userInfo } = useContext(AuthContext);
    const { orders, loading, error, getMyOrders } = useContext(OrderContext);
    const [activeTab, setActiveTab] = useState('orders');

    useEffect(() => {
        getMyOrders();
    }, []);

    const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;
    const formatDate = (date) => new Date(date).toLocaleDateString('en-IN');

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">My Profile</h1>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Tabs */}
                <div className="md:w-1/4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <button onClick={() => setActiveTab('orders')} className={`w-full text-left p-3 rounded-md mb-2 ${activeTab === 'orders' ? 'bg-teal-100 text-teal-700 font-semibold' : 'hover:bg-gray-100'}`}>My Orders</button>
                        <button onClick={() => setActiveTab('details')} className={`w-full text-left p-3 rounded-md ${activeTab === 'details' ? 'bg-teal-100 text-teal-700 font-semibold' : 'hover:bg-gray-100'}`}>Account Details</button>
                    </div>
                </div>

                {/* Content */}
                <div className="md:w-3/4">
                    {activeTab === 'orders' && (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Order History</h2>
                            {loading ? <Spinner /> : error ? <Message variant="danger">{error}</Message> : (
                                <div className="space-y-6">
                                    {orders.length > 0 ? orders.map(order => (
                                        <div key={order._id} className="border rounded-lg p-4">
                                            <div className="flex justify-between items-center mb-3 pb-3 border-b">
                                                <div>
                                                    <p className="font-semibold">Order ID: <span className="font-normal text-gray-600">{order._id}</span></p>
                                                    <p className="text-sm text-gray-500">Date: {formatDate(order.createdAt)}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold text-lg">{formatPrice(order.totalPrice)}</p>
                                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${order.isDelivered ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.isDelivered ? 'Delivered' : 'Processing'}</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                {order.orderItems.map(item => (
                                                    <div key={item._id} className="flex items-center gap-4 text-sm">
                                                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover"/>
                                                        <div>
                                                            <p className="font-medium text-gray-800">{item.name}</p>
                                                            <p className="text-gray-500">{item.qty} x {formatPrice(item.price)}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )) : <p>You have no orders.</p>}
                                </div>
                            )}
                        </div>
                    )}
                    {activeTab === 'details' && (
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Full Name</label>
                                    <p className="text-lg">{userInfo.name}</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Email Address</label>
                                    <p className="text-lg">{userInfo.email}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;