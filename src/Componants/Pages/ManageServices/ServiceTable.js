import React from 'react';

const ServiceTable = ({ service, handle }) => {
    const { name, img, _id, } = service
    return (
        <>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={img} alt="" />
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{name}</div>
                    </td>


                    <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                        <button
                            onClick={() => handle(_id)}
                            className="text-red-600 hover:text-indigo-900">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>

            </tbody>
        </>
    );
};

export default ServiceTable;