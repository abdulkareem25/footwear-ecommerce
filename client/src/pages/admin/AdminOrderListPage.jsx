import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/ui/Spinner';
import Message from '../../components/ui/Message';

const AdminOrderListPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const { data } = await axios.get('/api/admin/orders');
                setOrders(data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.error || 'Could not fetch orders');
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);
    
    const markAsDelivered = async (orderId) => {
        try {
            await axios.put(`/api/admin/orders/${orderId}/deliver`);
            setOrders(orders.map(o => o._id === orderId ? { ...o, isDelivered: true } : o));
        } catch (err) {
            alert('Failed to mark as delivered');
        }
    }

    const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">All Orders</h2>
            {loading ? <Spinner /> : error ? <Message variant="danger">{error}</Message> : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivered</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{order._id}</td>
                                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{order.user?.name}</td>
                                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                                    <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{formatPrice(order.totalPrice)}</td>
                                    <td className="py-4 px-6 whitespace-nowrap text-sm">
                                        {order.isDelivered ? <span className="text-green-600">Yes</span> : <span className="text-red-600">No</span>}
                                    </td>
                                    <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                                        {!order.isDelivered && (
                                            <button onClick={() => markAsDelivered(order._id)} className="text-teal-600 hover:text-teal-900">Mark as Delivered</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminOrderListPage;