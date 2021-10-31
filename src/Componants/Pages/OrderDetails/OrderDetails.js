import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import OrderForm from '../OrderForm/OrderForm';
import SingleOrder from './SingleOrder';

const OrderDetails = () => {
    const { detailsId } = useParams()
    const [services, SetServices] = useState([])

    useEffect(() => {
        const url = `https://polar-anchorage-43986.herokuapp.com/services/${detailsId}`
        fetch(url)
            .then(res => res.json())
            .then(data => SetServices(data))
    }, [])

    const item = services.find(event => event?._id === detailsId)

    return (
        <div className="container mx-auto">
            <div className="">
                <h1 className='text-center section-head text-6xl mt-5'>Book Your Service</h1>
                <div className="sm:grid grid-cols-2 g-4  p-10">
                    <div className="sm:w-6/12 mx-auto">
                        {
                            services.map(service => <SingleOrder
                                key={service._id}
                                service={service}
                            ></SingleOrder>)
                        }
                    </div>
                    <div>
                        <OrderForm
                            id={item}
                        ></OrderForm>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderDetails;