import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from './Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        const url = `http://localhost:5000/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${user.email}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Delete sucessfullay')
                    const remaining = orders.filter(i => i._id !== id)
                    setOrders(remaining)
                }
            })
    }


    return (
        <div className="container mx-auto p-10">
            <h1 className="section-head text-6xl text-center py-10">Your booked services</h1>
            <div className="sm:grid grid-cols-2 gap-8">
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                        handle={handleDelete}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrders;