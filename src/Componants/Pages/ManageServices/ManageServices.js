import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import AddService from '../AddService/AddService';
import ServiceTable from './ServiceTable';

const ManageServices = () => {
    const [services, setServices] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        fetch('https://polar-anchorage-43986.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoad(false)
            })
    }, [])


    const handleDelete = id => {
        fetch(`https://polar-anchorage-43986.herokuapp.com/services/${id}`, {
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
                                    const remaining = services.filter(i => i._id !== id)
                                    setServices(remaining)
                                }
                            },

                        ]
                    });

                }

            })
    }


    return (
        <div className="container mx-auto">
            <h2 className="section-head sm:text-7xl my-10 text-4xl text-center">Manage Your Service</h2>
            <div className="sm:grid grid-cols-2 gap-2">
                <div className="w-full">
                    <h2 className="text-center w-1/2 mx-auto text-4xl border-b-2 border-yellow-500  about-span">All service List</h2>
                    <div className="flex flex-col mb-28 mt-6">
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
                                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Delete
                                                </th>

                                            </tr>
                                        </thead>
                                        <div>
                                            {isLoad && <div className="flex justify-center items-center">
                                                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
                                            </div>}
                                        </div>
                                        {
                                            services.map(service => <ServiceTable
                                                key={service._id}
                                                service={service}
                                                handle={handleDelete}

                                            ></ServiceTable>)
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <AddService></AddService>
                </div>
            </div>

        </div>
    );
};

export default ManageServices;