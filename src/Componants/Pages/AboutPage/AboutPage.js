import React from 'react';
import About from '../../Home/About/About';
import immage1 from '../../../images/person_1.jpg.webp'
import immage2 from '../../../images/person_2.jpg.webp'
import immage3 from '../../../images/person_3.jpg.webp'
import partner1 from '../../../images/partner/partner-1.png'
import partner2 from '../../../images/partner/partner-2.png'
import partner3 from '../../../images/partner/partner-3.png'
import partner4 from '../../../images/partner/partner-4.png'
import partner5 from '../../../images/partner/partner-5.png'
import partner6 from '../../../images/partner/partner-6.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AboutPage = () => {

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



    return (
        <div className="container mx-auto">
            <About></About>

            <div>
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 mt-24">
                    <div className="text-center pb-12">
                        <h2 className="text-base text-2xl about-span">
                            We have the best equipment in the market
                        </h2>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading section-head">
                            Check our awesome team members
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div>
                                <img src={immage1} className="object-center object-cover h-auto w-full" alt="" />
                            </div>
                            <div className="text-center py-8 sm:py-6">
                                <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                                <p className="text-base text-gray-400 font-normal">CEO</p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div>
                                <img src={immage2} className="object-center object-cover h-auto w-full" alt="" />
                            </div>
                            <div className="text-center py-8 sm:py-6">
                                <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                                <p className="text-base text-gray-400 font-normal">Manager</p>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                            <div>
                                <img src={immage3} className="object-center object-cover h-auto w-full" alt="" />
                            </div>
                            <div className="text-center py-8 sm:py-6">
                                <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                                <p className="text-base text-gray-400 font-normal">Assistant Manager</p>
                            </div>
                        </div>
                    </div>
                </section>
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

export default AboutPage;