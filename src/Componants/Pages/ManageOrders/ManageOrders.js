import React, { useEffect, useState } from 'react';
import Toastify from 'toastify-js';
import OrdersTable from './OrdersTable';

const ManageOrders = () => {

    const [allorders, setAllOrders] = useState([])
    const [isApproved, setIsApproved] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        fetch('https://polar-anchorage-43986.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
                setIsLoad(false)
            })
    }, [allorders])

    const handleDelete = id => {
        fetch(`https://polar-anchorage-43986.herokuapp.com/orders/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    Toastify({
                        text: "Delete Sucessfull",
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",

                        }
                        // Callback after click
                    }).showToast();
                }
            })
    }


    const updateUsers = id => {

        const url = `https://polar-anchorage-43986.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.setIsApproved) {
                    const updateOrder = allorders.filter((item) => setAllOrders([item]));
                    setIsApproved(true);
                }
            });
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-center section-head sm:text-7xl text-5xl mt-10">Manage All Shipping Orders</h1>

            <div>
                <div className="flex flex-col mb-28 mt-20">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Service
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Approved
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Delete
                                            </th>

                                        </tr>
                                    </thead>
                                    <div className=" w-full ml-96">
                                        {isLoad && <div className="">
                                            <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
                                        </div>}
                                    </div>
                                    {
                                        allorders.map(orders => <OrdersTable
                                            key={orders._id}
                                            orders={orders}
                                            handle={handleDelete}
                                            update={updateUsers}
                                        ></OrdersTable>)
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </div>
    );
};

export default ManageOrders;