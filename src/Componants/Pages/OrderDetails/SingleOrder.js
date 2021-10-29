import React from 'react';
import Rating from 'react-rating';

const SingleOrder = ({ service }) => {
    const { name, img, description, rating, people } = service

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
                        {description}
                    </p>
                    <div className="flex justify-between items-center">
                        <Rating
                            className="text-yellow-500"
                            emptySymbol="fa fa-star-o fa-x"
                            fullSymbol="fa fa-star fa-x"
                            initialRating={rating}
                            readonly
                        />
                        <div className="flex  items-center">
                            <div>
                                <span><i class="fas fa-user-tie"></i></span>
                            </div>
                            <div className="mt-1">
                                <span>{people}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleOrder;