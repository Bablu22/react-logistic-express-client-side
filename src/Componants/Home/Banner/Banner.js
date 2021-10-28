import React from 'react';
import './Banner.css'
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1 className="sm:text-7xl font-bold mb-5 sm:leading-snug text-4xl	leading-snug italic">Wherever you're going next, <br /> <span className="text-yellow-600">we'll find a way</span> </h1>
                <div className="banner-text text-xl">
                    <Typewriter
                        loop={true}
                        options={{
                            strings: ['Safe & Reliable Logistic Solutions! 🎆', 'WE OFFER QUICK & POWERFUL LOGISTICS SOLUTION.📦', 'Run on the rocky streets 🚐'],
                            autoStart: true,
                            loop: true,

                        }}
                    />
                </div>

                <button

                    type="submit"
                    className="w-100 mx-auto block bg-indigo-500 border-2 border-indigo-500 text-white-500 text-lg  transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300  font-semibold rounded-lg px-16 py-1 mt-6">Read More</button>
            </div>
        </div>
    );
};

export default Banner;