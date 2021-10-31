import React from 'react';
import userImage from '../../../images/user2.jpg'

const OrdersTable = (props) => {
    const { name, itemName, status, email, user, date, _id } = props.orders

    return (
        <>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={user === null ? userImage : user} alt="" />
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{name}</div>
                                <div className="text-sm text-gray-500">{email}</div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{itemName}</div>
                        <div className="text-sm text-gray-500">{date}</div>
                        <div className="text-sm text-gray-500">ID: {_id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 inline-flex text-xs leading-5 font-semibold rounded-full ${status === 'Pending' ? "bg-red-200" : 'bg-green-200'} text-green-800`}>
                            {status}
                        </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                        <button
                            onClick={() => props.update(_id)}
                            className="text-indigo-600 hover:text-indigo-900">
                            {status === 'approved' ? <i class="fas fa-check-circle"></i> :
                                <i class="far fa-check-circle"></i>}
                        </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                        <button
                            onClick={() => props.handle(_id)}
                            className="text-indigo-600 hover:text-indigo-900">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>

            </tbody>
        </>
    );
};

export default OrdersTable;