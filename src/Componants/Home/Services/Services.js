import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import '../About/About.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {

    const [services, setServices] = useState([])
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        setIsLoad(true)
        fetch('https://polar-anchorage-43986.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoad(false)
            })
    }, [])

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos="fade-up" className="container mx-auto mt-32 mb-10 p-5">

            <p className="about-span text-center text-3xl mb-4">Our Services</p>
            <h2 className="section-head text-center text-5xl font-medium mb-16">What We Can Do For You</h2>
            <div>
                {isLoad && <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>}
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
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