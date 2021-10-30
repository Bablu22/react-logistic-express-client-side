import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Image from '../../../images/user.png'

const Order = ({ order, handle }) => {
    const { user } = useAuth()
    const { itemName, itemImg, date, _id, address, status, phone } = order
    return (
        <div>
            <div className="sm:flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 mb-4">
                <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300" src={itemImg} />
                <div id="body" className="flex flex-col ml-5">
                    <h4 id="name" className="text-xl font-semibold mb-2">Service Name: {itemName}</h4>
                    <p id="job" className="text-gray-800 mt-2">Shipping Date: {date}</p>
                    <p id="job" className="text-gray-800 mt-2">Shipping Aaddress: {address}</p>
                    <p id="job" className="text-gray-800 mt-2">Contact: {phone}</p>
                    <p id="job" className={`px-3 inline-flex text-xs leading-5 font-semibold rounded-sm mt-2 ${status === 'Pending' ? "bg-red-200" : 'bg-green-200'} text-green-800`}>Status: {status}</p>
                    <div className="flex mt-5">
                        <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src={user.photoURL === null ? Image : user.photoURL} />
                        <p className="ml-3">{user.displayName === null ? 'User' : user.displayName}</p>
                    </div>
                    <button
                        onClick={() => handle(_id)}
                        className=" mt-16  pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Cancle</button>

                </div>
            </div>
        </div>
    );
};

export default Order;