import React, { useEffect } from 'react';
import './Client.css'
import image1 from '../../../images/img1.webp'
import image2 from '../../../images/img2.webp'
import image3 from '../../../images/img3.webp'
import image4 from '../../../images/img4.webp'
import partner1 from '../../../images/partner/partner-1.png'
import partner2 from '../../../images/partner/partner-2.png'
import partner3 from '../../../images/partner/partner-3.png'
import partner4 from '../../../images/partner/partner-4.png'
import partner5 from '../../../images/partner/partner-5.png'
import partner6 from '../../../images/partner/partner-6.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ClientArea = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos="fade-up" className="client-area py-28">
            <div className="container mx-auto p-5">
                <h2 className="text-5xl font-medium text-center mb-16">OUR CLIENTS & COUNTERS</h2>
                <div className="sm:grid grid-cols-4 gap-8 p-5">
                    <div>
                        <img src={image1} alt="" />
                        <h3 className="text-4xl font-bold text-yellow-500 py-5">9123</h3>
                        <h2 className="text-3xl font-medium">EMPLOYEES IN TEAM</h2>
                        <p className="text-gray-500 py-4 mb-8">nvestment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have.</p>
                    </div>
                    <div>
                        <img src={image2} alt="" />
                        <h3 className="text-4xl font-bold text-yellow-500 py-5 mt-3">70102 kmv</h3>
                        <h2 className="text-3xl font-medium">KILOMETER TRAVEL WEEKLY</h2>
                        <p className="text-gray-500 py-4 mb-8">nvestment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have.</p>
                    </div>
                    <div>
                        <img src={image3} alt="" />
                        <h3 className="text-4xl font-bold text-yellow-500 py-5">1254</h3>
                        <h2 className="text-3xl font-medium">WORLDWIDE CLIENTS</h2>
                        <p className="text-gray-500 py-4 mb-8">nvestment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have.</p>
                    </div>
                    <div>
                        <img src={image4} alt="" />
                        <h3 className="text-4xl font-bold text-yellow-500 py-5">20254</h3>
                        <h2 className="text-3xl font-medium">PROJECTS DONE</h2>
                        <p className="text-gray-500 py-4 mb-8">nvestment Assets Properties have ready several locations around the world to take your free listings for any luxury property you have.</p>
                    </div>
                </div>
                <hr />

                <div className="container mx-auto p-10 mt-10">
                    <Slider {...settings}>
                        <div>
                            <img src={partner1} alt="" />
                        </div>
                        <div>
                            <img src={partner2} alt="" />
                        </div>
                        <div>
                            <img src={partner3} alt="" />
                        </div>
                        <div>
                            <img src={partner4} alt="" />
                        </div>
                        <div>
                            <img src={partner5} alt="" />
                        </div>
                        <div>
                            <img src={partner6} alt="" />
                        </div>

                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default ClientArea;