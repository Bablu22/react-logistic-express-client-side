import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, _id } = service


    return (
        <div>
            <div className="shadow-md rounded-md overflow-hidden mb-7">
                <img
                    src={img}
                    className="w-full"
                    alt=""
                />

                <div className="p-4">
                    <h5 className="text-xl font-semibold mb-2">{name}</h5>

                    <p className="mb-4">
                        {description.slice(0, 80)}
                    </p>
                    <Link to={`/details/${_id}`}
                        className=" text-white bg-purple-500 border-2 border-solid border-purple-500  hover:bg-transparent hover:text-purple-500  active:bg-purple-600  font-bold uppercase  text-sm px-4 py-2 rounded outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 w-full "
                    >
                        See More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;