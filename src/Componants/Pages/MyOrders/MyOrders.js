import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import useAuth from '../../../hooks/useAuth';
import Order from './Order';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [isLoad, setIsLoad] = useState(true)
    const { user } = useAuth()

    useEffect(() => {
        const url = `https://polar-anchorage-43986.herokuapp.com/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setIsLoad(false)

            })
    }, [])

    const handleDelete = id => {
        fetch(`https://polar-anchorage-43986.herokuapp.com/orders/${user.email}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    confirmAlert({
                        title: 'Confirm to submit',
                        message: 'Are you sure to do this.',
                        buttons: [
                            {
                                label: 'Yes',
                                onClick: () => {
                                    const remaining = orders.filter(i => i._id !== id)
                                    setOrders(remaining)
                                }
                            },

                        ]
                    });


                }

            })
    }

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos="fade-up" className="container mx-auto sm:p-10 p-5">
            <h1 className="section-head text-6xl text-center py-10">Your booked services</h1>
            <div>
                {isLoad && <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>}
            </div>
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