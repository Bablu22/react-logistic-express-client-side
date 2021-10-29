import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import '../About/About.css'
const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container mx-auto mt-32 mb-10 p-5">

            <p className="about-span text-center text-3xl mb-4">Our Services</p>
            <h2 className="section-head text-center text-5xl font-medium mb-16">What We Can Do For You</h2>
            <div className="sm:grid grid-cols-4 gap-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;